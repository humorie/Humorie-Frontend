import React, { useState } from 'react'
import Details from './Details'
import Profile from './Profile'

const Contents: React.FC = () => {
  const [selectTab, setSelectTab] = useState('Details')

  return (
    <div className="taxt-black flex w-[1100px] flex-row items-start justify-between bg-white text-black">
      <div className="flex w-[770px] flex-col items-center justify-center">
        {/* 목록으로 */}
        <div className="bodylmedium mt-[105px] flex h-[87px] w-full flex-row items-center justify-start text-center">
          <img
            className="mr-[4px] h-[24px] w-[24px]"
            src="src/assets/images/icon/icon_arrow_left.svg"
            alt="왼쪽 화살표"
          />
          목록으로
        </div>
        <div className="w-full border-b border-gray-400" />

        {/* 태그 */}
        <div className="bodymdbold mt-[57px] flex w-full flex-row items-center justify-start gap-[12px] text-gray-700">
          <div className="flex flex-col items-center justify-center rounded bg-gray-100 px-[12px] py-[10px]">
            대인관계
          </div>
          <div className="flex flex-col items-center justify-center rounded bg-gray-100 px-[12px] py-[10px]">
            서울시 강남구
          </div>
          <div className="flex flex-col items-center justify-center rounded bg-gray-100 px-[12px] py-[10px]">
            오프라인
          </div>
        </div>

        {/* 제목 */}
        <div className="my-[40px] flex h-[87px] w-full flex-row items-center justify-between">
          <p className="mdbold text-center">직장 내 대인 관계 갈등 상담문의</p>
          <p className="bodylsemibold text-center">종료</p>
        </div>

        {/* 상담내용, 상담사 후기 */}
        <div className="flex w-full flex-row items-center justify-start">
          <div
            className={`flex h-[70px] w-1/2 flex-col items-center justify-center ${selectTab === 'Details' ? 'bg-pink-400 text-white' : 'bg-gray-200 text-gray-500'} bodylmedium cursor-pointer text-center`}
            onClick={() => setSelectTab('Details')}>
            상담내용
          </div>
          <div
            className={`flex h-[70px] w-1/2 flex-col items-center justify-center ${selectTab === 'Profile' ? 'bg-pink-400 text-white' : 'bg-gray-200 text-gray-500'} bodylmedium cursor-pointer text-center`}
            onClick={() => setSelectTab('Profile')}>
            상담사 후기
          </div>
        </div>
        {selectTab === 'Details' ? <Details /> : <Profile />}
      </div>

      {/* 오른쪽 카드 */}
      <div className="mt-[190px] flex h-[300px] w-[160px] flex-col items-start justify-evenly gap-[35px] rounded-[10px] bg-white p-5 shadow">
        <div className="flex  w-full flex-col items-start justify-center">
          <p className=" bodymdsemibold w-full text-center">고객아이디</p>
          <p className=" bodymdsemibold w-full text-center text-gray-400">HTU****</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <p className=" bodymdsemibold w-full text-center">지역</p>
          <p className=" bodymdsemibold w-full text-center text-gray-400">서울 강남구</p>
        </div>
        <div className="flex  w-full flex-col items-start justify-center">
          <p className=" bodymdsemibold w-full text-center">이용권</p>
          <p className=" bodymdsemibold w-full text-center text-gray-400">서울 강남구</p>
        </div>
      </div>
    </div>
  )
}

export default Contents