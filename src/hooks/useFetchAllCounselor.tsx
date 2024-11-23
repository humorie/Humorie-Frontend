import { useEffect, useState } from 'react'
import axios from 'axios'
import { CounselorsType } from '../components/common/Types'

export const useFetchAllCounselor = () => {
  const [counselors, setCounselors] = useState<CounselorsType[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/search')
        if (response.data.isSuccess) {
          setCounselors(response.data.result) // 카테고리에 선택된 상담사만 상태 업데이트
        }
      } catch (error) {
        console.log('전체 상담사 조회 API 에러: ', error)
      }
    }
    fetchData()
  }, [])

  return counselors
}
