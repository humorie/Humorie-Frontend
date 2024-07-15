import { useEffect } from 'react'
import Footer from '../components/Footer'
import FirstArticle from '../components/policy/FirstArticle'
import PolicyHeader from '../components/policy/PolicyHeader'
import SecondArticle from '../components/policy/SecondArticle'
import ThirdArticle from '../components/policy/ThirdArticle'

const Policy: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }, [])

  return (
    <div className="justify-top flex flex-col items-center text-black ">
      <PolicyHeader />
      <div className="mb-[340px] mt-[48px] w-[1100px] space-y-[40px] px-[20px]">
        <div className="bodymdmedium text-gray-400">
          앤데이 서비스 이용에 필요한 사항을 규정합니다.
        </div>
        <FirstArticle />
        <SecondArticle />
        <ThirdArticle />
      </div>
      <Footer />
    </div>
  )
}

export default Policy
