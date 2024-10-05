import Contents from '../components/customerService/write/Content'
import Footer from '../components/Footer'
import Header from '../components/header/Header'

const WriteCustomerService: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <Header />
      <Contents />
      <Footer />
    </div>
  )
}

export default WriteCustomerService
