import { useEffect, useState } from 'react'
import '../../index.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

interface Counselor {
  counselorId: number
  rating: number
  name: string
  counselingCount: number
}

const Profile = () => {
  const [counselor, setCounselor] = useState<Counselor | null>(null)
  const { counselorId } = useParams<{ counselorId: string }>()

  useEffect(() => {
    const fetchCounselorData = async () => {
      const accessToken = localStorage.getItem('accessToken')
      try {
        const response = await axios.get(`/api/counselor/${counselorId}`, {
          headers: {
            accesstoken: accessToken || '',
          },
        })
        console.log('API Response:', response.data)

        if (response.data.isSuccess) {
          setCounselor(response.data.result)
        } else {
          console.error('API Error:', response.data.message)
        }
      } catch (error) {
        console.error('Error fetching counselor data', error)
      }
    }
    fetchCounselorData()
  }, [counselorId])

  if (!counselor) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex w-[360px] flex-col items-center border-[1px] border-gray-300">
      <img
        src="/src/assets/images/avatar/avatar_square1.svg"
        alt="counselor"
        className="m-0 h-[381px] w-full"
      />
      <div className="flex h-[300px] w-full flex-col items-center bg-white ">
        <div className="h-[28px]"> </div>
        <div className="flex flex-col items-center">
          <div className="bodyxsbold rounded-[5px] bg-gray-100 px-[22px] py-[3px] text-gray-400">
            평점 {counselor.rating.toFixed(1)}
          </div>
          <div className="h-[26px]"> </div>
          <div className="flex flex-col items-center space-y-[3px]">
            <p className="mdbold text-black">{counselor.name} 상담사</p>
            <div className="bodysmmedium text-gray-500">
              앤데이 상담 총 {counselor.counselingCount}회 진행
            </div>
          </div>
        </div>
        <div className="h-[70px]"> </div>
        <button
          type="submit"
          className="bodymdsemibold bg-primary-600 px-[45px] py-[15px] text-white">
          상담 예약하기
        </button>
      </div>
    </div>
  )
}

export default Profile
