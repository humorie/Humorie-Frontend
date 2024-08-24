const ServiceHistory: React.FC = () => {
  return (
    <div className="flex h-auto w-[1440px] flex-col items-start justify-center bg-gray-50 p-[190px]">
      <div className="bodylsemibold  text-rose-400">서비스연혁</div>
      <div className="mt-[16px] text-[40px] font-bold leading-[56px] text-gray-900">
        앤데이는, <br />
        이런 길을 걸어왔어요
      </div>
      <img
        className="mt-[130px]"
        src="/src/assets/images/info/info_rending_image2.svg"
        alt="랜딩페이지 이미지"
      />
    </div>
  )
}
export default ServiceHistory
