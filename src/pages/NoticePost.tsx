import Footer from '../components/Footer'
import Header from '../components/header/Header'
import Contetns from '../components/notice_post/Contents'
import Rending from '../components/notice_post/Rending'

const NoticePost: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <Header />
      <Rending />
      <Contetns />
      <Footer />
    </div>
  )
}

export default NoticePost
