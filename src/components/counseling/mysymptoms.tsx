import '../../index.css'

const MySymptoms = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[217px] h-[422px] border-[1px] space-y-[47px]">
      <p className="bodylbold">나의 증상</p>
      <div className="grid grid-cols-2 gap-[30px]">
        <div>우울</div>
        <div>조현병</div>
        <div>스트레스</div>
        <div>신체화</div>
        <div>불안</div>
        <div>충동/폭력</div>
        <div>자존감</div>
        <div>화병</div>
        <div>자살</div>
      </div>
    </div>
  )
}

export default MySymptoms
