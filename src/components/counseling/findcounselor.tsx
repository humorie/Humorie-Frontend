import '../../index.css'

const FindCounselor = () => {
  return (
    <div className="flex flex-row justify-center items-center w-65.625rem h-19.625rem border-0.0625rem">
      <div className="flex flex-col items-center content-center">
        <p>맞춤 전문가 찾기</p>
        <p>이름, 증상을 입력하고 나에게 맞는 전문가를 찾아보세요.</p>
        <div>
          <img src="" alt="search" />
          <input type="search" />
        </div>
      </div>
      <img src="" alt="character" />
    </div>
  )
}

export default FindCounselor
