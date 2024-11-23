import { useEffect } from 'react'
import Footer from '../components/common/Footer'
import Counselorlist from '../components/counseling/counselorlist'
import Dropdown from '../components/counseling/dropdown'
import FindCounselor from '../components/counseling/findcounselor'
import SearchBar from '../components/counseling/searchbar'
import Header from '../components/header/Header'
import '../index.css'

const Counseling: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center scroll-auto text-black">
      <Header />
      <FindCounselor />
      <div className="h-[40px]"> </div>
      <div className="flex w-[1006px] flex-col">
        <SearchBar />
        <Dropdown />
        <Counselorlist />
      </div>
      <Footer />
    </div>
  )
}

export default Counseling
