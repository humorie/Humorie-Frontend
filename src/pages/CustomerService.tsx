import SearchinCS from '../components/cs/search'
import Footer from '../components/Footer'
import Header from '../components/header/Header'
import '../index.css'
import ListinCS from '../components/cs/list'
import { useEffect } from 'react'

const CustomerServcie: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }, [])

  return (
    <div className="flex w-[1440px] flex-col items-center justify-center bg-white  text-black">
      <Header />
      <div className="mt-[148px] flex w-[1100px] flex-col">
        <div className="ms-[200px] flex items-center">
          <SearchinCS />
        </div>
        <div className="mt-[82px] flex space-x-[48px] px-[20px]">
          <div className="flex flex-col">
            <div className="bodylbold mb-[23px] mt-[6px] text-gray-800">고객센터</div>
            <div className="mb-[19px] h-[1px] w-[130px] bg-black"></div>
            <div className="bodymdmedium text-gray-600">공지사항</div>
          </div>
          <div className="flex flex-col">
            <div className="mb-[23px] flex items-end space-x-[25px]">
              <div className="xsbold text-gray-800">공지사항</div>
              <div className="bodysmmedium text-gray-500">
                검증된 상담사들이 정확하고 신뢰성있는 정보를 제공합니다.
              </div>
            </div>
            <div className=" h-[1px] w-[880px] bg-black"></div>
            <ListinCS />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CustomerServcie
