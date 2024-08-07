import { useNavigate, useParams } from 'react-router-dom'
import '../../index.css'
import ReviewCard from './reviewcard'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Counselor {
  counselorId: number
  name: string
  reviewCount: string
  reviews: Review[]
}

interface Review {
  content: string
  rating: number
  recommendationCount: number
  createdAt: string
}

const ReviewList = () => {
  const navigate = useNavigate()
  const onClickReviewhandler = () => {
    navigate(`/counseling/counselor/${counselorId}/reviews`)
  }
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

  const displayedReviews = counselor.reviews.slice(0, 2)
  console.log(displayedReviews)

  return (
    <div className="flex flex-col space-y-[22px]">
      <div className="flex flex-row items-end justify-between">
        <p className="bodylmedium">
          {counselor.name} 상담사님의 {counselor.reviewCount}개 후기
        </p>
        <button
          type="submit"
          className="bodymdregular m-0 bg-transparent p-0"
          onClick={onClickReviewhandler}>
          더보기
        </button>
      </div>
      <div className="flex flex-row space-x-[22px]">
        {displayedReviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  )
}

export default ReviewList
