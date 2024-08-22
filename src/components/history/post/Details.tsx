import React from 'react'
import { PostContentsTypes } from '../../Types'

interface PostDetailPageTypes {
  contents: PostContentsTypes
}

const Details: React.FC<PostDetailPageTypes> = ({ contents }) => {
  const renderSection = (title: string, content: string) => (
    <div className="mt-[60px] flex w-full flex-col items-start justify-start gap-[10px]">
      <div className="xsbold">{title}</div>
      <div className="bodymdmedium">
        <div>{content}</div>
      </div>
    </div>
  )

  return (
    <div className="mb-[640px] flex w-full flex-col items-center justify-center">
      {renderSection('상담 증상', contents.consultDetail.symptom)}
      {renderSection('상담 내용', contents.consultDetail.content)}
    </div>
  )
}

export default Details
