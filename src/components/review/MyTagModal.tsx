import React, { useState } from 'react'
import Button from '../Button'
import { useTagsStore } from '../../store/store'
import axios from 'axios'
interface MyTagModlProps {
  isOpen: boolean
  onClose: () => void
}

const MyTagModl: React.FC<MyTagModlProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const addTag = useTagsStore((state) => state.addTag)

  const handleSubmit = async () => {
    const accessToken = localStorage.getItem('accessToken')
    console.log(accessToken)
    console.log(title, content)
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
      // 상태 업데이트 및 모달 닫기
      addTag({ title, content })
      setTitle('')
      setContent('')
      onClose()
      console.log('API Response: ', response.data)
    } catch (error) {
      console.error('Error creating tag:', error)
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
