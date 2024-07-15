const Contetns: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-black">
      <div className="mt-[100px] flex w-full flex-col items-start justify-center gap-[35px] px-[170px]">
        <div className="w-full  text-[32px] font-normal">
          앤데이 가정의달 감사 이벤트(2024.5.8~5.16)
        </div>
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-start gap-2">
            <img
              src="/src/assets/images/icon/icon_profile.svg"
              alt="프로필 사진"
              className="h-[62px] w-[62px]"
            />
            <div className=" flex  flex-col text-base font-bold">
              관리자
              <div className="flex flex-row gap-[14px]">
                <img
                  src="/src/assets/images/icon/icon_eye_filled.svg"
                  alt="조회수"
                  className="h-[24px] w-[24px]"
                />
                <div className="text-base font-medium text-gray-500">70회</div>
                <img
                  src="/src/assets/images/icon/icon_time_filled.svg"
                  alt="시간"
                  className="h-[24px] w-[24px]"
                />
                <div className="text-base font-medium text-gray-500">24-04-15-10:00</div>
              </div>
            </div>
          </div>
          <img
            src="/src/assets/images/icon/icon_list_filled.svg"
            alt="리스트"
            className="h-[27px] w-[27px]"
          />
        </div>
        <div className="w-full border border-gray-600" />
        <div className="flex h-auto w-full flex-col items-start justify-center py-[80px]">
          <img src="/src/assets/images/notice/notice_sample.svg" alt="샘플이미지" />
          <div className="text-base font-normal ">
            공지사항 내용이 들어갈 텍스트공지사항 내용이 들어갈 텍스트공지사항 내용이 들어갈 텍스트
            <br />
            공지사항 내용이 들어갈 텍스트공지사항 내용이 들어갈 텍스트공지사항 내용이 들어갈
            텍스트공지사항 내용이 들어갈 텍스트공지사항 내용이 들어갈 텍스트
          </div>
        </div>
        <div className="w-full border border-gray-600" />
        <div className="flex flex-row items-start justify-center">
          <img
            src="/src/assets/images/icon/icon_arrow_up.svg"
            alt="위 화살표"
            className="h-[24px] w-[24px]"
          />
          <div className="pl-[6px] pr-[28px] text-center text-base font-semibold text-gray-500">
            이전글
          </div>
          <div className="text-center text-base font-normal">
            함께해주셔서 감사합니다. (2024.4.15~4.19)
          </div>
        </div>
        <div className="w-full border border-gray-600" />
        <div className="flex flex-row items-start justify-center">
          <img
            src="/src/assets/images/icon/icon_arrow_down.svg"
            alt="아래 화살표"
            className="h-[24px] w-[24px]"
          />
          <div className="pl-[6px] pr-[28px] text-center text-base font-semibold text-gray-500">
            다음글
          </div>
          <div className="text-center text-base font-normal">
            4월 마음담은 앤데이 도시락(2024.4.18)
          </div>
        </div>
        <div className="mb-[135px] w-full border border-gray-600" />
      </div>
    </div>
  )
}
export default Contetns
