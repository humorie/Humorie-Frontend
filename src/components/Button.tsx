interface ButtonProps {
  label: string // 버튼 이름 prop
  onClick?: () => void // onClick prop
  size: 'XLarge' | 'Large' | 'Medium' | 'Small' | 'XSmall' // 버튼 크기를 선택하기 위한 prop
}

const Button: React.FC<ButtonProps> = ({ label, onClick, size }) => {
  const itemVariants = {
    XLarge:
      'bodyxssemibold flex h-[48px] w-[312px] items-center justify-center gap-2 rounded bg-primary-600 text-white hover:bg-primary-700 hover:text-gray-50 active:bg-primary-800 active:text-white',
    Large:
      'bodyxssemibold flex h-[48px] w-[160px] items-center justify-center gap-2 rounded bg-primary-600 text-white hover:bg-primary-700 hover:text-gray-50 active:bg-primary-800 active:text-white',
    Medium:
      'bodyxssemibold flex h-[40px] w-[125px] items-center justify-center gap-2 rounded bg-primary-600 text-white hover:bg-primary-700 hover:text-gray-50 active:bg-primary-800 active:text-white',
    Small:
      'bodyxssemibold flex h-[32px] w-[102px] items-center justify-center gap-2 rounded bg-primary-600 text-white hover:bg-primary-700 hover:text-gray-50 active:bg-primary-800 active:text-white',
    XSmall:
      'bodyxssemibold flex h-[32px] w-[60px] items-center justify-center gap-2 rounded bg-primary-600 text-white hover:bg-primary-700 hover:text-gray-50 active:bg-primary-800 active:text-white',
  }

  return (
    <div
      className={itemVariants[size]} // 버튼 크기에 따른 스타일을 동적으로 적용
      onClick={onClick} // onClick 핸들러
    >
      {label}
    </div>
  )
}

export default Button
