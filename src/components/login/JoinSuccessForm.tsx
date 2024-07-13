import '../../index.css'

const JoinSuccess = () => {
  return (
    <div className="relative flex h-[960px] w-[1440px] w-screen items-center justify-center overflow-hidden bg-gray-50">
      <div className="absolute top-0 h-[960px] w-[1100px]">
        <div className="absolute left-1/2 top-[357px] flex h-[48px] w-[312px] -translate-x-1/2 flex-row items-center justify-center bg-primary-600">
          <button
            type="button"
            className="flex h-[48px] w-[312px] shrink-0 flex-row items-center justify-center rounded-none border-none bg-primary-600 hover:border-none hover:bg-primary-700 focus:outline-none">
            <span className="bodymdsemibold w-[268px] text-[#fff] hover:border-none hover:bg-primary-700">
              시작하기
            </span>
          </button>
        </div>
        <div className="absolute left-1/2 top-[894px] flex -translate-x-1/2 flex-row items-center justify-start gap-[16px]">
          <button
            type="button"
            className="bodyxsmedium flex h-[18px] w-[73px] shrink-0 flex-row items-center border-none bg-transparent text-gray-400 hover:text-primary-700 focus:outline-none">
            고객센터
          </button>
          <img src="src/assets/images/login/divide_login.svg" alt="" />
          <button
            type="button"
            className="bodyxsmedium flex h-[18px] w-[73px] shrink-0 flex-row items-center border-none bg-transparent text-gray-400 hover:text-primary-700 focus:outline-none">
            이용약관
          </button>
        </div>
        <div className="absolute left-[363px] top-[128px] flex flex-col items-start justify-start gap-[40px]">
          <div className="relative h-[35px] w-[375px] shrink-0">
            <img
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              width="140"
              height="128"
              src="src/assets/images/login/logo_join.svg"
              alt=""
            />
          </div>
          <div className="flex w-[375px] flex-col items-center justify-start gap-[16px]">
            <div className="mdbold text-center text-gray-700">회원가입을 축하합니다 🎉</div>
            <div className="bodysmmedium text-center">
              <span className="text-gray-400">웰컴 포인트 </span>
              <span className="text-primary-600">100,000p</span>
              <span className="text-gray-400">
                를 적립해 드렸습니다.
                <br />
                지금 바로 상담하러 가볼까요?
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinSuccess
