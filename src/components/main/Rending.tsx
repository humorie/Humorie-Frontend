const Rending: React.FC = () => {
  const stickers = [
    { src: 'src/assets/images/sticker/sticker6_3.svg', alt: '스티커6-3' },
    { src: 'src/assets/images/sticker/sticker11_2.svg', alt: '스티커11-2' },
    { src: 'src/assets/images/sticker/sticker4_1.svg', alt: '스티커4-1' },
    { src: 'src/assets/images/sticker/sticker5_5.svg', alt: '스티커5-5' },
    { src: 'src/assets/images/sticker/sticker7_4.svg', alt: '스티커7-4' },
  ]

  const categories = [
    { src: 'src/assets/images/main/main_rending_image1.svg', alt: '개인상담', label: '개인상담' },
    { src: 'src/assets/images/main/main_rending_image2.svg', alt: '집단상담', label: '집단상담' },
    { src: 'src/assets/images/main/main_rending_image3.svg', alt: '심리검사', label: '심리검사' },
    { src: 'src/assets/images/main/main_rending_image4.svg', alt: 'AI매칭', label: 'AI매칭' },
    { src: 'src/assets/images/main/main_rending_image5.svg', alt: '커뮤니티', label: '커뮤니티' },
    { src: 'src/assets/images/main/main_rending_image6.svg', alt: '상담기록', label: '상담기록' },
    { src: 'src/assets/images/main/main_rending_image7.svg', alt: '기업제휴', label: '기업제휴' },
  ]

  return (
    <div className="relative  flex h-[752px] w-[1440px] items-center justify-center bg-white">
      {/* 헤드라인 */}
      <div className="absolute left-[320px] top-[188px] h-[112px] w-[800px]">
        <div className="absolute left-0 top-[16px] inline-flex h-20 w-[800px] items-start justify-start gap-[100px]">
          {stickers.map((image, index) => (
            <img key={index} className="h-20 w-20 opacity-50" src={image.src} alt={image.alt} />
          ))}
        </div>
        <p className="mdPlusBold absolute left-[139px] top-0 text-center text-pink-400">
          당신의 더 나은 내일을 응원합니다
          <br />
          앤데이 심리상담
        </p>
      </div>

      {/* 검색창 */}
      <div className="absolute left-[190px] top-[452px] inline-flex h-[68px] flex-col items-start justify-start gap-2.5 bg-gray-50 px-6 py-[19px]">
        <div className="inline-flex items-center justify-start gap-9">
          <img
            className="relative h-6 w-6  "
            src="src/assets/images/icon/icon_search_pink.svg"
            alt="icon_search"
          />
          <input
            type="text"
            className="bodylregular w-[952px] bg-transparent text-gray-500 focus:outline-none"
            placeholder="이름, 키워드로 전문가를 검색해보세요!"
          />
        </div>
      </div>

      {/* 카테고리 */}
      <div className="bodymdsemibold absolute left-[190px] top-[576px] inline-flex w-[1060px] items-start justify-between px-6 text-gray-700 ">
        {categories.map((category, index) => (
          <div key={index} className="inline-flex flex-col items-center justify-start gap-4">
            <img className="relative h-[56px] w-[56px]" src={category.src} alt={category.alt} />
            <p>{category.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rending
