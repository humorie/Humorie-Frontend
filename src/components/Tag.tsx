interface TagProps {
  label: string // 버튼 이름
  onClick?: () => void // onClick
  onDelete: () => void // 태그 삭제
}

const Tag: React.FC<TagProps> = ({ label, onClick, onDelete }) => {
  const handleDeleteClick = (event: React.MouseEvent) => {
    event.stopPropagation() // 이벤트 버블링을 막아 onClick 이벤트가 발생하지 않도록 함
    onDelete() // 태그 삭제 이벤트 호출
  }

  return (
    <div
      className="flex h-[36px] w-auto cursor-pointer items-center justify-center rounded-md border border-primary-700 bg-primary-100 px-[10px] text-primary-700 hover:bg-primary-200"
      onClick={onClick} // 태그 클릭 이벤트
    >
      <div className="bodymdsemibold text-center">{label}</div>
      <img
        className="ml-[8px] h-[24px] w-[24px]" // 이미지와 텍스트 간 여백 추가
        src="/src/assets/images/icon/icon_close_pink.svg"
        alt="태그삭제"
        onClick={handleDeleteClick} // 삭제 클릭 핸들러
      />
    </div>
  )
}

export default Tag
