interface TagProps {
  label: string // 버튼 이름
  onClick?: () => void // onClick
  onDelete: () => void // 태그 삭제
}

const Tag: React.FC<TagProps> = ({ label, onClick, onDelete }) => {
  return (
    <div
      className="flex h-[36px] w-auto cursor-pointer items-center justify-center rounded-md border border-primary-700 bg-primary-100 px-[10px] text-primary-700
      hover:bg-primary-200">
      <div className="bodymdsemibold text-center" onClick={onClick}>
        {label}
      </div>
      <img
        className="h-[24px] w-[24px]"
        src="/src/assets/images/icon/icon_close_pink.svg"
        alt="태그삭제"
        onClick={onDelete} // onClick 핸들러
      />
    </div>
  )
}

export default Tag
