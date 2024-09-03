import { Link } from 'react-router-dom'
import '../../index.css'

const Recommendation = () => {
  return (
    <div className="my-[9px] flex w-full">
      <Link to="/#card-recommend">
        <button
          type="button"
          className="flex flex-row items-center space-x-[6px] bg-white px-[10px] py-[10px]">
          <div className="bodylmedium text-gray-600">앤데이 추천 전문가 보러가기</div>
          <img src="src/assets/images/icon/icon_arrow_right.svg" alt="right arrow" />
        </button>
      </Link>
    </div>
  )
}

export default Recommendation
