const CardRecommend: React.FC = () => {
  return (
    <div className="inline-flex h-[432px] w-[300px] flex-col items-start justify-start rounded-lg">
      {/* 이미지 */}
      <img
        className="relative h-[300px] w-[300px]"
        src="src/assets/images/avatar/avatar_square1.svg"
        alt="아바타"
      />
      {/* 이름 */}
      <div className="flex h-[132px] flex-col items-start justify-end gap-3 self-stretch bg-white p-6">
        <div className="inline-flex items-center justify-start gap-2 self-stretch">
          <p className="smsemibold text-center  text-black">이름</p>
          <p className="bodymdmedium text-center text-gray-800">상담가</p>
        </div>
        <div className="inline-flex items-center justify-start gap-4 self-stretch">
          <div className="flex items-center justify-center gap-1">
            <img
              className="relative h-[26px] w-[26px]"
              src="src/assets/images/icon/icon_start_pink.svg"
              alt="별"
            />
            <p className="bodylmedium text-center text-gray-800">5.0</p>
            <p className="bodylmedium text-center text-gray-500">(10)</p>
          </div>
          <div className="flex h-6 shrink grow basis-0 items-center justify-start gap-1">
            <p className="bodymdsemibold text-center  text-gray-700">학업/진로</p>
            <p className="bodymdsemibold text-center  text-gray-700">&#183;</p>
            <p className="bodymdsemibold text-center  text-gray-700">성격</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardRecommend
