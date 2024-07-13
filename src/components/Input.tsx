import React, { useState } from 'react'
import Button from './Button'

interface InputProps {
  type: 'Button' | 'Primary' // 인풋 타입, 피그마 참고
  placeholder: string // placeholder 이름
  btnLabel: string // 버튼 컴포넌트 라벨
  btnEvent: () => void // 버튼 컴포넌트 클릭 이벤트
}

const Input: React.FC<InputProps> = ({ type, placeholder, btnLabel, btnEvent }) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <div
      className={`bodysmmedium flex h-[48px] w-[312px] flex-row items-center justify-between gap-1.5 border border-gray-200 px-[16px] py-[14px] ${isFocused ? 'border-rose-400 bg-pink-50 outline-none' : 'bg-white'}`}
      tabIndex={0} // 포커스 가능하게 만듦
      onFocus={handleFocus}
      onBlur={handleBlur}>
      <input
        className=" w-[214px] bg-transparent placeholder:text-gray-300 focus:bg-transparent focus:text-gray-900 focus:outline-none"
        placeholder={placeholder}
      />
      {type === 'Button' && (
        <Button label={btnLabel} size="XSmall" color="pink" onClick={btnEvent} />
      )}
    </div>
  )
}

export default Input
