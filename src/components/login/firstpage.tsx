import '../../index.css'

const Firstpage = () => {
  return (
    <div className="relative w-[1440px] w-screen flex items-center justify-center h-[960px] bg-gray-50 overflow-hidden">
      <div className="absolute top-0 w-[1100px] h-[960px] bg-gray-50">
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
        <div className="absolute -translate-x-1/2 left-1/2 top-[203px] flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[6px]">
              <div className="w-[312px] h-[48px] shrink-0 flex flex-row items-center justify-center gap-[6px] bg-[#fff] border-[1px] border-solid border-gray-200 focus-within:border-primary-700 focus-within:bg-primary-100">
                <div className="relative w-[20px] h-[20px] shrink-0 overflow-hidden">
                  <img
                    className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                    src="src/assets/images/login/person_empty.svg"
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  className="w-[254px] bodysmmedium text-gray-900 bg-white placeholder-gray-200 caret-primary-700 focus:outline-none focus:bg-primary-100"
                  placeholder="아이디"
                />
              </div>
              <div className="w-[312px] h-[48px] shrink-0 flex flex-row items-center justify-center gap-[6px] bg-[#fff] border-[1px] border-solid border-gray-200 focus-within:border-primary-700 focus-within:bg-primary-100">
                <div className="relative w-[20px] h-[20px] shrink-0 overflow-hidden">
                  <img
                    className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                    src="src/assets/images/login/lock_empty.svg"
                    alt=""
                  />
                </div>
                <input
                  type="password"
                  className="w-[254px] bodysmmedium text-gray-900 bg-white placeholder-gray-200 caret-primary-700 focus:outline-none focus:bg-primary-100"
                  placeholder="비밀번호"
                />
              </div>
            </div>
            <div className="w-[312px] flex flex-row items-start justify-start gap-[6px]">
              <div className="relative w-[20px] h-[20px] shrink-0 overflow-hidden">
                <div className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[18px] h-[18px] overflow-hidden">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="appearance-none w-[18px] h-[18px] bg-white checked:bg-[url('src/assets/images/login/check.svg')] 
                          bg-no-repeat bg-center focus:border-none caret-color: primary-700"
                  />
                </div>
              </div>
              <div className="w-[286px] bodysmmedium text-gray-400">로그인 상태 유지</div>
            </div>
            <button
              type="button"
              className="border-none w-[312px] h-[48px] shrink-0 flex flex-row items-center justify-center bg-primary-600 rounded-none hover:bg-primary-700 hover:border-none focus:outline-none">
              <span className="w-[268px] bodymdsemibold text-[#fff] text-center hover:bg-primary-700 hover:border-none">
                로그인
              </span>
            </button>
          </div>
          <div className="flex flex-row items-start justify-start gap-[40px]">
            <button
              type="button"
              className="border-none w-[71px] h-[18px] shrink-0 flex items-center bg-transparent bodyxsmedium text-gray-400 text-center hover:text-primary-700 focus:outline-none">
              회원가입
            </button>
            <div className="flex flex-row items-center justify-start gap-[10px]">
              <button
                type="button"
                className="border-none w-[84px] h-[18px] shrink-0 flex items-center bg-transparent bodyxsmedium text-gray-400 text-center hover:text-primary-700 focus:outline-none">
                아이디 찾기
              </button>
              <img src="src/assets/images/login/divide_login.svg" alt="" />
              <button
                type="button"
                className="border-none w-[95px] h-[18px] shrink-0 flex items-center bg-transparent bodyxsmedium text-gray-400 text-center hover:text-primary-700 focus:outline-none">
                비밀번호 찾기
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -translate-x-1/2 left-1/2 top-[128px] w-[312px] h-[35px]">
          <img
            className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
            src="src/assets/images/login/logo_login.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Firstpage
