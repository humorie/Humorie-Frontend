import { useTimeStore } from '../../store/store'

const TimeTable: React.FC = () => {
  const selectedTime = useTimeStore((state) => state.selectedTime)
  const setSelectedTime = useTimeStore((state) => state.setSelectedTime)

  const handleTimeClick = (time: string) => {
    setSelectedTime(time)
  }

  const timeSlots = {
    morning: ['10:00', '11:00'],
    afternoon: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
  }

  return (
    <div className="flex w-[560px] flex-col items-start justify-start gap-[40px] bg-transparent text-black">
      <div className="xsbold text-center text-gray-900">시간</div>
      {/* 오전 */}
      <div className="flex w-full flex-col items-center justify-center gap-[8px]">
        <div className="bodylsemibold w-full">오전</div>
        <div className="flex h-[80px] w-full flex-row items-start justify-start">
          {timeSlots.morning.map((time) => (
            <div
              key={time}
              className={`bodylmedium flex h-[80px] w-[140px] items-center justify-center border border-gray-200 ${selectedTime === time ? 'bg-rose-400 text-white' : 'bg-gray-100'} cursor-pointer text-center text-gray-400`}
              onClick={() => handleTimeClick(time)}>
              {time}
            </div>
          ))}
        </div>
      </div>
      {/* 오후 */}
      <div className="flex w-full flex-col items-center justify-center gap-[8px]">
        <div className="bodylsemibold w-full">오후</div>
        <div className="flex h-[80px] w-full flex-row flex-wrap items-start justify-start">
          {timeSlots.afternoon.map((time) => (
            <div
              key={time}
              className={`bodylmedium flex h-[80px] w-[140px] items-center justify-center border border-gray-200 ${selectedTime === time ? 'bg-rose-400 text-white' : 'bg-gray-100'} cursor-pointer text-center text-gray-400`}
              onClick={() => handleTimeClick(time)}>
              {time}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TimeTable
