import { useEffect, useState } from 'react'
import '../../index.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ReviewList from './review'

interface Counselor {
  counselorId: number
  symptoms: string[]
  introduction: string
  affiliations: string[]
}

const Introduction = () => {
  const [counselor, setCounselor] = useState<Counselor | null>(null)
  const { counselorId } = useParams<{ counselorId: string }>()

  useEffect(() => {
    const fetchCounselorData = async () => {
      try {
        const response = await axios.get(`/api/counselor/${counselorId}`, {
          headers: {},
        })
        console.log('API Response:', response.data)

        if (response.data.isSuccess) {
          setCounselor(response.data.result)
        } else {
          console.error('API Error:', response.data.message)
        }
      } catch (error) {
        console.error('Error fetching counselor data:', error)
      }
    }
    fetchCounselorData()
  }, [counselorId])

  if (!counselor) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col space-y-[37px] text-black">
        <div className="flex h-[40px] w-[202px] flex-row items-center justify-center space-x-[10px] rounded-[6px] bg-gray-200">
          <img src="/src/assets/images/counseling/icon_shield.svg" alt="icon" />
          <p className="bodysmbold text-gray-500">공인 의료 서비스 제공자</p>
        </div>
        <p className="mdbold">{counselor.introduction}</p>
      </div>
      <div className="bodymdmedium flex flex-col space-y-[25px]">
        <div className="flex flex-row space-x-[55px]">
          <p className="text-primary-800">대표업무</p>
          <p>{counselor.symptoms.join(', ')}</p>
        </div>
        <div className="flex flex-row space-x-[37px]">
          <p className="text-primary-800">상담 스타일</p>
          <p>
            상담사님의 말 상세히/본인은 어떤스타일로 진료를 하고 어떤 상담을 주로하는지
            <br />
            상담사님의 말 상세히/본인은 어떤스타일로 진료를 하고 어떤 상담을 주로하는지
            <br />
            상담사님의 말 상세히/본인은 어떤스타일로 진료를 하고 어떤 상담을 주로하는지
          </p>
        </div>
        <div className="flex flex-row space-x-[51px]">
          <p className="text-primary-800">현재 직무</p>
          <div className="flex flex-col">
            {counselor.affiliations.map((affiliation, index) => (
              <p key={index}>{affiliation}</p>
            ))}
          </div>
        </div>
      </div>
      <ReviewList />
    </div>
  )
}

export default Introduction
