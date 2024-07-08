import Footer from '../components/Footer'
import Header from '../components/header/Header'
import Contetns from '../components/review/Contents'

const Review: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <Header />
      <Contetns />
      <Footer />
    </div>
  )
}

export default Review
