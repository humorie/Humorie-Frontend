import CardRecommend from './CardRecommend'
import CardReview1 from './CardReview1'
import CardReview2 from './CardReview2'
import Category from './Category'

const Contents: React.FC = () => {
  return (
    <div className="relative h-[1920px] w-[1440px] bg-gradient-to-b from-white via-stone-50 to-pink-100">
      {/* 헤드라인 */}
      <p className="mdbold absolute left-[190px] top-[80px] w-[1059px]  text-gray-900">
        앤데이 인기 전문가
      </p>

      {/* 카테고리 */}
      <Category />

      {/* 상담사 추천 카드 */}
      <div className="absolute left-[190px] top-[224px] overflow-x-auto">
        <div className="inline-flex items-start justify-start gap-[30px]">
          <CardRecommend />
          <CardRecommend />
          <CardRecommend />
        </div>
      </div>

      {/* 상담후기 헤드라인 */}
      <div className="absolute left-[897px] top-[916px] inline-flex h-[110px] w-[353px] flex-col items-start justify-start gap-8">
        <img
          className="absolute left-0 top-[-39px] z-0 h-[130px] w-[130px] opacity-50"
          src="src/assets/images/sticker/sticker6_1.svg"
          alt="스티커6-1"
        />
        <div className="z-10">
          <div className="mdbold text-gray-900">상담 후기</div>
          <div className="bodylmedium text-gray-500">안전하고 전문성 있는 상담사를 만나보세요!</div>
        </div>
      </div>

      {/* 리뷰 카드 */}
      <div className="absolute left-[536px] top-[1040px]">
        <CardReview1 />
      </div>
      <div className="absolute left-[536px] top-[1420px]">
        <CardReview1 />
      </div>
      <div className="absolute left-[236px] top-[939px]">
        <CardReview2 />
      </div>
      <div className="absolute left-[236px] top-[1319px]">
        <CardReview2 />
      </div>
    </div>
  )
}
export default Contents
