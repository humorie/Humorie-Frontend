interface TagProps {
  label: string // 버튼 이름
  onClick?: () => void // onClick
}

const Tag: React.FC<TagProps> = ({ label, onClick }) => {
  return (
    <div
      className="flex h-[36px] w-auto cursor-pointer items-center justify-center rounded-md border border-primary-700 bg-primary-100 px-[10px] text-primary-700
      hover:bg-primary-200">
      <div className={'bodymdsemibold text-center'}>{label}</div>
      <img
        className="h-[24px] w-[24px]"
        src="/src/assets/images/icon/icon_close_pink.svg"
        alt="태그삭제"
        onClick={onClick} // onClick 핸들러
      />
    </div>
  )
}

export default Tag
