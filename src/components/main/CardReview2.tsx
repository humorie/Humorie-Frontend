import Button from '../Button'

const CardReview2: React.FC = () => {
  return (
    <div className="relative h-[340px] w-[260px] rounded-[10px] bg-white">
      <img
        className="absolute left-[92px] top-[172px] h-[160px] w-[160px]"
        src="src/assets/images/main/main_contents_image1.svg"
        alt="리뷰카드 이미지"
      />
      {/* 이름 */}
      <div className="absolute left-0 top-0 inline-flex w-[260px] items-center justify-start gap-2 px-6 pb-4 pt-6">
        <div className="xssemibold text-black">이름</div>
        <div className="flex items-center justify-center gap-1">
          <img
            className="h-[24px] w-[24px]"
            src="src/assets/images/icon/icon_start_pink.svg"
            alt="별"
          />
          <div className="bodylmedium text-gray-800">5.0</div>
        </div>
      </div>
      {/* 제목, 후기 */}
      <div className="absolute top-[76px] inline-flex h-[206px] w-[260px] flex-col items-start justify-start gap-2 px-6">
        <div className="bodylmedium self-stretch text-gray-700">제목</div>
        <div className="bodymdregular text-gray-700">후기</div>
      </div>
      {/* 바로가기 버튼 */}
      <div className="absolute top-[282px] inline-flex h-[58px] w-[260px] items-center justify-end gap-4 px-6">
        <Button size="XSmall" label="바로가기" onClick={() => console.log('Button Clicked')} />
      </div>
    </div>
  )
}

export default CardReview2
