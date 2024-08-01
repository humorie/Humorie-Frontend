import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCategoryStore } from '../../store/store'

interface Counselor {
  counselorId: number
  name: string
  gender: string
  region: string
  rating: number
  reviewCount: number
  introduction: string
  counselingMethods: string[]
  counselingFields: string[]
}

const CardRecommend: React.FC = () => {
  const [counselors, setCounselors] = useState<Counselor[]>([])
  const { selectedCategory } = useCategoryStore()

  useEffect(() => {
    axios
      .get('/api/search')
      .then((response) => {
        if (response.data.isSuccess) {
          const filteredCounselors = response.data.result.filter((counselor: Counselor) =>
            counselor.counselingMethods.includes(selectedCategory),
          )
          setCounselors(filteredCounselors)
        } else {
          console.log('API 요청 실패', response.data.message)
        }
      })
      .catch((error) => {
        console.log('API 요청 에러', error)
      })
  }, [selectedCategory])

  return (
    <div className="hide-scrollbar flex w-[1250px] overflow-x-auto">
      {counselors.map((counselor) => (
        <div
          key={counselor.counselorId}
          className="mr-5 flex h-[432px] w-[300px] flex-none flex-col rounded-lg last:mr-0">
          <img
            className="h-[300px] w-full"
            src="/src/assets/images/avatar/avatar_square1.svg"
            alt="솜솜이 아바타"
          />
          <div className="flex flex-col items-start justify-end gap-3 self-stretch bg-white p-6">
            <div className="flex items-center justify-start gap-2 self-stretch">
              <p className="smsemibold text-center text-black">{counselor.name}</p>
              <p className="bodymdmedium text-center text-gray-800">상담가</p>
            </div>
            <div className="flex items-center justify-center gap-4 self-stretch">
              <div className="flex items-center justify-center gap-1">
                <img
                  className="h-[24px] w-[24px]"
                  src="src/assets/images/icon/icon_star_pink.svg"
                  alt="별"
                />
                <p className="bodylmedium text-center text-gray-800">
                  {counselor.rating.toFixed(1)}
                </p>
                <p className="bodylmedium text-center text-gray-500">({counselor.reviewCount})</p>
              </div>
              <div className="flex h-6 shrink grow basis-0 items-center justify-start gap-1">
                <p className="bodymdsemibold text-center text-gray-700">
                  {counselor.counselingMethods.join(', ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardRecommend
