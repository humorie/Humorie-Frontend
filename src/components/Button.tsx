interface ButtonProps {
  label: string // 버튼 이름 prop
  onClick?: () => void // onClick prop
  size: 'XLarge' | 'Large' | 'Medium' | 'Small' | 'XSmall' // 버튼 크기를 선택하기 위한 prop
  color?: 'pink' | 'gray' | 'line' // 색상 선택을 위한 prop
}

const Button: React.FC<ButtonProps> = ({ label, onClick, size, color = 'pink' }) => {
  const colorClasses = {
    pink: 'bg-primary-600 text-white hover:bg-primary-700 hover:text-gray-50 active:bg-primary-800 active:text-white',
    gray: 'bg-gray-200 text-gray-500 hover:bg-gray-200 hover:text-gray-600 active:bg-gray-300 active:text-gray-600',
    line: 'bg-white text-primary-600 border-[1px] border-primary-600 hover:bg-primary-50 hover:text-primary-700 active:bg-primary-100 active:text-primary-800',
  }

  const itemVariants = {
    XLarge: `bodymdsemibold flex h-[48px] w-[312px] items-center justify-center gap-2 rounded ${colorClasses[color]}`,
    Large: `bodymdsemibold flex h-[48px] w-[160px] items-center justify-center gap-2 rounded ${colorClasses[color]}`,
    Medium: `bodysmsemibold flex h-[40px] w-[125px] items-center justify-center gap-2 rounded ${colorClasses[color]}`,
    Small: `bodyxssemibold flex h-[32px] w-[102px] items-center justify-center gap-2 rounded ${colorClasses[color]}`,
    XSmall: `bodyxssemibold flex h-[32px] w-[60px] items-center justify-center gap-2 rounded ${colorClasses[color]}`,
  }

  return (
    <div
      className={`${itemVariants[size]} cursor-pointer`} // 버튼 크기 및 색상에 따른 스타일을 동적으로 적용
      onClick={onClick} // onClick 핸들러
    >
      {label}
    </div>
  )
}

export default Button
