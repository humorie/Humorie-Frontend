const Container1: React.FC = () => {
  return (
    <div className=" mt-[60px] flex h-[707px] w-[1440px] flex-col  bg-[url('/src/assets/images/info/info_image1.svg')] text-white">
      <div className="flex w-auto flex-col gap-[27px] pl-[170px] pt-[120px]">
        <div className="lgbold">앤데이 심리상담</div>
        <div className="text-2xl font-normal ">
          '나'와 친해지는 시간!
          <br /> 심리상담과 자기이해로 더욱 가까워지는 나와 내 마음
          <br />
          <br /> 현재 나의 마음을 알아보고
          <br /> 다양한 분야의 상담심리전문가와 이야기를 나눠보며
          <br /> 내가 어떤 사람인지 명확히 알게되는 시간
          <br />
          <br />
          <div className="text-[28px] font-semibold">
            어제보다 나은 오늘, 더욱 ‘나’ 다워지는 내일{' '}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Container1
