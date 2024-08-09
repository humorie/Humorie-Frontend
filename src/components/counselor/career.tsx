import { useEffect, useState } from 'react'
import '../../index.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

interface Counselor {
  counselorId: number
  name: string
  educations: string[]
  careers: string[]
}

const Career = () => {
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
    <div className="flex w-[1050px] flex-col items-start space-y-[36px] pb-[135px] ps-[88px]">
      <p className="smsemibold">{counselor.name} 상담사님의 상세경력</p>
      <div className="space-y-[24px]">
        <div className="flex flex-row space-x-[14px]">
          <img src="/src/assets/images/counseling/career.svg" alt="career" />
          <p className="bodylsemibold">학력</p>
        </div>
        <div className="flex flex-row space-x-[204px]">
          <ul className="bodymdmedium list-inside list-disc space-y-[10px]">
            {counselor.educations.map((education, index) => (
              <li key={index}>{education}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-[24px]">
        <div className="flex flex-row space-x-[14px]">
          <img src="/src/assets/images/counseling/career.svg" alt="career" />
          <p className="bodylsemibold">경력</p>
        </div>
        <div className="flex flex-row space-x-[204px]">
          <ul className="bodymdmedium list-inside list-disc space-y-[10px]">
            {counselor.careers.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Career
