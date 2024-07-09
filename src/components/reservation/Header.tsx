import { useNavigate } from 'react-router-dom'

const Header: React.FC = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1) // 뒤로가기
  }

  return (
    <div className="flex h-[60px] w-[1440px] flex-row items-center bg-gray-900 px-[170px]">
      <div className="flex flex-row items-center justify-between text-center">
        <img
          className="mr-[133px] h-[16px] w-[16px]"
          src="/src/assets/images/icon/icon_arrow_left_white.svg"
          alt="뒤로가기"
          onClick={handleBackClick} // 뒤로가기 이벤트
        />
        <div className="bodylsemibold w-[770px]">가나다 상담사 예약하기</div>
      </div>
    </div>
  )
}
export default Header
