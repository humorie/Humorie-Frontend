import Footer from '../components/Footer'
import Header from '../components/header/Header'
import Content from '../components/mypage/Content'

const MyPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <Header />
      <Content />

      <Footer />
    </div>
  )
}

export default MyPage
