import { useEffect, useState } from 'react'
import '../../../index.css'
import Reviewscard from './reviews_reviewcard_all'
import { useParams } from 'react-router-dom'
import axios from 'axios'

interface Counselor {
  counselorId: number
  name: string
  reviewCount: string
  rating: number
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

  const displayedReviews = counselor.reviews || []

  // 별점 집계
  // const totalRating = displayedReviews.reduce((acc, review) => acc + review.rating, 0)
  // const averageRating = displayedReviews.length > 0 ? totalRating / displayedReviews.length : 0
  // const MAX_RATING = 5
  // const fullStars = Math.floor(averageRating)
  // const halfStar = averageRating % 1 >= 0.5 ? 1 : 0
  // const emptyStars = MAX_RATING - fullStars - halfStar
  const rating = Math.floor(counselor.rating)
  const totalStars = 5

  //평점 집계
  const ratingCounts = [1, 2, 3, 4, 5].map(
    (rating) => displayedReviews.filter((review) => review.rating === rating).length,
  )
  const maxCount = Math.max(...ratingCounts)
  const maxRatingIndex = ratingCounts.findIndex((count) => count === maxCount)

  return (
    <div className="flex w-[1060px] flex-col">
      <div className="flex h-[248px] items-center justify-center space-x-[181px] bg-gray-50">
        <div className="flex flex-col items-center ">
          <div className="bodymdmedium mb-[40px] text-black">내담자 총 평점</div>

          <div className="mb-[25px] flex flex-row space-x-[6px]">
            {[...Array(rating)].map((_, index) => (
              <img
                key={`full-${index}`}
                src="/src/assets/images/icon/icon_star_pink.svg"
                alt="Full Start"
              />
            ))}

            {[...Array(totalStars - rating)].map((_, index) => (
              <img
                key={`empty-${index}`}
                src="/src/assets/images/icon/icon_star_gray.svg"
                alt="Empty Start"
              />
            ))}
          </div>
          <div className="flex flex-row space-x-[8px]">
            <div className="smsemibold text-black">{counselor.rating}</div>
            <div className="xsmedium text-gray-300">/</div>
            <div className="smsemibold text-black">5</div>
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <div className="bodymdmedium mb-[27px]">전체 리뷰 수</div>
          <img
            src="/src/assets/images/icon/icon_chatbubble.svg"
            alt="chatbubble"
            className="mb-[11px]"
          />
          <div className="smsemibold">{counselor.reviewCount}</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="bodymdmedium mb-[27px]">평점 비율</div>
          <div className="z-10 flex flex-row space-x-[29px]">
            {[5, 4, 3, 2, 1].map((rating, index) => (
              <div key={rating} className="relative flex flex-col items-center">
                <div
                  className="relative h-[65px] w-[8px] rounded-full bg-gray-200"
                  style={{
                    backgroundColor: 5 - index === maxRatingIndex + 1 ? '#FBCCDB' : '#E5E7EB',
                  }}>
                  <div
                    className="absolute bottom-0 w-[8px] rounded-full"
                    style={{
                      height: `${(ratingCounts[5 - index - 1] / displayedReviews.length) * 100}%`,
                      backgroundColor: 5 - index === maxRatingIndex + 1 ? '#F36795' : '#9CA3AF',
                    }}></div>
                </div>

                <div className="bodyxsregular mt-[18px] text-black">{rating}점</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[97px] space-y-[62px]">
        {displayedReviews.map((review, index) => (
          <Reviewscard key={index} review={review} />
        ))}
      </div>
    </div>
  )
}

export default ReviewsAll
