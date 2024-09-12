import { useState, useEffect } from 'react'
import { useFetchAllCounselor } from '../../hooks/useFetchAllCounselor'
import CardRecommend from './CardRecommend'
import CardReview from './CardReview'
import Category from './Category'
import { CounselorsType } from '../Types'

const Contents: React.FC = () => {
  const counselors = useFetchAllCounselor()
  const [sortedCounselors, setSortedCounselors] = useState<CounselorsType[]>([])

  useEffect(() => {
    if (counselors.length > 0) {
      const temp = [...counselors].sort((a, b) => b.rating - a.rating)
      setSortedCounselors(temp)
    }
  }, [counselors])

  return (
    <div className="w-[1440px] bg-gradient-to-b from-white via-stone-50 to-pink-100 px-[170px]">
      {/* 헤드라인 */}
      <p className="mdbold w-full text-gray-900" ref={cardRecommendRef} id="card-recommend">
        앤데이 인기 전문가
      </p>

      {/* 카테고리 */}

      <Category />

      {/* 상담사 추천 카드 */}
      {/* <div ref={cardRecommendRef} id="card-recommend"> */}
      <CardRecommend />
      {/* </div> */}

      {/* 리뷰 카드 */}
      <div className="mb-[160px] ml-[40px] mt-[260px] flex flex-row items-start justify-start gap-[40px]">
        {sortedCounselors.length > 1 && (
          <>
            <div className="flex flex-col gap-[40px]">
              <CardReview counselorId={sortedCounselors[0]?.counselorId} />
              <CardReview counselorId={sortedCounselors[1]?.counselorId} />
            </div>
            <div className="mt-[100px] flex flex-col gap-[40px]">
              <CardReview counselorId={sortedCounselors[2]?.counselorId} />
              <CardReview counselorId={sortedCounselors[3]?.counselorId} />
            </div>
          </>
        )}
        {/* 상담후기 헤드라인 */}
        <div className="relative ml-[60px] flex h-[110px] w-full flex-col items-start justify-center">
          <img
            className=" absolute h-[130px] w-[130px] opacity-50"
            src="src/assets/images/sticker/sticker6_1.svg"
            alt="스티커6-1"
          />
          <div className="flex flex-col gap-[32px]">
            <div className="mdbold text-gray-900">상담 후기</div>
            <div className="bodylmedium text-gray-500">
              안전하고 전문성 있는 상담사를 만나보세요!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contents
