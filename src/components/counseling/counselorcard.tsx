import { useNavigate } from 'react-router-dom'
import '../../index.css'
import Button from '../Button'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useFiltersStore, useTagsStore } from '../../store/store'

interface CounselorList {
  id: number
  name: string
  gender: string
  region: string
  counselingMethods: string[]
  counselingFields: string[]
  rating: number
  reviewCount: number
  introduction: string
}

const CounselorCard = () => {
  const { tags } = useTagsStore()
  const { gender, counselingMethod, region, order } = useFiltersStore()
  const navigate = useNavigate()
  const [counselor, setCounselor] = useState<CounselorList[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchCounselorData = async () => {
      try {
        let endpoint = '/api/search'
        const params: Record<string, any> = {}

        if (tags.length > 0) {
          endpoint = '/api/search/keywords'
          {
            params.keywords = tags.map((tag) => tag.content).join(',')
          }
          // if (gender) params.gender = gender
          // if (counselingMethod) params.counselingMethod = counselingMethod
          // if (region) params.region = region
          // if (order) params.order = order
        } else {
          if (gender || counselingMethod || region || order) {
            endpoint = '/api/search/conditions'
          }
          if (gender) params.gender = gender
          if (counselingMethod) params.counselingMethod = counselingMethod
          if (region) params.region = region ? `%${region}%` : undefined
          if (order) params.order = order
        }

        const response = await axios.get(endpoint, {
          params: params,
          headers: {},
        })

        console.log('Request URL:', endpoint)
        console.log('Request Params:', params)
        console.log('API Response:', response.data)

        const data = response.data.result.map((item: any) => ({
          id: item.counselorId,
          name: item.name,
          gender: item.gender,
          region: item.region,
          counselingMethods: item.counselingMethods || [],
          counselingFields: item.counselingFields || [],
          rating: item.rating,
          reviewCount: item.reviewCount,
          introduction: item.introduction,
        }))

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
  }, [gender, counselingMethod, region, order, tags])

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

                {counselor.counselingFields.map((field, index) => (
                  <div
                    key={index}
                    className="rounded-[4px] bg-gray-100 px-[12px] py-[6px] text-gray-700">
                    {field}
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
                      <p className="bodylmedium text-gray-800">{counselor.rating.toFixed(2)} </p>
                      <p className="bodylmedium text-gray-500">({counselor.reviewCount})</p>
                      <div className="w-[12px]" />
                      <p className="bodymdmedium text-gray-800">
                        {counselor.counselingMethods.join(', ')}
                      </p>
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
                    onClick={() => navigate('/counseling/reservation')}
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
