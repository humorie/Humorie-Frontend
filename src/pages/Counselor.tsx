import { useEffect } from 'react'
import Footer from '../components/Footer'
import Career from '../components/counselor/career'
import Introduction from '../components/counselor/introduction'
import Profile from '../components/counselor/profile'
import Header from '../components/header/Header'
import '../index.css'

const Counselor: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center space-y-[66px] text-black">
      <Header />
      <div className="flex w-[1050px] flex-row justify-between pt-[75px]">
        <Profile />
        <Introduction />
      </div>
      <Career />
      <Footer />
    </div>
  )
}

export default Counselor
