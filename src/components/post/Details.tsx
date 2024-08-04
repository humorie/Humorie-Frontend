const Details: React.FC = () => {
  return (
    <div className="mb-[640px] flex w-full flex-col items-center justify-center">
      {/* 상담 증상 */}
      <div className="mt-[60px]  flex w-full flex-col items-start justify-start gap-[10px]">
        <div className=" xsbold">상담 증상</div>
        <div className=" bodymdmedium ">
          우울증은 마음의 감기라고도 불립니다. <br />
          그만큼 누구나 우울한 기분은 느낄 수 있습니다. 하지만 장기간 지나친 우울함이 지속되면
          개인의 일상은 파괴되고 자신의 생각이나 행동, 신체 건강에까지 부정적인 영향을 끼치게
          됩니다. 초기에 적절한 치료를 받는 것이 중요합니다.
        </div>
      </div>

      {/* 상담 내용 */}
      <div className="mt-[80px] flex w-full flex-col items-start justify-start gap-[10px]">
        <div className=" xsbold ">상담 내용</div>
        <div className=" bodymdmedium ">
          우울증은 마음의 감기라고도 불립니다. <br />
          그만큼 누구나 우울한 기분은 느낄 수 있습니다. 하지만 장기간 지나친 우울함이 지속되면
          개인의 일상은 파괴되고 자신의 생각이나 행동, 신체 건강에까지 부정적인 영향을 끼치게
          됩니다. 초기에 적절한 치료를 받는 것이 중요합니다.
        </div>
      </div>

      {/* 상담 일정 */}
      {/* <div className="mb-[110px] mt-[125px] flex w-full flex-col items-start justify-start gap-[24px] rounded-lg border border-gray-100 bg-gray-50 p-[16px] text-gray-900">
        <div className="flex  w-full flex-row items-center justify-between">
          <div className="xsbold text-center">상담 일정 </div>
          <div className="bodysmmedium text-center">상담목록 1</div>
        </div>

        <div className="flex w-full flex-col items-start justify-start gap-[8px]">
          <div className="bodysmsemibold text-center text-gray-600">날짜</div>
          <div className="bodymdsemibold text-center">2024. 06. 25</div>
        </div>

        <div className="flex w-full flex-col items-start justify-start gap-[8px]">
          <div className="bodymdbold text-center">오늘</div>
          <div>
            <span className="bodymdmedium text-center">오전 11:20 </span>
            <span className="bodysmmedium text-center text-gray-400"> 30분</span>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-2 ">
          <div className="bodysmsemibold text-gray-600">장소</div>
          <div className="flex items-start justify-start gap-2 ">
            <div className="flex h-[24px] items-center justify-center gap-2 rounded-[99px] border border-pink-100 bg-pink-50 px-2">
              <div className="bodyxssemibold text- text-pink-600">온라인</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 ">
          <div className="bodysmsemibold text-gray-600">상담 내용</div>
          <div className="flex flex-col items-start justify-start gap-2 ">
            <div className="flex flex-row items-center justify-start gap-1 text-gray-700">
              <div className="bodymdsemibold text-center ">대인관계</div>
              <div className="bodymdsemibold text-center ">&#183;</div>
              <div className="bodymdsemibold text-center ">성격</div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Details
