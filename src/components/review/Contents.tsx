import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import MakeTagModal from './ReviewModal'
import { useModalStore, useTagsStore } from '../../store/store'

const Contetns: React.FC = () => {
  const [text, setText] = useState('')
  const maxLength = 500
  const navigate = useNavigate()
  const { modalOpen, openModal, closeModal } = useModalStore()
  const tags = useTagsStore((state) => state.tags)

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const handleSubmit = () => {
    navigate('/review/complete')
  }

  // 태그 클릭 이벤트 핸들러
  const handleTagClick = (content: string) => {
    setText(content)
  }

  return (
    <div className="flex w-[1060px] flex-col items-center justify-center bg-white text-black">
      <div className="mdbold mt-[200px] flex w-full flex-col justify-center text-center">
        나의 상담리뷰
      </div>
      <div className="bodymdsemibold mt-[16px] flex w-full flex-col justify-center text-center">
        상담사 정원희
      </div>
      <div className="mt-[75px] flex h-[204px] w-full flex-col items-center justify-evenly rounded-lg bg-pink-50">
        <div className="smbold text-center">김정희님, 이번상담 어떠셨나요?</div>
        <div className="flex h-[30px] w-[330px] flex-row gap-[45px]">
          <img
            src="src/assets/images/icon/icon_star_pink.svg"
            className=" h-[30px] w-[30px]"
            alt="별_핑크"
          />
          <img
            src="src/assets/images/icon/icon_star_pink.svg"
            className=" h-[30px] w-[30px]"
            alt="별_핑크"
          />
          <img
            src="src/assets/images/icon/icon_star_pink.svg"
            className=" h-[30px] w-[30px]"
            alt="별_핑크"
          />
          <img
            src="src/assets/images/icon/icon_star_pink.svg"
            className=" h-[30px] w-[30px]"
            alt="별_핑크"
          />
          <img
            src="src/assets/images/icon/icon_star_gray.svg"
            className=" h-[30px] w-[30px]"
            alt="별_회색"
          />
        </div>
      </div>

      {/* 리뷰 글쓰기 */}
      <div className="relative w-full">
        <textarea
          className="mt-[52px] h-[665px] w-full rounded-lg border border-gray-500 bg-white p-[40px]"
          placeholder="내용을 입력해주세요"
          value={text}
          onChange={handleTextChange}
          maxLength={maxLength}
        />
        <p className="absolute left-[930px] top-[650px] text-sm text-gray-500">
          {text.length}/{maxLength}자
        </p>
      </div>
      {/* 자주쓰는 문구 태그화 */}
      <div className="mt-[40px] flex w-full flex-row items-center justify-between">
        {/* 태그 */}
        <div className="flex flex-row items-center justify-center gap-[12px]">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bodymdmedium flex h-[46px] cursor-pointer items-center justify-center rounded bg-gray-100 p-2 text-center text-gray-700"
              onClick={() => handleTagClick(tag.content)} // 태그 클릭 이벤트 핸들러 추가
            >
              {tag.title}
            </div>
          ))}
        </div>
        {/* 태그 제작 버튼 */}
        <Button
          label="자주쓰는 문구 등록하러 가기"
          size="XLarge"
          color="gray"
          onClick={openModal}
        />
      </div>
      {/* 태그 입력 모달 */}
      <MakeTagModal isOpen={modalOpen} onClose={closeModal} />
      {/* 등록 버튼 */}
      <div
        className="mb-[356px] mt-[122px] flex h-[94px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-pink-400 px-[35px] py-[15px] hover:bg-primary-700 hover:text-gray-50 active:bg-primary-800 active:text-white"
        onClick={handleSubmit}>
        <div className="smsemibold text-center text-white">등록</div>
      </div>
    </div>
  )
}

export default Contetns
