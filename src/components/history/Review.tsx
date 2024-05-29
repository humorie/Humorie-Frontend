const Review: React.FC = () => {
  return (
    <div className="flex h-[1927px] w-screen items-center justify-center text-black">
      <div className="flex h-[1667px] w-[1100px] flex-col  items-center bg-neutral-400 px-[20px]">
        <div className="h-[182px]" />
        <div className="mdbold flex h-[93px]  items-center justify-center">나의 상담리뷰</div>
        <div className="mdbold flex h-[93px]  items-center justify-center">상담사</div>
        <div className="flex h-[30px] w-[330px] justify-center gap-[45px] ">
          <div className="h-[30px] w-[30px]">별</div>
          <div className="h-[30px] w-[30px]">별</div>
          <div className="h-[30px] w-[30px]">별</div>
          <div className="h-[30px] w-[30px]">별</div>
          <div className="h-[30px] w-[30px]">별</div>
        </div>
        <div className="mdbold flex h-[117px] w-[1060px] items-center justify-center border border-gray-400 bg-neutral-100 ">
          [아이콘] 사진추가 +
        </div>
        <div className="h-[135px]" />
        <div className="h-[495px] w-[1060px] bg-neutral-100">내용을 입력해 주세요</div>
        <div className="h-[165px]" />
        <button
          type="button"
          className="mdbold flex h-[72px] w-[248px] items-center justify-center bg-gray-400">
          리뷰작성
        </button>
      </div>
    </div>
  )
}

export default Review
