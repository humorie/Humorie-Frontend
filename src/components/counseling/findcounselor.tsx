import '../../index.css'
import Recommendation from './recommendation'

const FindCounselor = () => {
  return (
    <div className="flex justify-center items-center w-screen h-[380px] bg-primary-50 mt-[119px]">
      <div className="flex flex-row justify-between w-[1006px]">
        <div className="flex flex-col justify-center content-center space-y-[9px]">
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
