import React from 'react'

interface DetailsProps {
  contents: {
    symptomDetail: string
    content: string
  }
}

const Details: React.FC<DetailsProps> = ({ contents }) => {
  const renderSection = (title: string, content: string) => (
    <div className="mt-[60px] flex w-full flex-col items-start justify-start gap-[10px]">
      <div className="xsbold">{title}</div>
      <div className="bodymdmedium">{content}</div>
    </div>
  )

  return (
    <div className="mb-[640px] flex w-full flex-col items-center justify-center">
      {renderSection('상담 증상', contents.symptomDetail)}
      {renderSection('상담 내용', contents.content)}
    </div>
  )
}

export default Details
