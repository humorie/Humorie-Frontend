import { useNavigate } from 'react-router-dom'

const PrivacyHeader: React.FC = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1) // 뒤로가기
  }

  return (
    <div className="flex h-[60px] w-full flex-row items-center bg-gray-800 px-[220px]">
      <div className="flex flex-row items-center justify-between text-center">
        <img
          className="mr-[141px] h-[16px] w-[16px]"
          src="/src/assets/images/icon/icon_arrow_left_white.svg"
          alt="뒤로가기"
          onClick={handleBackClick} // 뒤로가기 이벤트
        />
        <div className="bodylsemibold w-[770px] text-white">개인정보 처리방침</div>
      </div>
    </div>
  )
}
export default PrivacyHeader
