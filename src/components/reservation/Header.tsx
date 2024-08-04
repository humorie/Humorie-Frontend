import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1) // 뒤로가기
  }

  return (
    <div className="flex h-[60px] w-screen flex-row items-center justify-center bg-gray-900 ">
      <img
        className="mr-[133px] h-[16px] w-[16px]"
        src="/src/assets/images/icon/icon_arrow_left_white.svg"
        alt="뒤로가기"
        onClick={handleBackClick} // 뒤로가기 이벤트
      />
      <div className="bodylsemibold w-[770px] text-center">가나다 상담사 예약하기</div>
      <div className="h-[60px] w-[165px] bg-gray-900"></div>
    </div>
  )
}
export default Header
