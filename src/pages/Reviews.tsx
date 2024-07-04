import ReviewTabs from '../components/counselor/reviews/reviewtab'
import '../index.css'

const MoreReviews: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen scroll-auto">
      <div className="flex flex-col mt-[83px] w-[1100px]">
        <p className="smbold">이솔비 상담사님에 대한 32개의 후기</p>
        <div className="h-[40px]"> </div>
        <button
          type="submit"
          className="bodymdbold w-[177px] h-[50px] p-0 bg-primary-600 text-white">
          상담 예약하기
        </button>
        <div className="h-[108px]"> </div>
        <ReviewTabs />
      </div>
    </div>
  )
}

export default MoreReviews
