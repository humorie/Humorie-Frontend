import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../common/Button'
import Input from '../common/Input'
import { useDateStore, useTimeStore, useMeetingStore, useModalStore } from '../../store/store'
// import PortOne from '../../services/PortOneApi'
import { ResvationType } from '../common/Types'
// import { useFetchCounselor } from '../../hooks/useFetchCounselor'
import CompleteModal from './CompleteModal'

interface PointProps {
  totalPoints: number
}

// const CardReservation: React.FC<ResvationType> = ({ counselorId }) => {
const CardReservation: React.FC<ResvationType> = () => {
  const price = 0
  const selectedDate = useDateStore((state) => state.selectedDate) // 저장된 날짜 불러오기
  const selectedTime = useTimeStore((state) => state.selectedTime) // 저장된 시간 불러오기
  const { meetingType, onlineOption } = useMeetingStore() // 저장된 장소 불러오기
  // const { counselor } = useFetchCounselor(counselorId)
  // const [reservationUid, setReservationUid] = useState<string | null>(null) // 예약 UID 상태 추가
  const [point, setPoint] = useState<PointProps>({ totalPoints: 0 }) // 기본값 0으로 설정
  const [finalPrice, setFinalPrice] = useState<number>(price) // 결제 금액
  const [usedPoints, setUsedPoints] = useState<number>(0) // 사용 포인트
  // const counselContent = counselor?.symptoms.join(', ') // 상담 분야
  const address: string = '서울특별시 강남구 학동로 426'
  const { modalOpen, openModal } = useModalStore() // complete 모달창 store

  // 날짜를 "YYYY.MM.DD" 형식으로 포맷
  const formatDateDot = (date: Date) => {
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
  }
  // 날짜를 "YYYY-MM-DD" 형식으로 포맷
  // const formatDateSlash = (date: Date) => {
  //   const year = date.getFullYear()
  //   const month = String(date.getMonth() + 1).padStart(2, '0') // 두 자리수로 맞추기
  //   const day = String(date.getDate()).padStart(2, '0') // 두 자리수로 맞추기
  //   return `${year}-${month}-${day}`
  // }

  // 시간을 "HH:MM:SS.00" 형식으로 포맷
  // const formatTime = (time: string) => {
  //   return `${time}`
  // }

  // 보유 포인트 조회 API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken')
        const response = await axios.get('/api/points/total', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        // console.log('보유 포인트 조회 API 결과: ', response.data.result)
        setPoint(response.data.result)
      } catch (error) {
        console.log('보유 포인트 조회 API 에러: ', error)
      }
    }
    fetchData()
  }, [])

  // 포인트 전액 사용
  const handleUseAllPoints = () => {
    const availablePoints = point.totalPoints
    const used = Math.min(availablePoints, price) // 상담 금액보다 많은 포인트 사용 불가
    setUsedPoints(used)
  }

  // 사용 포인트 변경 시 결제 금액 계산
  useEffect(() => {
    setFinalPrice(price - usedPoints)
  }, [usedPoints])

  // 사용 포인트 입력 시 핸들러
  const handlePointsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value.replace(/[^0-9]/g, '')) // 숫자만 허용
    setUsedPoints(Math.min(value, point.totalPoints, price)) // 입력된 값이 보유 포인트와 상담 금액을 넘지 않도록 설정
  }

  // 상담예약생성 API 요청
  // const handleReservationClick = async () => {
  //   if (!selectedDate || !selectedTime) {
  //     alert('상담 날짜와 시간을 선택해 주세요.')
  //     return
  //   }

  //   const reservationData = {
  //     counselorId,
  //     counselDate: formatDateSlash(selectedDate), // "YYYY-MM-DD" 형식
  //     counselTime: formatTime(selectedTime), // "HH:MM:SS.00" 형식
  //     counselContent,
  //     location: meetingType === '온라인' ? onlineOption : address,
  //     price: price,
  //     point: usedPoints,
  //     finalPrice: finalPrice,
  //   }
  //   try {
  //     const accessToken = localStorage.getItem('accessToken')
  //     const response = await axios.post('/api/reservation/create', reservationData, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     })

  //     if (response.data.isSuccess) {
  //       // console.log('상담예약 생성 API 결과: ', response.data)
  //       setReservationUid(response.data.result.reservationUid)
  //     }
  //   } catch (error) {
  //     console.error('상담예약 생성 API 에러: ', error)
  //     alert('예약 요청에 실패했습니다. 다시 시도해 주세요.')
  //   }
  // }

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
        {/* <div className="flex flex-col gap-[8px]">
          <div className="bodysmsemibold text-gray-600">상담 내용</div>
          <div className="bodymdsemibold text-gray-900">{counselContent}</div>
        </div> */}
      </div>
      {/* 결제 정보 */}
      <div className="xsbold">결제 정보</div>
      <div className="flex flex-row items-center justify-between text-center">
        <div className="bodysmsemibold text-gray-600">상담 금액</div>
        <div className="bodymdsemibold text-gray-900">{price.toLocaleString()}원</div>
      </div>
      <div className="flex flex-row items-center justify-between text-center">
        <div className="bodysmsemibold text-gray-600">보유 포인트</div>
        <div className="bodymdsemibold text-gray-900">{point?.totalPoints.toLocaleString()}원</div>
      </div>
      <div className="flex flex-row items-center justify-between text-center">
        <div className="bodysmsemibold text-gray-600">사용 포인트</div>
        <Input
          type="Button"
          placeholder="1231231"
          value={usedPoints.toLocaleString()}
          btnLabel="전액사용"
          btnEvent={handleUseAllPoints}
          onChange={handlePointsChange} // 포인트 입력 핸들러 연결
        />
      </div>
      <div className="border border-gray-100"></div>
      <div className="flex flex-row items-center justify-between text-center">
        <div className="bodysmsemibold text-gray-600">결제 금액</div>
        <div className="bodymdsemibold text-gray-900">{finalPrice.toLocaleString()}원</div>
      </div>
      {/* <div className="flex flex-row items-center justify-between text-center">
        <div className="bodysmsemibold text-gray-600">카드결제</div>
        <img src="/src/assets/images/icon/icon_checked_pink.svg" alt="체크" />
      </div> */}
      <div className="flex items-center justify-center">
        {selectedDate != null && selectedTime != null ? (
          <Button
            label="다음"
            size="XLarge"
            color="pink"
            // onClick={handleReservationClick} // 예약 처리 함수 호출
            onClick={openModal} // 결제시스템 중단 이슈로 예약완료 모달 오픈
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
      {/* {reservationUid && <PortOne reservationUid={reservationUid} />} */}
      {modalOpen ? <CompleteModal /> : null}
    </div>
  )
}

export default CardReservation
