import { useEffect, useState } from 'react'
import Button from '../components/Button'
import ReviewTabs from '../components/counselor/reviews/reviewtab'
import Footer from '../components/Footer'
import Header from '../components/header/Header'
import '../index.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

interface Counselor {
  counselorId: number
  name: string
  reviewCount: string
}

const MoreReviews: React.FC = () => {
  const navigate = useNavigate()
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
          console.log(response.data.result.reviews)
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
    <div className="flex flex-col items-center justify-center scroll-auto text-black">
      <Header />
      <div className="mb-[250px] mt-[150px] flex w-[1100px] flex-col">
        <p className="smbold">
          {counselor.name} 상담사님에 대한 {counselor.reviewCount}개의 후기
        </p>
        <div className="h-[40px]"> </div>
        <Button
          label="상담 예약하기"
          size="Large"
          color="pink"
          onClick={() => navigate('/counseling/reservation')}
        />
        <div className="h-[108px]"> </div>
        <ReviewTabs />
      </div>
      <Footer />
    </div>
  )
}

export default MoreReviews
