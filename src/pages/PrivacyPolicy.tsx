import { useEffect } from 'react'
import Footer from '../components/common/Footer'
import PrivacyContents from '../components/privacyPolicy/PrivacyContents'
import PrivacyHeader from '../components/privacyPolicy/PrivacyHeader'

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }, [])

  return (
    <div className="justify-top flex flex-col items-center text-black ">
      <PrivacyHeader />
      <div className="mb-[150px] mt-[48px] w-[1100px] px-[110px]">
        <PrivacyContents />
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy
