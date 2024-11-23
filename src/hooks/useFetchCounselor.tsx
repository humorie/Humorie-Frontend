import { useEffect, useState } from 'react'
import axios from 'axios'
import { CounselorType, ReviewType } from '../components/common/Types'

export const useFetchCounselor = (counselorId: number) => {
  const [counselor, setCounselor] = useState<CounselorType | null>(null)
  const [review, setReview] = useState<ReviewType[] | null>(null)

  // 상담사 API 요청
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/counselor/${counselorId}`)
        if (response.data.isSuccess) {
          setCounselor(response.data.result)
          setReview(response.data.result.reviews)
        }
      } catch (error) {
        console.log('상담사 ID조회 API 에러: ', error)
      }
    }
    fetchData()
  }, [counselorId])

  return { counselor, review }
}
