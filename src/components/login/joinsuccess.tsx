const joinsuccess = () => {
  return (
    <div className="relative w-screen flex items-center justify-center w-[1440px] h-[960px] bg-gray-50 overflow-hidden">
      <div className="absolute top-0 w-[1100px] h-[960px]">
        <div className="absolute -translate-x-1/2 left-1/2 top-[357px] w-[312px] h-[48px] flex flex-row items-center justify-center bg-primary-600">
          <button
            type="button"
            className="border-none w-[312px] h-[48px] shrink-0 flex flex-row items-center justify-center bg-primary-600 rounded-none hover:bg-primary-700 hover:border-none focus:outline-none">
            <span className="w-[268px] bodymdsemibold text-[#fff] hover:bg-primary-700 hover:border-none">
              시작하기
            </span>
          </button>
        </div>
        <div className="absolute -translate-x-1/2 left-1/2 top-[894px] flex flex-row items-center justify-start gap-[16px]">
          <button
            type="button"
            className="border-none bg-transparent w-[73px] h-[18px] shrink-0 flex flex-row items-center bodyxsmedium text-gray-400 hover:text-primary-700 focus:outline-none">
            고객센터
          </button>
          <img src="src/assets/images/login/divide_login.svg" alt="" />
          <button
            type="button"
            className="border-none bg-transparent w-[73px] h-[18px] shrink-0 flex flex-row items-center bodyxsmedium text-gray-400 hover:text-primary-700 focus:outline-none">
            이용약관
          </button>
        </div>
        <div className="absolute left-[363px] top-[128px] flex flex-col items-start justify-start gap-[40px]">
          <div className="relative w-[375px] h-[35px] shrink-0">
            <img
              className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
              width="140"
              height="128"
              src="src/assets/images/login/logo_join.svg"
              alt=""
            />
          </div>
          <div className="w-[375px] flex flex-col items-center justify-start gap-[16px]">
            <div className="mdbold text-gray-700 text-center">회원가입을 축하합니다 🎉</div>
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

export default joinsuccess
