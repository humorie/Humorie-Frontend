import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ResvationTypes, CounselorTypes } from '../Types'

const Header: React.FC<ResvationTypes> = ({ counselorId }) => {
  const [counselor, setCounselor] = useState<CounselorTypes>()

  // 상담사 API 요청
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/counselor/${counselorId}`)
        if (response.data.isSuccess) {
          console.log('상담사 조회 API 결과: ', response.data.result)
          setCounselor(response.data.result)
        }
      } catch (error) {
        console.log('상담사 조회 API 에러: ', error)
      }
    }
    fetchData()
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
