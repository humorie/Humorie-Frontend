import '../../index.css'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  // 회원가입 버튼
  const handleJoinButtonClick = () => {
    navigate('/join')
  }

  // 아이디 찾기 버튼

  const handleFindIdButtonClick = () => {
    navigate('/findid')
  }

  // 비밀번호 찾기 버튼
  const handleFindPwButtonClick = () => {
    navigate('/findpw')
  }

  return (
    <div className="relative flex h-[960px] w-screen items-center justify-center bg-gray-50">
      <div className="absolute top-0 h-[960px] w-[1100px] bg-gray-50">
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
        <div className="absolute left-1/2 top-[203px] flex -translate-x-1/2 flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[6px]">
              <div className="flex h-[48px] w-[312px] shrink-0 flex-row items-center justify-center gap-[6px] border-[1px] border-solid border-gray-200 bg-[#fff] focus-within:border-primary-700 focus-within:bg-primary-100">
                <div className="relative h-[20px] w-[20px] shrink-0 overflow-hidden">
                  <img
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="src/assets/images/login/person_empty.svg"
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  className="bodysmmedium w-[254px] bg-white text-gray-900 placeholder-gray-200 caret-primary-700 focus:bg-primary-100 focus:outline-none"
                  placeholder="아이디"
                />
              </div>
              <div className="flex h-[48px] w-[312px] shrink-0 flex-row items-center justify-center gap-[6px] border-[1px] border-solid border-gray-200 bg-[#fff] focus-within:border-primary-700 focus-within:bg-primary-100">
                <div className="relative h-[20px] w-[20px] shrink-0 overflow-hidden">
                  <img
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="src/assets/images/login/lock_empty.svg"
                    alt=""
                  />
                </div>
                <input
                  type="password"
                  className="bodysmmedium w-[254px] bg-white text-gray-900 placeholder-gray-200 caret-primary-700 focus:bg-primary-100 focus:outline-none"
                  placeholder="비밀번호"
                />
              </div>
            </div>
            <div className="flex w-[312px] flex-row items-start justify-start gap-[6px]">
              <div className="relative h-[20px] w-[20px] shrink-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-[18px] w-[18px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="caret-color: primary-700 h-[18px] w-[18px] appearance-none 
                          bg-white bg-center bg-no-repeat checked:bg-[url('src/assets/images/login/check.svg')] focus:border-none"
                  />
                </div>
              </div>
              <div className="bodysmmedium w-[286px] text-gray-400">로그인 상태 유지</div>
            </div>
            <button
              type="button"
              className="flex h-[48px] w-[312px] shrink-0 flex-row items-center justify-center rounded-none border-none bg-primary-600 hover:border-none hover:bg-primary-700 focus:outline-none">
              <span className="bodymdsemibold w-[268px] text-center text-[#fff] hover:border-none hover:bg-primary-700">
                로그인
              </span>
            </button>
          </div>
          <div className="flex flex-row items-start justify-start gap-[40px]">
            <button
              type="button"
              className="bodyxsmedium flex h-[18px] w-[71px] shrink-0 items-center border-none bg-transparent text-center text-gray-400 hover:text-primary-700 focus:outline-none"
              onClick={handleJoinButtonClick}>
              회원가입
            </button>

            <div className="flex flex-row items-center justify-start gap-[10px]">
              <button
                type="button"
                className="bodyxsmedium flex h-[18px] w-[84px] shrink-0 items-center border-none bg-transparent text-center text-gray-400 hover:text-primary-700 focus:outline-none"
                onClick={handleFindIdButtonClick}>
                아이디 찾기
              </button>
              <img src="src/assets/images/login/divide_login.svg" alt="" />
              <button
                type="button"
                className="bodyxsmedium flex h-[18px] w-[95px] shrink-0 items-center border-none bg-transparent text-center text-gray-400 hover:text-primary-700 focus:outline-none"
                onClick={handleFindPwButtonClick}>
                비밀번호 찾기
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-[128px] h-[35px] w-[312px] -translate-x-1/2">
          <img
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            src="src/assets/images/login/logo_login.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default LoginForm
