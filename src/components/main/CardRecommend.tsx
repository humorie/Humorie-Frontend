import { useEffect, useState } from 'react'
import { useCategoryStore } from '../../store/store'
import { useNavigate } from 'react-router-dom'
import { useFetchAllCounselor } from '../../hooks/useFetchAllCounselor'
import { CounselorsType } from '../Types'

const CardRecommend: React.FC = () => {
  const counselors = useFetchAllCounselor() // 전체 상담사 커스텀훅 호출
  const [filteredCounselors, setFilteredCounselors] = useState<CounselorsType[]>([])
  const navigate = useNavigate()
  const { selectedCategory } = useCategoryStore()

  useEffect(() => {
    // 클릭한 카테고리 명으로 필터링
    const temp = counselors.filter((counselor: CounselorsType) =>
      counselor.symptoms.includes(selectedCategory),
    )
    setFilteredCounselors(temp)
  }, [selectedCategory, counselors])

  return (
    <div className="flex w-[1250px] overflow-x-auto">
      {filteredCounselors.map((counselor) => (
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
                <p className="bodymdsemibold w-[139px] truncate text-center text-gray-700">
                  {counselor.symptoms.join(' · ')}
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
