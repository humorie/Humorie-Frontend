const DataContents = () => {
  return (
    <div className="bodymdbold relative flex w-full flex-col items-start justify-start gap-[40px] text-gray-900">
      <div className="bodysmmedium relative self-stretch text-gray-600">{`본 동의서는 심리상담서비스 앤데이(&DAY)의 상담서비스를 제공받는 데 필요한 것으로, 개인정보보호법(개정 2014. 3. 24. 법률 제12504호)에 의거하여 개인정보 수집・이용함에 있어 아래와 같이 동의를 받고 있습니다.`}</div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="relative self-stretch">
          <ol className="font-inherit m-0 text-inherit">
            <li>1. 개인정보 수집・이용목적</li>
          </ol>
        </b>
        <div className="relative self-stretch text-sm font-medium leading-[20px] text-gray-600">
          <p className="m-0">- 심리상담 및 지원서비스를 위한 기본정보확인을 위해 사용됩니다.</p>
          <p className="m-0">- 재상담이나 지원받는 경우 사용될 수 있습니다.</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="relative self-stretch ">
          <ol className="font-inherit m-0 text-inherit">
            <li>2. 수집항목</li>
          </ol>
        </b>
        <div className="relative self-stretch text-sm font-medium leading-[20px] text-gray-600">
          <p className="m-0">
            - 이름, 성별, 생년월일, 본인 및 보호자 연락처, 주소, 현재 상태, 의뢰 사유, 가족관계 및
            형태,
          </p>
          <p className="m-0">보장 구분, 상담 및 치료 경험</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="relative self-stretch ">
          <ol className="font-inherit m-0 text-inherit">
            <li>3. 개인정보 보유 및 이용 기간</li>
          </ol>
        </b>
        <div className="relative self-stretch text-sm font-medium leading-[20px] text-gray-600">
          <p className="m-0">
            - 보유 기간 5년 (단, 상담 당시 법적 소송과 관련되어 있는 경우 최장 10년간 보관 가능)
          </p>
          <p className="m-0">- 보유 기간이 지나면 개인정보를 모두 파기합니다.</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="relative self-stretch">
          <ol className="font-inherit m-0 ">
            <li>4. 개인정보 제3자 제공</li>
          </ol>
        </b>
        <div className="relative self-stretch text-sm font-medium leading-[20px] text-gray-600">
          - 청소년의 개인정보는 정보제공자의 사전 동의 없이 제3자에게 제공하지 않습니다. 단, 필요한
          경우 수집된 개인정보를 청소년상담복지지원법 시행령 제4조의 필수연계기관(정신건강증진센터,
          자살 예방센터, 경찰서, 아동보호전문기관, 도박중독예방센터, 건강가정지원센터, 해바라기센터,
          등)에 제공할 수 있습니다.
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] self-stretch">
        <b className="relative self-stretch">
          <ol className="font-inherit m-0 ">
            <li>5. 개인정보 수집 동의 또는 거부권리</li>
          </ol>
        </b>
        <div className="relative self-stretch text-sm font-medium leading-[20px] text-gray-600">
          - 개인정보 수집거부의 경우 사례관리가 필요한 개인상담, 심리검사, 집단상담 및 센터에서
          제공하는 복지지원 제공이 어렵습니다. 그러나 익명성이 보장되는 전화상담이나 사이버상담은
          이용이 가능합니다.
        </div>
      </div>
      <div className="relative self-stretch text-sm font-medium leading-[20px] text-gray-600">
        본인은 위 내용을 충분히 이해했으며 위 내용에 동의합니다.
      </div>
    </div>
  )
}

export default DataContents
