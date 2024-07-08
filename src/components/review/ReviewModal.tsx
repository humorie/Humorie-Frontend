import React, { useState } from 'react'
import Button from '../Button'
import { useTagsStore } from '../../store/store'

interface ReviewModalProps {
  isOpen: boolean
  onClose: () => void
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const addTag = useTagsStore((state) => state.addTag)

  const handleSubmit = () => {
    addTag({ title, content })
    setTitle('')
    setContent('')
    onClose()
  }

  return isOpen ? (
    <div className="fixed inset-0 flex h-full w-full items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="bodymdmedium flex h-[523px] w-[800px] flex-col items-center justify-between rounded-lg bg-white px-[80px] py-[70px]">
        <textarea
          className="h-[62px] w-full rounded border border-zinc-400 bg-white p-[12px]"
          placeholder="문구이름 입력"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="h-[197px] w-full rounded border border-zinc-400 bg-white p-[12px]"
          placeholder="문구이름 입력"
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

export default ReviewModal
