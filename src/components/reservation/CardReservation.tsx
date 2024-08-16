import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../Button'
import Input from '../Input'
import { useDateStore, useTimeStore, useMeetingStore, useModalStore } from '../../store/store'
import CompleteModal from './CompleteModal'

interface CardReservationProps {
  counselorId?: string
}
interface CounselorProps {
  name: string
  counselingMethods: string[]
  counselingFields: string[]
}

const CardReservation: React.FC<CardReservationProps> = ({ counselorId }) => {
  const selectedDate = useDateStore((state) => state.selectedDate) // 저장된 날짜 불러오기
  const selectedTime = useTimeStore((state) => state.selectedTime) // 저장된 시간 불러오기
  const { modalOpen, openModal } = useModalStore()
  const { meetingType, onlineOption } = useMeetingStore() // 저장된 장소 불러오기
  const price = 50000 // 상담 금액 (임시 하드코딩)
  const address: string = '서울특별시 강남구 학동로 426' // 임의의 주소로 임시고정 후에 실제 데이터로 변경해야 함
  const [counselor, setCounselor] = useState<CounselorProps>()
  const counselContent = counselor?.counselingFields.join(', ') // 상담 분야

  // 날짜를 "YYYY.MM.DD" 형식으로 포맷
  const formatDateDot = (date: Date) => {
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
  }
  // 날짜를 "YYYY-MM-DD" 형식으로 포맷
  const formatDateSlash = (date: Date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0') // 두 자리수로 맞추기
    const day = String(date.getDate()).padStart(2, '0') // 두 자리수로 맞추기
    return `${year}-${month}-${day}`
  }

  // 시간을 "HH:MM:SS.00" 형식으로 포맷
  const formatTime = (time: string) => {
    return `${time}`
  }

  // 상담서 api 요청
  useEffect(() => {
    axios
      .get(`/api/counselor/${counselorId}`)
      .then((response) => {
        if (response.data.isSuccess) {
          setCounselor(response.data.result)
        } else {
          console.log('API 요청 실패', response.data.message)
        }
      })
      .catch((error) => {
        console.log('API 요청 에러', error)
      })
  }, [counselorId])

  // 서버에 예약 정보를 POST로 전송하는 함수
  const handleReservation = async () => {
    if (!selectedDate || !selectedTime) {
      alert('상담 날짜와 시간을 선택해 주세요.')
      return
    }

    const reservationData = {
      counselorId,
      counselDate: formatDateSlash(selectedDate), // "YYYY-MM-DD" 형식
      counselTime: formatTime(selectedTime), // "HH:MM:SS.00" 형식
      counselContent,
      location: meetingType === '온라인' ? onlineOption : address,
      price,
    }
    try {
      const response = await axios.post('/api/reservation/create', reservationData)
      if (response.status === 200) {
        openModal() // 예약 완료 모달 오픈
      }
    } catch (error) {
      console.error('예약 요청 중 에러가 발생했습니다:', error)
      alert('예약 요청에 실패했습니다. 다시 시도해 주세요.')
    }
  }

  return (
    <div className="sticky top-[80px] z-10 flex h-auto w-[430px] flex-col gap-[24px] rounded-[10px] bg-white p-[20px] text-black shadow">
      {/* 예약 정보 */}
      <div className="xsbold">예약 정보 </div>
      <div className="flex flex-col gap-[24px] rounded-lg border border-gray-100 bg-gray-50 p-[16px]">
        {/* 날짜 */}
        <div className="flex flex-col gap-[8px]">
          <div className="bodysmsemibold text-gray-600">날짜</div>
          <div className="bodymdsemibold text-gray-900">
            {selectedDate ? formatDateDot(selectedDate) : '미선택'}
          </div>
        </div>
        {/* 시간 */}
        <div className="flex flex-col gap-[8px]">
          <div className="bodysmsemibold text-gray-600">시간</div>
          <div className="bodymdsemibold text-gray-900">{selectedTime || '미선택'}</div>
        </div>
        {/* 장소 */}
        <div className="flex flex-col gap-[8px]">
          <div className="bodysmsemibold text-gray-600">장소</div>
          <div className="flex flex-row gap-[8px]">
            <div className="bodymdsemibold text-gray-900">
              {meetingType === '온라인' ? onlineOption : address}
            </div>
            <div className="bodyxssemibold flex h-6 w-auto items-center justify-center rounded-[99px] border border-pink-100 bg-pink-50 px-2 text-pink-600">
              {meetingType}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="bodysmsemibold text-gray-600">상담 내용</div>
          <div className="bodymdsemibold text-gray-900">{counselContent}</div>
        </div>
      </div>
      {/* 결제 정보 */}
      <div className="xsbold">결제 정보</div>
      <div className="flex flex-row items-center justify-between text-center">
        <div className="bodysmsemibold text-gray-600">상담 금액</div>
        <div className="bodymdsemibold text-gray-900">{price.toLocaleString()}원</div>
      </div>
      <div className="flex flex-row items-center justify-between text-center">
        <div className="bodysmsemibold text-gray-600">보유 포인트</div>
        <div className="bodymdsemibold text-gray-900">0원</div>
      </div>
      <div className="flex flex-row items-center justify-between text-center">
        <div className="bodysmsemibold text-gray-600">사용 포인트</div>
        <Input
          type="Button"
          placeholder="0원"
          btnLabel="전액사용"
          btnEvent={() => alert('전액사용 클릭됨')}
        />
      </div>
      <div className="border border-gray-100"></div>
      <div className="flex flex-row items-center justify-between text-center">
        <div className="bodysmsemibold text-gray-600">결제 금액</div>
        <div className="bodymdsemibold text-gray-900">{price.toLocaleString()}원</div>
      </div>
      <div className="flex flex-row items-center justify-between text-center">
        <div className="bodysmsemibold text-gray-600">카드결제</div>
        <img src="/src/assets/images/icon/icon_checked_pink.svg" alt="체크" />
      </div>
      <div className="flex items-center justify-center">
        {selectedDate != null && selectedTime != null ? (
          <Button
            label="다음"
            size="XLarge"
            color="pink"
            onClick={handleReservation} // 예약 처리 함수 호출
          />
        ) : (
          <Button
            label="다음"
            size="XLarge"
            color="gray"
            onClick={() => alert('상담 날짜와 시간을 선택해 주세요.')}
          />
        )}
      </div>
      {modalOpen ? <CompleteModal /> : null}
    </div>
  )
}

export default CardReservation
