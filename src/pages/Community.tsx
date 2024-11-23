import Header from '../components/header/Header'
import Footer from '../components/common/Footer'
import CommunityForm from '../components/community/CommunityForm'

const Community: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <Header />
      <CommunityForm />
      <Footer />
    </div>
  )
}
export default Community
