import { useRef, useState, useEffect } from 'react'
import '../../index.css'
import SearchinModal from './Modal/searchinmodal'
import Table from './Modal/table'
import Button from '../Button'
import { useTagsStore, Tag } from '../../store/store'
import SearchResults from './Modal/searchResults'

const SearchBar = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [searchTags, setSearchTags] = useState<Tag[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const modalBackground = useRef(null)
  const { tags, removeTag, removeSelectedSymptom } = useTagsStore()

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

  const handleConfirm = () => {
    setSearchTags(tags)
    setModalOpen(false)
  }

  const handleRemoveTag = (tagContent: string) => {
    removeTag(tagContent)
    removeSelectedSymptom(tagContent)
  }

  const handleSearchInputhChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="flex flex-row bg-gray-50 px-[23px] py-[19px]">
      <img src="src/assets/images/counseling/search.svg" alt="search" className="mr-[36px]" />
      <div
        className="bodylregular flex h-[30px] w-[1006px] cursor-pointer items-center justify-start bg-gray-50 p-0 text-gray-500"
        onClick={() => setModalOpen(true)}>
        {searchTags.length > 0 ? (
          <div className="flex flex-wrap justify-center space-x-[12px]">
            {searchTags.map((tag, index) => (
              <div
                key={index}
                className="bodymdsemibold flex cursor-pointer flex-row rounded-[4px] border-[1px] border-primary-600 bg-primary-100 px-[10px] py-[6px] text-primary-600">
                {tag.content}
                <img
                  src="src/assets/images/counseling/icon_close.svg"
                  alt="close"
                  className="ms-[2px]"
                />
              </div>
            ))}
          </div>
        ) : (
          '이름, 상황으로 전문가를 검색해보세요!'
        )}
      </div>
      {modalOpen && (
        <div
          ref={modalBackground}
          className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-40"
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setModalOpen(false)
            }
          }}>
          <div className="flex h-[655px] w-[540px] flex-col items-center bg-white">
            <SearchinModal onSearchInputChange={handleSearchInputhChange} />
            {searchQuery ? <SearchResults query={searchQuery} /> : <Table />}

            <div className="  overflow-x ms-[45px] mt-[25px]  flex w-full flex-row flex-wrap justify-start space-x-[12px]">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="bodymdsemibold flex h-auto cursor-pointer flex-row rounded-[4px] border-[1px] border-primary-600 bg-primary-100 px-[10px] py-[6px] text-primary-600 hover:border-primary-700 hover:bg-primary-200 "
                  onClick={() => handleRemoveTag(tag.content)}>
                  {tag.content}
                  <img
                    src="src/assets/images/counseling/icon_close.svg"
                    alt="close"
                    className="ms-[2px]"
                  />
                </div>
              ))}
            </div>
            <div className="flex-grow"></div>
            <div className="mb-[24px] flex space-x-[28px]">
              <Button label="취소" size="Large" color="line" onClick={() => setModalOpen(false)} />
              <Button label="확인" size="XLarge" color="pink" onClick={handleConfirm} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchBar
