import '../../index.css'
import Review from './review'

const Introduction = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col text-black space-y-[37px]">
        <div className="flex flex-row items-center justify-center w-[202px] h-[40px] space-x-[10px] bg-gray-200 rounded-[6px]">
          <img src="/src/assets/images/counseling/icon_shield.svg" alt="icon" />
          <p className="bodysmbold text-gray-500">공인 의료 서비스 제공자</p>
        </div>
        <p className="mdbold">내담자의 든든한 심리파트너가 되어드리겠습니다.</p>
      </div>
      <div className="flex flex-col bodymdmedium space-y-[14px]">
        <div className="flex flex-row space-x-[55px]">
          <p className="text-primary-800">대표업무</p>
          <p>결혼,가정,이혼부부 상담 00서비스</p>
        </div>
        <div className="flex flex-row space-x-[37px]">
          <p className="text-primary-800">상담 스타일</p>
          <p>
            상담사님의 말 상세히/본인은 어떤스타일로 진료를 하고 어떤 상담을 주로하는지
            <br />
            상담사님의 말 상세히/본인은 어떤스타일로 진료를 하고 어떤 상담을 주로하는지
            <br />
            상담사님의 말 상세히/본인은 어떤스타일로 진료를 하고 어떤 상담을 주로하는지
          </p>
        </div>
        <div className="flex flex-row space-x-[51px]">
          <p className="text-primary-800">현재 직무</p>
          <div className="flex flex-col">
            <p>00상담 브릿지</p>
            <p>00병원 4년근무</p>
          </div>
        </div>
      </div>
      <Review />
    </div>
  )
}

export default Introduction
