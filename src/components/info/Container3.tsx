const Container3: React.FC = () => {
  return (
    <div className="flex h-auto w-[1440px] flex-col items-start justify-center bg-gray-50 px-[190px] pt-[180px]">
      <div className="bodylsemibold mb-[16px] text-rose-400">사업소개</div>
      <div className="lgbold mb-[50px] text-gray-900">
        앤데이는, <br />
        이런 서비스를 하고 있어요!
      </div>
      <div className="mt-[50px] flex w-full flex-row items-center justify-center gap-[16px]">
        <img className="h-[345px] w-[340px]" src="/src/assets/images/info/info_image3.svg" />
        <img className="h-[345px] w-[340px]" src="/src/assets/images/info/info_image4.svg" />
        <img className="h-[345px] w-[340px]" src="/src/assets/images/info/info_image5.svg" />
      </div>
    </div>
  )
}
export default Container3
