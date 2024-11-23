import { useEffect } from 'react'
import Footer from '../components/common/Footer'
import FirstArticle from '../components/policy/FirstArticle'
import PolicyHeader from '../components/policy/PolicyHeader'

const Policy: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }, [])

  return (
    <div className="justify-top flex flex-col items-center text-black ">
      <PolicyHeader />
      <div className="mb-[150px] mt-[48px] w-[1100px] px-[110px]">
        <FirstArticle />
      </div>
      <Footer />
    </div>
  )
}

export default Policy
