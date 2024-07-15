import '../../index.css'
import Recommendation from './recommendation'

const FindCounselor = () => {
  return (
    <div className="flex h-[380px] w-full items-center justify-center bg-primary-50">
      <div className="flex w-[1006px] flex-row justify-between">
        <div className="flex flex-col content-center justify-center space-y-[9px]">
          <p className="lgbold text-black">상담하기</p>
          <p className="xsmedium text-gray-700">나의 상황과 증상에 맞는 전문가를 찾아보세요.</p>
          <Recommendation />
        </div>
        <img src="src/assets/images/counseling/image_landingpage.svg" alt="character" />
      </div>
    </div>
  )
}

export default FindCounselor
