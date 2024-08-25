import Footer from '../components/Footer'
import Header from '../components/header/Header'
import Content from '../components/mypage/Content'
import TotalPoints from '../components/mypage/TotalPoints'
import PaymentDetail from '../components/mypage/PaymentDetail'

const MyPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <Header />
      <Content />
      <TotalPoints />
      <PaymentDetail />
      <Footer />
    </div>
  )
}

export default MyPage
