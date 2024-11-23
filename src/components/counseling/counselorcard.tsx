import { useNavigate } from 'react-router-dom'
import '../../index.css'
import Button from '../common/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useFiltersStore, useTagsStore } from '../../store/store'

interface CounselorList {
  id: number
  name: string
  gender: string
  region: string
  counselingMethods: string[]
  symptoms: string[]
  rating: number
  reviewCount: number
  introduction: string
}

const CounselorCard = () => {
  const { tags, activeMainTab, activeSubTab } = useTagsStore()
  const { gender, counselingMethod, order } = useFiltersStore()
  const navigate = useNavigate()
  const [counselor, setCounselor] = useState<CounselorList[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchCounselorData = async () => {
      try {
        let endpoint = '/api/search'
        let requestData: Record<string, any> = {}
        let method = 'GET'
        const params: Record<string, any> = {}

        if (tags.length > 0) {
          endpoint = '/api/search/keywords'
          method = 'POST'
          requestData = {
            symptoms: tags.map((tag) => ({
              categoryType: activeMainTab || '개인',
              issueAreaType: activeSubTab || '개인 문제',
              symptom: tag.content,
            })),
          }
        } else {
          if (gender || counselingMethod || order) {
            endpoint = '/api/search/conditions'
            method = 'GET'
          }
          if (gender) params.gender = gender
          if (counselingMethod) params.counselingMethod = counselingMethod
          if (order) params.order = order
        }

        const response =
          method === 'GET'
            ? await axios.get(endpoint, { params })
            : await axios.post(endpoint, requestData)

        console.log('Request URL:', endpoint)
        console.log('Request Params:', params)
        console.log('API Response:', response.data)

        const data = response.data.result.map((item: any) => ({
          id: item.counselorId,
          name: item.name,
          gender: item.gender,
          counselingMethods: item.counselingMethods || [],
          region: item.region || '',
          symptoms: item.symptoms || [],
          rating: item.rating,
          reviewCount: item.reviewCount,
          introduction: item.introduction,
        }))

        if (order === '리뷰 높은순') {
          data.sort((a: CounselorList, b: CounselorList) => b.rating - a.rating)
        } else if (order === '리뷰 낮은순') {
          data.sort((a: CounselorList, b: CounselorList) => a.rating - b.rating)
        }

        setCounselor(data)
        setError(false)
      } catch (error) {
        console.error('Error fetching counselor data', error)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchCounselorData()
  }, [gender, counselingMethod, order, tags])

  if (counselor.length === 0) {
    return <div>해당되는 상담사가 없습니다.</div>
  }

  if (error) {
    return <div>API 요청 에러</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col">
      {counselor.map((counselor) => (
        <div key={counselor.id} className="mb-4 flex flex-col">
          <div className="flex h-[313px] w-[1006px] flex-col items-center justify-center">
            <div className="flex h-[193px] w-[946px] flex-col space-y-[24px]">
              <div className="bodysmmedium flex space-x-[12px]">
                <div className="rounded-[4px] bg-gray-100 px-[12px] py-[6px] text-gray-700">
                  {counselor.gender}
                </div>
                <div className="rounded-[4px] bg-gray-100 px-[12px] py-[6px] text-gray-700">
                  {counselor.region}
                </div>

                {counselor.counselingMethods.map((method, index) => (
                  <div
                    key={index}
                    className="rounded-[4px] bg-gray-100 px-[12px] py-[6px] text-gray-700">
                    {method}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center space-x-[34px]">
                  <img
                    className="h-[150px] w-[150px]"
                    src="src/assets/images/avatar/avatar_square1.svg"
                    alt="counselorimage"
                  />
                  <div className="flex h-[125px] flex-col justify-between">
                    <div className="flex items-end space-x-[8px]">
                      <p className="mdsemibold">{counselor.name}</p>
                      <p className="bodymdsemibold pb-[4px] text-gray-800">상담가</p>
                    </div>
                    <div className="flex items-center">
                      <img src="src/assets/images/counseling/star_rate.svg" alt="별점" />
                      <div className="w-[7px]" />
                      <p className="bodylmedium text-gray-800">{counselor.rating.toFixed(1)} </p>
                      <p className="bodylmedium text-gray-500">({counselor.reviewCount})</p>
                      <div className="w-[12px]" />
                      <p className="bodymdmedium text-gray-800">{counselor.symptoms.join(',')}</p>
                    </div>
                    <p className="bodymdmedium text-gray-500">“{counselor.introduction}”</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-[20px]">
                  <Button
                    label="상담사 보기"
                    size="Large"
                    color="line"
                    onClick={() => navigate(`/counseling/counselor/${counselor.id}`)}
                  />
                  <Button
                    label="예약하기"
                    size="Large"
                    color="pink"
                    onClick={() => navigate(`/counseling/reservation/${counselor.id}`)}
                    // 예약하기 페이지에 상담사 id를 전달하기 위해서 수정
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1006px] border-[1.2px] border-gray-400" />
        </div>
      ))}
    </div>
  )
}

export default CounselorCard
