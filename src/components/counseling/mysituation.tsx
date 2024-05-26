import '../../index.css'

const MySituation = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[217px] h-[422px] border-[1px] space-y-[47px]">
      <p className="bodylbold">나의 상황</p>
      <div className="grid grid-cols-2 gap-[30px]">
        <div>결혼</div>
        <div>육아</div>
        <div>대인관계</div>
        <div>직장</div>
        <div>정신건강</div>
        <div>사회생활</div>
        <div>성추행</div>
        <div>신체건강</div>
        <div>마약/도박</div>
        <div>자아/성격</div>
        <div>금전/사업</div>
      </div>
    </div>
  )
}

export default MySituation
