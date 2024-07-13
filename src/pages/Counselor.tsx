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
    <div className="flex w-screen flex-col items-center justify-center space-y-[66px] bg-white">
      <Header />
      <div className="mt-[135px] flex w-[1050px] flex-row justify-between">
        <Profile />
        <Introduction />
      </div>
      <Career />
      <Footer />
    </div>
  )
}

export default Counselor
