import { useState } from 'react'
import Button from '../Button'
import axios from 'axios'

interface TagType {
  tagId: number
  tagName: string
  tagContent: string
}

interface MyTagModlProps {
  isOpen: boolean
  onClose: () => void
  onTagAdded: (tag: TagType) => void
}

const MyTagModl: React.FC<MyTagModlProps> = ({ isOpen, onClose, onTagAdded }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async () => {
    const accessToken = localStorage.getItem('accessToken')
    try {
      const response = await axios.post(
        '/api/review/tag',
        {
          tagName: title,
          tagContent: content,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      const newTag = { tagId: response.data.result.tagId, tagName: title, tagContent: content }
      onTagAdded(newTag) // 태그 추가 후 콜백 함수 호출
      setTitle('') // 태그 제목 초기화
      setContent('') // 태그 내용 초기화
      onClose() // 모달 닫기
      console.log('태그 등록 API 결과: ', response.data)
    } catch (error) {
      alert('마이태그는 최대 5개입니다!')
      console.log('태그 등록 API 에러: ', error)
    }
  }

  return isOpen ? (
    <div className="fixed inset-0 flex h-full w-full items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bodymdmedium flex h-[523px] w-[800px] flex-col items-center justify-between rounded-lg bg-white px-[80px] py-[70px]">
        <input
          className="h-[62px] w-full rounded border border-zinc-200 bg-white pl-[30px]"
          placeholder="마이태그명 입력"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="h-[197px] w-full rounded border border-zinc-200 bg-white p-[30px]"
          placeholder="문구내용 입력"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div className="flex w-full flex-row items-center justify-between">
          <Button label="취소" size="XLarge" color="gray" onClick={onClose} />
          <Button label="등록하기" size="XLarge" color="pink" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  ) : null
}

export default MyTagModl
