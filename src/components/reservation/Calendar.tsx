import React, { useState, useEffect, useCallback, useMemo } from 'react'
import axios from 'axios'
import { useDateStore } from '../../store/store'

// 상수와 유틸리티 함수 분리
const DAYS_OF_WEEK = ['일', '월', '화', '수', '목', '금', '토']
const MONTH_NAMES = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
]

// 날짜 유틸리티 함수
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

const createDaysForMonth = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const daysInMonth = getDaysInMonth(year, month)
  const dayOffset = new Date(year, month, 1).getDay()
  const days = []

  // 이전 달의 마지막 날짜 추가
  const previousMonthDays = getDaysInMonth(year, month - 1)
  for (let i = previousMonthDays - dayOffset + 1; i <= previousMonthDays; i++) {
    days.push(new Date(year, month - 1, i))
  }

  // 현재 달의 날짜 추가
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i))
  }

  // 다음 달의 첫 날짜 추가
  const totalDays = days.length
  const extraDays = 7 - (totalDays % 7)
  if (extraDays !== 7) {
    for (let i = 1; i <= extraDays; i++) {
      days.push(new Date(year, month + 1, i))
    }
  }
  return days
}

// CalendarDay 컴포넌트 분리
const CalendarDay: React.FC<{
  day: Date
  isSelected: boolean
  isAvailable: boolean
  onClick: () => void
}> = React.memo(({ day, isSelected, isAvailable, onClick }) => {
  const dayClass = isSelected
    ? 'bg-primary-400 text-white cursor-pointer'
    : isAvailable
      ? 'bg-primary-200 text-gray-900 cursor-pointer hover:bg-primary-300' // 호버 효과 추가
      : 'bg-gray-100 text-gray-400 cursor-not-allowed'

  return (
    <div
      className={`bodylmedium flex h-[80px] w-[80px] items-center justify-center border border-gray-200 ${dayClass}`}
      onClick={onClick}>
      {day.getDate()}
    </div>
  )
})

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [availableDates, setAvailableDates] = useState<Date[]>([])
  const selectedDate = useDateStore((state) => state.selectedDate)
  const setSelectedDate = useDateStore((state) => state.setSelectedDate)

  const days = useMemo(() => createDaysForMonth(currentDate), [currentDate])

  // 예약 가능 날짜 가져오기
  useEffect(() => {
    async function getDate(param: number) {
      try {
        const response = await axios.get(`/api/reservation/available/date/${param}`)
        const availableDatesFromApi = response.data.availableDates.map(
          (dateStr: string) => new Date(dateStr),
        )
        setAvailableDates(availableDatesFromApi)
      } catch (error) {
        console.log('API 요청 에러', error)
      }
    }
    getDate(1)
  }, [])

  // 날짜가 예약 가능한지 확인하는 함수
  const isAvailable = useCallback(
    (date: Date) => {
      return availableDates.some(
        (availableDate) =>
          availableDate.getFullYear() === date.getFullYear() &&
          availableDate.getMonth() === date.getMonth() &&
          availableDate.getDate() === date.getDate(),
      )
    },
    [availableDates],
  )

  // 이전 달로 이동
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  // 다음 달로 이동
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  // 날짜 클릭 시 동작
  const handleDayClick = (day: Date) => {
    if (isAvailable(day)) {
      setSelectedDate(day)
    }
  }

  return (
    <div className="flex h-auto w-[560px] flex-col items-start justify-start bg-transparent text-black">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="xsbold text-center text-gray-900">날짜</div>
        <div className="bodysmmedium flex h-[20px] w-[142px] items-center justify-end gap-[24px] text-gray-600">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="h-[20px] w-[20px] border border-primary-200 bg-primary-100" />
            가능
          </div>
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="h-[20px] w-[20px] border border-gray-200 bg-gray-100" />
            불가능
          </div>
        </div>
      </div>
      <div className="mb-[16px] mt-[40px] flex w-full items-center justify-start gap-[24px]">
        <img
          src="/src/assets/images/icon/icon_arrow_left.svg"
          alt="이전달 화살표"
          onClick={handlePrevMonth}
          className="cursor-pointer"
        />
        <div className="bodylsemibold text-center">
          {currentDate.getFullYear()}년 {MONTH_NAMES[currentDate.getMonth()]}
        </div>
        <img
          src="/src/assets/images/icon/icon_arrow_right.svg"
          alt="다음달 화살표"
          onClick={handleNextMonth}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-row items-center justify-center">
        {DAYS_OF_WEEK.map((day) => (
          <div
            key={day}
            className="bodymdmedium flex h-[80px] w-[80px] items-center justify-center">
            {day}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap">
        {days.map((day, index) => {
          const isSelected = selectedDate?.getTime() === day.getTime() // null 체크
          const available = isAvailable(day)

          return (
            <CalendarDay
              key={index}
              day={day}
              isSelected={isSelected}
              isAvailable={available}
              onClick={() => handleDayClick(day)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Calendar
