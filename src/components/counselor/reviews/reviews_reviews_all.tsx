import { useEffect, useState } from 'react'
import '../../../index.css'
import Reviewscard from './reviews_reviewcard_all'
import { useParams } from 'react-router-dom'
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

const ReviewsAll = () => {
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

  const displayedReviews = counselor.reviews

  return (
    <div className="flex w-[1060px] flex-col">
      <p className="bodysmsemibold mb-[26px]">평점 높은 순</p>
      <div className="space-y-[62px]">
        {displayedReviews.map((review, index) => (
          <Reviewscard key={index} review={review} />
        ))}
      </div>
    </div>
  )
}

export default ReviewsAll
