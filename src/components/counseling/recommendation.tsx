import '../../index.css'

const Recommendation = () => {
  return (
    <div className="flex w-full my-[9px]">
      <button
        type="submit"
        className="flex flex-row items-center bg-white py-[10px] px-[10px] space-x-[6px]">
        <div className="bodylmedium text-gray-600">앤데이 추천 전문가 보러가기</div>
        <img src="src/assets/images/counseling/arrow_right.svg" alt="right arrow" />
      </button>
    </div>
  )
}

export default Recommendation
