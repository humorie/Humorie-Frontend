interface BtnXSmallProps {
  label: string
}

const BtnXSmall: React.FC<BtnXSmallProps> = ({ label }) => {
  return (
    <button className="bodyxssemibold inline-flex h-8 w-auto items-center justify-center gap-2 rounded bg-primary-600 text-white  hover:bg-primary-700 hover:text-gray-50 active:bg-primary-800 active:text-white">
      {label}
    </button>
  )
}

export default BtnXSmall
