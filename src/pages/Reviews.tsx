import Button from '../components/Button'
import ReviewTabs from '../components/counselor/reviews/reviewtab'
import Footer from '../components/Footer'
import Header from '../components/header/Header'
import '../index.css'
import { useNavigate } from 'react-router-dom'

const MoreReviews: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center scroll-auto text-black">
      <Header />
      <div className="mt-[83px] flex w-[1100px] flex-col">
        <p className="smbold">이솔비 상담사님에 대한 32개의 후기</p>
        <div className="h-[40px]"> </div>
        <Button
          label="상담 예약하기"
          size="Large"
          color="pink"
          onClick={() => navigate('/counseling/reservation')}
        />
        {/* <button
          type="submit"
          className="bodymdbold h-[50px] w-[177px] bg-primary-600 p-0 text-white">
          상담 예약하기
        </button> */}
        <div className="h-[108px]"> </div>
        <ReviewTabs />
      </div>
      <Footer />
    </div>
  )
}

export default MoreReviews
