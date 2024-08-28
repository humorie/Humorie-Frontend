import { useEffect, useState } from 'react'
import axios from 'axios'
import { useCategoryStore } from '../../store/store'
import { useNavigate } from 'react-router-dom'

interface Counselor {
  counselorId: number
  name: string
  gender: string
  region: string
  rating: number
  reviewCount: number
  introduction: string
  counselingMethods: string[]
  symptoms: string[]
}

const CardRecommend: React.FC = () => {
  const [counselors, setCounselors] = useState<Counselor[]>([])
  const navigate = useNavigate()
  const { selectedCategory } = useCategoryStore()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/search')
        if (response.data.isSuccess) {
          const filteredCounselors = response.data.result.filter(
            (counselor: Counselor) => counselor.symptoms.includes(selectedCategory), // 클릭한 카테고리 명으로 필터링
          )
          setCounselors(filteredCounselors) // 카테고리에 선택된 상담사만 상태 업데이트
          console.log('전체 상담사 조회 API 결과: ', counselors)
          console.log(response.data)
        }
      } catch (error) {
        console.log('전체 상담사 조회 API 에러: ', error)
      }
    }
    fetchData()
  }, [selectedCategory])

  return (
    <div className="flex w-[1250px] overflow-x-auto">
      {counselors.map((counselor) => (
        <div
          key={counselor.counselorId}
          className="mr-5 flex h-[432px] w-[300px] flex-none flex-col rounded-lg last:mr-0"
          onClick={() => navigate(`/counseling/counselor/${counselor.counselorId}`)}>
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
                  {counselor.symptoms.join(', ')}
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
