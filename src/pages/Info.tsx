import Footer from '../components/Footer'
import Header from '../components/header/Header'
import BusinessIntroduction from '../components/info/BusinessIntroduction'
import Location from '../components/info/Location'
import Rending from '../components/info/Rending'
import ServiceHistory from '../components/info/ServiceHistory'

const Info: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <Rending />
      <ServiceHistory />
      <BusinessIntroduction />
      <Location />
      <Footer />
    </div>
  )
}
export default Info
