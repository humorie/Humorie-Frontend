import { useEffect } from 'react'
import Footer from '../components/Footer'
import DataContents from '../components/data_collection/DataContents'
import DataHeader from '../components/data_collection/DataHeader'

const Policy: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0)
  }, [])

  return (
    <div className="justify-top flex flex-col items-center text-black ">
      <DataHeader />
      <div className="mb-[150px] mt-[48px] w-[1100px] px-[110px]">
        <DataContents />
      </div>
      <Footer />
    </div>
  )
}

export default Policy