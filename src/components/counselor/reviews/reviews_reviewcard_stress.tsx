import '../../../index.css'

const Stresscard = () => {
  return (
    <div className="flex flex-col justify-between w-[1060px] h-[249px] bg-white py-[24px] px-[27px] rounded-[10px] drop-shadow-[0_0_7px_rgba(0,0,0,0.08)]">
      <div className="flex flex-row items-center">
        <img
          src="/src/assets/images/counseling/star_rate.svg"
          alt="rate"
          className="w-[22px] h-[22px]"
        />
        <div className="w-[12px]" />
        <p className="bodymdmedium">5.0</p>
        <div className="w-[31px]" />
        <div className="flex space-x-[21px]">
          <div className="px-[12px] py-[10px] text-white bodymdmedium bg-primary-700 rounded-[4px] flex justify-center items-center">
            스트레스
          </div>
          <div className="px-[12px] py-[10px] text-gray-700 bodymdmedium bg-gray-100 rounded-[4px] flex justify-center items-center">
            결혼
          </div>
          <div className="px-[12px] py-[10px] text-gray-700 bodymdmedium bg-gray-100 rounded-[4px] flex justify-center items-center">
            자존감
          </div>
        </div>
      </div>
      <p className="text-gray-700 bodymdregular">
        임솔비 상담사님을 만나 문제를 해결 할 수 있었고 칭찬내용칭찬내용칭찬내용칭찬내용
        칭찬내용칭찬내용칭찬내용칭찬내용
      </p>
      <div className="flex flex-row justify-between text-gray-500">
        <p className="bodysmregular">2024.05.06</p>
        <p className="bodysmregular">엔데이 프리미엄 구매</p>
      </div>
    </div>
  )
}

export default Stresscard
