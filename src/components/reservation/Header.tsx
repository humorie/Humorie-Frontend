import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

interface CounselorProps {
  name: string
}
interface HeaderProps {
  counselorId?: string
}

const Header: React.FC<HeaderProps> = ({ counselorId }) => {
  const [counselor, setCounselor] = useState<CounselorProps>()

  // 상담서 api 요청
  useEffect(() => {
    axios
      .get(`/api/counselor/${counselorId}`)
      .then((response) => {
        if (response.data.isSuccess) {
          setCounselor(response.data.result)
        } else {
          console.log('API 요청 실패', response.data.message)
        }
      })
      .catch((error) => {
        console.log('API 요청 에러', error)
      })
  }, [counselorId])

  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1) // 뒤로가기
  }

  return (
    <div className="flex h-[60px] w-screen flex-row items-center justify-center bg-gray-900 ">
      <img
        className="mr-[133px] h-[16px] w-[16px] cursor-pointer"
        src="/src/assets/images/icon/icon_arrow_left_white.svg"
        alt="뒤로가기"
        onClick={handleBackClick} // 뒤로가기 이벤트
      />
      <div className="bodylsemibold w-[770px] text-center">{counselor?.name} 상담사 예약하기</div>
      <div className="h-[60px] w-[165px] bg-gray-900"></div>
    </div>
  )
}
export default Header
