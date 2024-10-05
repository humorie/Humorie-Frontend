import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contents: React.FC = () => {
  const [title, setTitle] = useState('') // 제목
  const [content, setContent] = useState('') // 상담내용
  const navigate = useNavigate()

  // 제목 변경 이벤트 핸들러
  const handleTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(event.target.value)
  }
  // 상담내용 변경 이벤트 핸들러
  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

  return (
    <div className="mt-[170px] flex h-auto w-full flex-col items-start justify-center bg-white px-[170px] text-black">
      <img
        className="mb-[32px] flex h-[60px] w-[60px] cursor-pointer items-center justify-start"
        src="/src/assets/images/icon/icon_arrow_left_gray.svg"
        alt="뒤로가기"
        onClick={() => navigate(-1)}
      />
      <div className="mb-[170px] flex h-auto w-full flex-col gap-[30px]">
        {/* 제목 */}
        <div className="relative w-full">
          <textarea
            className="bodylsemibold h-[257px] w-full rounded-lg border border-gray-500 bg-white p-[40px] pr-[150px]"
            placeholder="제목을 입력해 주세요"
            value={title}
            onChange={handleTitleChange}
            maxLength={100}
          />
          <p className="bodylregular absolute bottom-[40px] right-[50px] text-gray-400">
            {title.length}자/{100}자
          </p>
        </div>

        {/* 내용 */}
        <div className="relative w-full">
          <textarea
            className="bodylsemibold h-[688px] w-full rounded-lg border border-gray-500 bg-white p-[40px] pr-[150px]"
            placeholder="내용 입력해 주세요"
            value={content}
            onChange={handleContentChange}
            maxLength={3000}
          />
          <p className="bodylregular absolute bottom-[40px] right-[50px] text-gray-400">
            {content.length}자/{3000}자
          </p>
        </div>
      </div>

      {/* 등록 버튼 */}
      <div
        className="hover:contents-gray-50 active:contents-white mb-[228px] flex h-[94px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-pink-400 text-white hover:bg-primary-700 active:bg-primary-800"
        onClick={() => {}}>
        <div className="smsemibold contents-center contents-white">등록</div>
      </div>
    </div>
  )
}

export default Contents
