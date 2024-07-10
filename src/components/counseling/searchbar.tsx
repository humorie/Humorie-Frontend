import { useRef, useState, useEffect } from 'react'
import '../../index.css'
import SearchinModal from './Modal/searchmodal'
import Table from './Modal/table'
import Button from '../Button'

const SearchBar = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const modalBackground = useRef(null)

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [modalOpen])

  return (
    <div className="flex flex-row bg-gray-50 px-[23px] py-[19px]">
      <img src="src/assets/images/counseling/search.svg" alt="search" className="mr-[36px]" />
      <button
        className="bodylregular flex h-[30px] w-[1006px] justify-start bg-gray-50 p-0 text-gray-500"
        onClick={() => setModalOpen(true)}>
        이름, 상황으로 전문가를 검색해보세요!
      </button>
      {modalOpen && (
        <div
          ref={modalBackground}
          className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-40"
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false)
            }
          }}>
          <div className="flex h-[655px] w-[540px] flex-col flex-col items-center bg-white">
            <SearchinModal />
            <Table />
            <div className="mt-[96px] flex space-x-[28px]">
              <Button label="취소" size="Large" color="line" onClick={() => setModalOpen(false)} />
              <Button label="확인" size="XLarge" color="pink" />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar
