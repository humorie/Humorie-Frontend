import React from 'react'
import { useCategoryStore } from '../../store/store'
const categories = ['학업/진로', '대인관계', '정신건강', '성격']

const Category: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useCategoryStore()

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div className="mb-[24px] mt-[32px] flex items-start justify-start gap-4">
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
