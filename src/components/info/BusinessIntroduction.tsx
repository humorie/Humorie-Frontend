const BusinessIntroduction: React.FC = () => {
  return (
    <div className="flex h-auto w-[1440px] flex-col items-start justify-center bg-gray-50 p-[190px]">
      <div className="bodylsemibold  text-rose-400">사업소개</div>
      <div className="mt-[16px] text-[40px] font-bold leading-[56px] text-gray-900">
        앤데이는, <br />
        이런 서비스를 하고 있어요!
      </div>
      <div className="mt-[76px] flex w-full flex-row gap-[20px]">
        <div className="h-[313px] w-[340px] bg-white shadow" />
        <div className="h-[313px] w-[340px] bg-white shadow" />
        <div className="h-[313px] w-[340px] bg-white shadow" />
      </div>
    </div>
  )
}
export default BusinessIntroduction
