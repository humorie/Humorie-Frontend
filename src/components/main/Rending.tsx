import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useModalStore, useTagsStore } from '../../store/store'
import SearchinModal from '../counseling/Modal/searchinmodal'
import Table from '../counseling/Modal/table'
import Button from '../Button'

const Rending: React.FC = () => {
  const { modalOpen, openModal, closeModal } = useModalStore()
  const modalBackground = useRef(null)
  const { tags, removeTag, removeSelectedSymptom } = useTagsStore()
  const navigate = useNavigate()

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

  const handleRemoveTag = (tagContent: string) => {
    removeTag(tagContent)
    removeSelectedSymptom(tagContent)
  }

  const stickers = [
    { src: 'src/assets/images/sticker/sticker6_3.svg', alt: '스티커6-3' },
    { src: 'src/assets/images/sticker/sticker11_2.svg', alt: '스티커11-2' },
    { src: 'src/assets/images/sticker/sticker4_1.svg', alt: '스티커4-1' },
    { src: 'src/assets/images/sticker/sticker5_5.svg', alt: '스티커5-5' },
    { src: 'src/assets/images/sticker/sticker7_4.svg', alt: '스티커7-4' },
  ]

  const categories = [
    { src: 'src/assets/images/main/main_rending_image1.svg', alt: '개인상담', label: '개인상담' },
    { src: 'src/assets/images/main/main_rending_image2.svg', alt: '집단상담', label: '집단상담' },
    { src: 'src/assets/images/main/main_rending_image3.svg', alt: '심리검사', label: '심리검사' },
    { src: 'src/assets/images/main/main_rending_image4.svg', alt: 'AI매칭', label: 'AI매칭' },
    { src: 'src/assets/images/main/main_rending_image5.svg', alt: '커뮤니티', label: '커뮤니티' },
    { src: 'src/assets/images/main/main_rending_image6.svg', alt: '상담기록', label: '상담기록' },
    { src: 'src/assets/images/main/main_rending_image7.svg', alt: '기업제휴', label: '기업제휴' },
  ]

  return (
    <div className="flex w-[1440px] flex-col items-center justify-center px-[170px]">
      {/* 헤드라인 */}
      <div className="relative mt-[190px] flex w-full flex-col  items-center justify-center">
        <div className=" absolute flex w-full items-center justify-center gap-[100px]">
          {stickers.map((image, index) => (
            <img key={index} className="w-20 opacity-50" src={image.src} alt={image.alt} />
          ))}
        </div>
        <p className="mdPlusBold  text-center text-pink-400">
          당신의 더 나은 내일을 응원합니다
          <br />
          앤데이 심리상담
        </p>
      </div>

      {/* 검색창 */}
      <div
        className="mt-[150px] flex h-[68px] cursor-pointer flex-col items-start justify-start bg-gray-50 px-6 py-[19px]"
        onClick={() => openModal()}>
        <div className="flex items-center justify-start gap-9">
          <img
            className="h-6 w-6"
            src="src/assets/images/icon/icon_search_pink.svg"
            alt="icon_search"
          />
          <input
            type="text"
            className="bodylregular w-[952px] bg-transparent text-gray-500 focus:outline-none"
            placeholder="이름, 키워드로 전문가를 검색해보세요!"
          />
        </div>
      </div>

      {/* 카테고리 */}
      <div className="bodymdsemibold mb-[80px] mt-[56px] flex w-[1060px] items-start justify-between px-6 text-gray-700 ">
        {categories.map((category, index) => (
          <div key={index} className="inline-flex flex-col items-center justify-start gap-4">
            <img className="h-14 w-14" src={category.src} alt={category.alt} />
            <p>{category.label}</p>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div
          ref={modalBackground}
          className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-40"
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              closeModal()
            }
          }}>
          <div className="flex h-[655px] w-[540px] flex-col items-center bg-white">
            <SearchinModal
              onSearchInputChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                throw new Error('Function not implemented.')
              }}
            />
            <Table />
            <div className="h-150px ms-[45px] mt-[25px] flex w-full  flex-wrap justify-start space-x-[12px] overflow-y-auto">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="bodymdsemibold flex cursor-pointer flex-row rounded-[4px] border-[1px] border-primary-600 bg-primary-100 px-[10px] py-[6px] text-primary-600 hover:border-primary-700 hover:bg-primary-200 "
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
              <Button label="취소" size="Large" color="line" onClick={() => closeModal()} />
              <Button
                label="확인"
                size="XLarge"
                color="pink"
                onClick={() => {
                  closeModal()
                  navigate('/counseling')
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Rending
