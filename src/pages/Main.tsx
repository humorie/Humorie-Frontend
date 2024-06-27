import Footer from '../components/Footer'
import Header from '../components/header/Header'
import Contents from '../components/main/Contents'
import Contents2 from '../components/main/Contents2'
import Rending from '../components/main/Rending'

const Main: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <Header />
      <Rending />
      <Contents />
      <Contents2 />
      <Footer />
    </div>
  )
}

export default Main
