import '../../index.css'

const Recommendation = () => {
  return (
    <div className="flex justify-end w-full">
      <button type="submit" className="flex flex-row justify-end bg-white py-0 px-0 space-x-[8px]">
        <div className="bodysmregular text-gray-400">앤데이 추천 전문가 보러가기</div>
        <img src="src/assets/images/counseling/arrow_right.svg" alt="right arrow" />
      </button>
    </div>
  )
}

export default Recommendation
