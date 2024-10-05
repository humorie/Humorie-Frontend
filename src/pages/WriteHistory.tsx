import Footer from '../components/Footer'
import Header from '../components/header/Header'
import Contents from '../components/history/write/Contents'

const WriteHistory: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <Header />
      <Contents />
      <Footer />
    </div>
  )
}

export default WriteHistory
