import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from '../Button'
import { CounselorTypes, Review } from '../Types'

interface CardReviewProps {
  counselorId: number
}

const CardReview: React.FC<CardReviewProps> = ({ counselorId }) => {
  const [counselor, setCounselor] = useState<CounselorTypes>()
  const [topReview, setTopReview] = useState<Review | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/counselor/${counselorId}`)
        console.log('상담사 프로필 조회 API 결과: ', response.data.result)
        setCounselor(response.data.result)

        // 마지막 인덱스의 리뷰를 가장 최신 리뷰로 간주하여 선택
        const reviews: Review[] = response.data.result.reviews
        if (reviews && reviews.length > 0) {
          setTopReview(reviews[reviews.length - 1])
        }
      } catch (error) {
        console.log('상담사 프로필 조회 API 에러: ', error)
      }
    }
    fetchData()
  }, [counselorId])

  const ratingImageSrc = counselor
    ? `/src/assets/images/main/main_icon_${Math.floor(counselor.rating)}_star.svg`
    : '/src/assets/images/main/main_icon_1_star.svg'

  return (
    <div className="relative h-[340px] w-[260px] rounded-[10px] bg-white">
      {/* 이름 */}
      <div className="absolute left-0 top-0 inline-flex w-[260px] items-center justify-start gap-2 px-6 pb-4 pt-6">
        <div className="xssemibold text-black">{counselor?.name}</div>
        <div className="flex items-center justify-center gap-1">
          <img
            className="h-[24px] w-[24px]"
            src="src/assets/images/icon/icon_star_pink.svg"
            alt="별점"
          />
          <div className="bodylmedium text-gray-800">{counselor?.rating.toFixed(1)}</div>
        </div>
      </div>
      {/* 제목, 후기 */}
      <div className="absolute top-[76px] inline-flex h-[206px] w-[260px] flex-col items-start justify-start gap-2 px-6">
        <div className="bodylmedium self-stretch text-gray-700">
          {topReview ? topReview.title : '제목이 없습니다'}
        </div>
        <div className="bodymdregular text-gray-700">
          {topReview ? topReview.content : '후기가 없습니다'}
        </div>
      </div>
      {/* 바로가기 버튼 */}
      <div className="absolute top-[282px] inline-flex h-[58px] w-[260px] items-center justify-end gap-4 px-6">
        <Button
          size="XSmall"
          label="바로가기"
          onClick={() => navigate(`/counseling/counselor/${counselorId}/reviews`)}
        />
      </div>
      {/* 별점에 따라서 솜솜이 이미지 동적으로 지정 */}
      <img
        className="absolute left-[8px] top-[172px] h-[160px] w-[160px]"
        src={ratingImageSrc}
        alt="솜솜이 캐릭터 이미지"
      />
    </div>
  )
}

export default CardReview
