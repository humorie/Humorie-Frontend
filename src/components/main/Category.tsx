import React, { useState } from 'react'

const categories = ['학업/진로', '대인관계', '정신건강', '성격']

const Category: React.FC = () => {
  // 초기 상태를 '학업/진로'로 설정
  const [selectedCategory, setSelectedCategory] = useState<string>('학업/진로')

  // 카테고리 클릭 핸들러
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div className="absolute left-[190px] top-[160px] inline-flex items-start justify-start gap-4">
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`flex cursor-pointer items-start justify-start gap-2 rounded px-[16px] py-[8px] ${
            selectedCategory === category ? 'bg-pink-50 text-pink-600' : 'bg-gray-100 text-gray-500'
          }`}>
          <div className="bodymdsemibold">{category}</div>
        </div>
      ))}
    </div>
  )
}

export default Category
