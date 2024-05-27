import '../../index.css'

const ReviewCard = () => {
  return (
    <div className="flex flex-col justify-between w-[303px] h-[207px] bg-gray-300 py-[16px] px-[18px]">
      <div className="flex flex-row space-x-[22px]">
        <p className="bodymdmedium">5.0</p>
        <div className="px-[8px] text-white bodymdmedium bg-gray-500 justify-center items-center">
          Best
        </div>
      </div>
      <p className="text-gray-500 bodymdregular">
        임솔비 상담사님을 만나 문제를 해결 할 수 있었고 칭찬내용칭찬내용칭찬내용칭찬내용
        칭찬내용칭찬내용칭찬내용칭찬내용
      </p>
      <div className="flex flex-row justify-between text-gray-500">
        <p className="bodymdregular">2024.05.06</p>
        <p className="bodymdregular">엔데이 프리미엄 구매</p>
      </div>
    </div>
  )
}

export default ReviewCard
