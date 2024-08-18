import React, { useState, useEffect, useCallback, useMemo } from 'react'
import axios from 'axios'
import { useTimeStore, useDateStore } from '../../store/store'
import { ResvationTypes } from '../Types'
import TimeSlot from './TimeSlot'

const TimeTable: React.FC<ResvationTypes> = ({ counselorId }) => {
  const selectedTime = useTimeStore((state) => state.selectedTime)
  const setSelectedTime = useTimeStore((state) => state.setSelectedTime)
  const selectedDate = useDateStore((state) => state.selectedDate) // 선택된 날짜 가져오기
  const [availableTimes, setAvailableTimes] = useState<string[]>([])

  // 날짜를 "YYYY-MM-DD" 형식으로 포맷
  const formatDate = (date: Date | null) => {
    if (!date) return
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
      date.getDate(),
    ).padStart(2, '0')}` // "YYYY-MM-DD" 형식으로 포맷
  }

  // 이벤트 핸들러
  const handleTimeClick = useCallback(
    (time: string) => {
      if (availableTimes.includes(time)) {
        setSelectedTime(time)
      }
    },
    [availableTimes, setSelectedTime],
  )

  // 오전 및 오후 시간대
  const timeSlots = useMemo(
    () => ({
      morning: ['10:00', '11:00'],
      afternoon: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
    }),
    [],
  )

  // 예약 가능 시간 가져오기
  useEffect(() => {
    if (!selectedDate) {
      return
    }

    async function getAvailableTimes() {
      try {
        const response = await axios.get(`/api/reservation/available/time/${counselorId}`, {
          params: { selectDate: formatDate(selectedDate) }, // YYYY-MM-DD 형식
        })

        const times = response.data.result.availableTimes.map((time: string) => time.slice(0, 5))
        setAvailableTimes(times)
      } catch (error) {
        console.error('API 요청 에러:', error)
      }
    }

    getAvailableTimes()
  }, [selectedDate])

  // 시간대를 렌더링하는 함수
  const renderTimeSlots = (slots: string[]) => {
    return slots.map((time) => {
      const isSelected = selectedTime === time
      const isAvailable = availableTimes.includes(time)
      return (
        <TimeSlot
          key={time}
          time={time}
          isSelected={isSelected}
          isAvailable={isAvailable}
          onTimeClick={handleTimeClick}
        />
      )
    })
  }

  return (
    <div className="flex w-[560px] flex-col items-start justify-start gap-[40px] bg-transparent text-black">
      <div className="xsbold text-center text-gray-900">시간</div>
      {/* 오전 */}
      <div className="flex w-full flex-col items-center justify-center gap-[8px]">
        <div className="bodylsemibold w-full">오전</div>
        <div className="flex h-[80px] w-full flex-row items-start justify-start">
          {renderTimeSlots(timeSlots.morning)}
        </div>
      </div>
      {/* 오후 */}
      <div className="flex w-full flex-col items-center justify-center gap-[8px]">
        <div className="bodylsemibold w-full">오후</div>
        <div className="flex h-[80px] w-full flex-row flex-wrap items-start justify-start">
          {renderTimeSlots(timeSlots.afternoon)}
        </div>
      </div>
    </div>
  )
}

export default TimeTable
