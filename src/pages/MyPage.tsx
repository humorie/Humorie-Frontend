import Footer from '../components/common/Footer'
import Header from '../components/header/Header'
import UserInfo from '../components/myPage/UserInfo'
import PointDetail from '../components/myPage/PointDetail'
import PaymentDetail from '../components/myPage/PaymentDetail'

const MyPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <Header />
      <UserInfo />
      <PointDetail />
      <PaymentDetail />
      <Footer />
    </div>
  )
}

export default MyPage
