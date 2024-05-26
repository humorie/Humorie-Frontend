import '../../index.css'

const FindCounselor = () => {
  return (
    <div className="flex flex-row justify-between items-center w-[1050px] h-[314px] border-[1px] border-gray-500 bg-gray-200 space-x-[110px] mt-[119px]">
      <div className="flex flex-col content-center space-y-[30px]">
        <p className="mdbold">맞춤 전문가 찾기</p>
        <p className="xsmedium">이름, 증상을 입력하고 나에게 맞는 전문가를 찾아보세요.</p>
        <div className="flex flex-row bg-gray-300 w-[461px] h-[69px]">
          <img src="src/assets/images/counseling/search.svg" alt="search" className="m-[20px]" />
          <input
            className="placeholder:text-gray-400 w-[368px] bg-gray-300"
            placeholder="검색어로 전문가 찾기"
            type="search"
          />
        </div>
      </div>
      <img src="" alt="character" />
    </div>
  )
}

export default FindCounselor
