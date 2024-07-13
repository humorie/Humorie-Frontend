import React, { useState } from 'react'
import { useDateStore } from '../../store/store'

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const selectedDate = useDateStore((state) => state.selectedDate)
  const setSelectedDate = useDateStore((state) => state.setSelectedDate)

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const createDaysForMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const dayOffset = new Date(year, month, 1).getDay()
    const days = []

    // 이전 달의 마지막 날짜를 추가
    const previousMonthDays = getDaysInMonth(year, month - 1)
    for (let i = previousMonthDays - dayOffset + 1; i <= previousMonthDays; i++) {
      days.push(new Date(year, month - 1, i))
    }

    // 현재 달의 날짜를 추가
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }

    // 다음 달의 날짜를 추가하여 총 주차를 맞춤
    const totalDays = days.length
    const extraDays = 7 - (totalDays % 7)
    if (extraDays !== 7) {
      // 한 주가 완전히 차지 않았을 때만 추가
      for (let i = 1; i <= extraDays; i++) {
        days.push(new Date(year, month + 1, i))
      }
    }
    return days
  }

  const days = createDaysForMonth(currentDate)

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    setCurrentDate(newDate)
  }

  const handleNextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    setCurrentDate(newDate)
  }

  const handleDayClick = (day: Date) => {
    setSelectedDate(day) // 선택된 날짜 상태를 업데이트
  }

  const monthNames = [
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

  return (
    <div className="flex h-auto w-[560px] flex-col items-start justify-start bg-transparent text-black">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="xsbold text-center text-gray-900">날짜</div>
        <div className="bodysmmedium flex h-[20px] w-[142px] items-center justify-end gap-[24px] text-gray-600">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="h-[20px] w-[20px] border border-rose-200 bg-pink-100" />
            가능
          </div>
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="h-[20px] w-[20px]  border border-gray-200 bg-gray-100" />
            불가능
          </div>
        </div>
      </div>
      <div className="mb-[16px] mt-[40px] flex w-full items-center justify-start gap-[24px]">
        <img
          src="/src/assets/images/icon/icon_arrow_left.svg"
          alt="이전달 화살표"
          onClick={handlePrevMonth}
        />
        <div className="bodylsemibold text-center">
          {currentDate.getFullYear()}년 {monthNames[currentDate.getMonth()]}
        </div>
        <img
          src="/src/assets/images/icon/icon_arrow_right.svg"
          alt="다음달 화살표"
          onClick={handleNextMonth}
        />
      </div>
      <div className=" flex flex-row items-center justify-center">
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div
            key={day}
            className="bodymdmedium flex h-[80px] w-[80px] items-center justify-center ">
            {day}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap">
        {days.map((day, index) => {
          const isSelected = selectedDate && day.getTime() === selectedDate.getTime()
          const dayClass = isSelected ? 'bg-rose-400 text-white' : 'bg-gray-100' // 조건에 따라 클래스 변경

          return (
            <div
              key={index}
              className={`bodylmedium flex h-[80px] w-[80px] cursor-pointer items-center justify-center border border-gray-200 ${dayClass} text-gray-400`}
              onClick={() => handleDayClick(day)}>
              {day.getDate()}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Calendar
