import React from 'react'

interface TimeSlotProps {
  time: string
  isSelected: boolean
  isAvailable: boolean
  onTimeClick: (time: string) => void
}

const styles = {
  selected: 'cursor-pointer bg-primary-400 text-white',
  available: 'cursor-pointer bg-primary-100 text-gray-900',
  unavailable: 'cursor-not-allowed bg-gray-100 text-gray-400',
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, isSelected, isAvailable, onTimeClick }) => {
  return (
    <div
      className={`bodylmedium flex h-[80px] w-[140px] items-center justify-center border ${
        isSelected ? styles.selected : isAvailable ? styles.available : styles.unavailable
      }`}
      onClick={() => isAvailable && onTimeClick(time)} // 클릭 가능한 경우에만 핸들러 실행
    >
      {time}
    </div>
  )
}

export default TimeSlot
