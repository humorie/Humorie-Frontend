import '../../index.css'

interface ButtonProps {
  text: string
  onClick?: () => void
}

const ButtonLine: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      type="submit"
      className="bodymdsemibold w-[160px] h-[48px] p-0  rounded-[6px] bg-white text-primary-600 border-[1.2px] border-primary-600"
      onClick={onClick}>
      {text}
    </button>
  )
}

export default ButtonLine
