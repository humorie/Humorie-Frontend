import '../../index.css'
import ReviewCard from './reviewcard'

const Review = () => {
  return (
    <div className="flex flex-col space-y-[22px]">
      <div className="flex flex-row items-end justify-between">
        <p className="bodylmedium">이솔비 상담사님의 117개 후기</p>
        <button type="submit" className="bodymdregular bg-transparent p-0 m-0">
          더보기
        </button>
      </div>
      <div className="flex flex-row space-x-[22px]">
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  )
}

export default Review
