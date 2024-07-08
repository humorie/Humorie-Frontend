import { useState } from 'react'
import '../../../index.css'
import ReviewsAll from './reviews_reviews_all'
import ReviewsStress from './reviews_reviews_stress'

const ReviewTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('전체') // 전체 탭이 기본으로 선택되도록 설정
  const tabs = ['전체', '스트레스', '우울', '불안', '트라우마']

  // 각 탭을 클릭할 때 실행되는 함수
  const handleTabClick = (tab: string) => {
    setActiveTab(tab) // 클릭된 탭을 activeTab 상태로 설정
  }

  return (
    <div className="flex flex-col items-center">
      <ul className="mb-[56px] flex items-center justify-center space-x-[117px]">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`bodylmedium cursor-pointer text-black ${activeTab === tab ? 'bodylbold border-b-[3px] border-black text-black' : ''}`}
            onClick={() => handleTabClick(tab)}>
            {tab}
          </li>
        ))}
      </ul>

      {activeTab === '전체' && <ReviewsAll />}
      {activeTab === '스트레스' && <ReviewsStress />}
      {activeTab === '우울' && <ReviewsStress />}
      {activeTab === '불안' && <ReviewsStress />}
      {activeTab === '트라우마' && <ReviewsStress />}
    </div>
  )
}

export default ReviewTabs
