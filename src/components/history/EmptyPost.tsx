const EmptyPost: React.FC = () => {
  return (
    <div className="flex w-[1060px] flex-col items-center justify-center bg-white">
      <div className="mt-[73px] flex flex-col">
        <p className="text-center text-sm font-semibold text-black">최근 상담내역이 없습니다.</p>
      </div>

      <div className="mb-[381px] mt-[168px] flex h-[42px] w-[273px] flex-col items-center justify-center gap-2 rounded-md bg-pink-400">
        <div className="flex items-center justify-center gap-2">
          <p className="w-[130px] text-center text-sm font-semibold leading-normal tracking-tight text-white">
            상담 예약하러 가기
          </p>
          <div className="relative h-5 w-5" />
        </div>
      </div>
    </div>
  )
}

export default EmptyPost
