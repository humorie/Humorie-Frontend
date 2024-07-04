import '../../index.css'

const ReviewCard = () => {
  return (
    <div className="flex flex-col justify-between w-[303px] h-[207px] bg-gray-100 py-[20px] px-[18px] rounded-[15px]">
      <div className="flex flex-row items-center">
        <img
          src="/src/assets/images/counseling/star_rate.svg"
          alt="rate"
          className="w-[22px] h-[22px]"
        />
        <div className="w-[9px]" />
        <p className="bodymdmedium">5.0</p>
        <div className="w-[17px]" />
        <div className="px-[5px] text-white bodyxsbold bg-gray-500 justify-center items-center">
          Best
        </div>
      </div>
      <p className="text-gray-700 bodymdregular">
        임솔비 상담사님을 만나 문제를 해결 할 수 있었고 칭찬내용칭찬내용칭찬내용칭찬내용
        칭찬내용칭찬내용칭찬내용칭찬내용
      </p>
      <div className="flex flex-row justify-between text-gray-500">
        <p className="bodysmregular">2024.05.06</p>
        <p className="bodysmregular">엔데이 프리미엄 구매</p>
      </div>
    </div>
  )
}

export default ReviewCard
