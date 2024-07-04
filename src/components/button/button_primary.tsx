import '../../index.css'

interface ButtonProps {
  text: string
  onClick?: () => void
}

const ButtonPrimary: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      type="submit"
      className="bodymdsemibold w-[160px] h-[48px] p-0 rounded-[6px] bg-primary-600 text-white"
      onClick={onClick}>
      {text}
    </button>
  )
}

export default ButtonPrimary
