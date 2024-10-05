import Button from '../../Button'
import { useState } from 'react'
import Input from '../../Input'

const Contents: React.FC = () => {
  const [category, setCategory] = useState('') // 카테고리
  const [title, setTitle] = useState('') // 제목
  const [symptom, setSymptom] = useState('') // 상담증상
  const [content, setContent] = useState('') // 상담내용

  // 카테고리 변경 이벤트 핸들러
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value)
  }
  // 제목 변경 이벤트 핸들러
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  // 상담증상 변경 이벤트 핸들러
  const handleSymptomChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSymptom(event.target.value)
  }
  // 상담내용 변경 이벤트 핸들러
  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

  return (
    <div className="mt-[170px] flex h-auto w-full flex-col items-start justify-center bg-white px-[170px] text-black">
      {/* 온라인, 오프라인 선택 버튼 */}
      <div className="mb-[34px] flex flex-row gap-[16px]">
        <Button label="온라인" size="Large" color="gray" />
        <Button label="오프라인" size="Large" color="gray" />
      </div>

      {/* 정보입력칸 */}
      <div className="bodysmmedium mb-[108px] flex h-[241px] w-[536px] flex-col items-stretch justify-evenly rounded border border-gray-200 bg-gray-100 px-[40px]">
        <div className="flex flex-row items-center justify-between ">
          고객 아이디
          <Input type="Text" btnLabel="" placeholder="" />
        </div>
        <div className="flex flex-row items-center justify-between ">
          지역
          <Input type="Text" btnLabel="" placeholder="" />
        </div>{' '}
        <div className="flex flex-row items-center justify-between ">
          상담날짜
          <Input type="Text" btnLabel="" placeholder="" />
        </div>
      </div>

      <div className="mb-[340px] flex h-auto w-full flex-col gap-[30px]">
        {/* 카테고리 */}
        <div className="relative w-full">
          <input
            className="bodylsemibold h-auto w-full rounded-lg border border-gray-500 bg-white p-[40px]"
            placeholder="카테고리를 입력해 주세요"
            value={category}
            onChange={handleCategoryChange}
            maxLength={100}
          />
          <p className="bodylregular absolute bottom-[40px] right-[50px] text-gray-400">
            {category.length}자/{100}자
          </p>
        </div>

        {/* 제목 */}
        <div className="relative w-full">
          <input
            className="bodylsemibold h-auto w-full rounded-lg border border-gray-500 bg-white p-[40px] pr-[150px]"
            placeholder="제목을 입력해 주세요"
            value={title}
            onChange={handleTitleChange}
            maxLength={100}
          />
          <p className="bodylregular absolute bottom-[40px] right-[50px] text-gray-400">
            {title.length}자/{100}자
          </p>
        </div>

        {/* 상담증상 */}
        <div className="relative w-full">
          <textarea
            className="bodylsemibold h-[257px] w-full rounded-lg border border-gray-500 bg-white p-[40px] pr-[150px]"
            placeholder="상담증상을 입력해 주세요"
            value={symptom}
            onChange={handleSymptomChange}
            maxLength={100}
          />
          <p className="bodylregular absolute bottom-[40px] right-[50px] text-gray-400">
            {symptom.length}자/{100}자
          </p>
        </div>

        {/* 상담내용 */}
        <div className="relative w-full">
          <textarea
            className="bodylsemibold h-[257px] w-full rounded-lg border border-gray-500 bg-white p-[40px] pr-[150px]"
            placeholder="상담내용을 입력해 주세요"
            value={content}
            onChange={handleContentChange}
            maxLength={1000}
          />
          <p className="bodylregular absolute bottom-[40px] right-[50px] text-gray-400">
            {content.length}자/{1000}자
          </p>
        </div>
      </div>

      {/* 등록 버튼 */}
      <div
        className="hover:contents-gray-50 active:contents-white mb-[260px] flex h-[94px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-pink-400 text-white hover:bg-primary-700 active:bg-primary-800"
        onClick={() => {}}>
        <div className="smsemibold contents-center contents-white">등록</div>
      </div>
    </div>
  )
}

export default Contents
