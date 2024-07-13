import Button from '../Button'
import Input from '../Input'
import { useDateStore, useTimeStore, useMeetingStore } from '../../store/store'

const CardReservation: React.FC = () => {
  const selectedDate = useDateStore((state) => state.selectedDate) // 저장된 날짜 불러오기
  const selectedTime = useTimeStore((state) => state.selectedTime) // 저장된 시간 불러오기
  const { meetingType, onlineOption } = useMeetingStore() // 저장된 장소 불러오기

  // 날짜를 "YYYY.MM.DD" 형식으로 포맷하는 함수
  const formatDate = (date: Date) => {
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`
  }

  return (
    <div className="flex h-auto w-[430px] flex-col gap-[24px] rounded-[10px] bg-white p-[20px] text-black shadow">
      {/* 예약 정보 */}
      <div className="xsbold">예약 정보 </div>
      <div className="flex flex-col gap-[24px] rounded-lg border border-gray-100 bg-gray-50 p-[16px]">
        {/* 날짜 */}
        <div className="flex flex-col gap-[8px]">
          <div className="bodysmsemibold text-gray-600">날짜</div>
          <div className="bodymdsemibold text-gray-900">
            {selectedDate ? formatDate(selectedDate) : '미선택'}
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
              {meetingType === 'online' ? onlineOption || '미선택' : '오프라인'}
            </div>
            <div className="bodyxssemibold flex h-6 w-auto items-center justify-center rounded-[99px] border border-pink-100 bg-pink-50 px-2 text-pink-600">
              {meetingType}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="bodysmsemibold text-gray-600">상담 내용</div>
          <div className="bodymdsemibold text-gray-900">미선택</div>
        </div>
      </div>
      {/* 결제 정보 */}
      <div className="xsbold">결제 정보</div>
      <div className="flex flex-row items-center justify-between text-center">
        <div className="bodysmsemibold text-gray-600">상담 금액</div>
        <div className="bodymdsemibold text-gray-900">50,000원</div>
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
          btnEvent={() => console.log('전액사용 클릭됨')}
        />
      </div>
      <div className="border border-gray-100"></div>
      <div className="flex flex-row items-center justify-between text-center">
        <div className="bodysmsemibold text-gray-600">결제 금액</div>
        <div className="bodymdsemibold text-gray-900">50,000원</div>
      </div>
      <div className="flex flex-row items-center justify-between text-center">
        <div className="bodysmsemibold text-gray-600">카드결제</div>
      </div>
      <div className="flex items-center justify-center">
        <Button label="다음" size="XLarge" color="pink" onClick={() => console.log('Clicked!')} />
      </div>
    </div>
  )
}

export default CardReservation
