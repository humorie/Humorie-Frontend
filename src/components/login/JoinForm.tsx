import '../../index.css'

const JoinForm = () => {
  return (
    // 회원가입
    <div className="relative flex h-[2010px] w-screen items-center justify-center overflow-hidden bg-gray-50">
      <div className="absolute top-[60px] h-[1950px] w-[1100px]">
        <div className="absolute left-[110px] top-[650px] inline-flex flex-col items-start justify-start border border-gray-200 bg-gray-100">
          <div className="inline-flex h-24 w-[880px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="flex h-6 w-[115px] items-center justify-start">
              <div className="bodymdmedium text-gray-900">이메일</div>
              <div className="bodymdsemibold text-center text-red-400">*</div>
            </div>
            <div className="flex h-12 w-[312px] items-center justify-center gap-1 border border-gray-200 bg-white focus-within:border-primary-700 focus-within:bg-primary-100">
              <input
                type="email"
                className="bodysmmedium h-full w-[280px] border-none bg-white p-2 pl-[0.125rem] text-gray-900 placeholder-gray-200 caret-primary-700 outline-none focus:bg-primary-100 focus:outline-none"
                placeholder="이메일"
              />
            </div>
          </div>
          <div className="inline-flex h-24 w-[880px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="flex h-6 w-[115px] items-center justify-start">
              <div className="bodymdmedium text-gray-900">아이디</div>
              <div className="bodymdsemibold mr-16 text-center text-red-400">*</div>
            </div>
            <div className="flex h-12 w-[312px] items-center justify-center gap-1.5 border border-gray-200 bg-white focus-within:border-primary-700 focus-within:bg-primary-100">
              <input
                type="id"
                className="bodysmmedium ml-2 h-full w-[280px] rounded-none border-none bg-white p-2 text-gray-900 placeholder-gray-200 caret-primary-700 outline-none hover:border-none focus:bg-primary-100 focus:outline-none"
                placeholder="아이디"
              />
              <button
                type="button"
                className="mr-4 flex h-[32px] w-[75px] items-center justify-center gap-2 rounded-none border-none bg-primary-600 px-0 hover:border-none hover:bg-primary-700 focus:outline-none">
                <span className="bodyxssemibold w-[44px] px-0 text-center text-white hover:border-none hover:bg-primary-700">
                  중복검사
                </span>
              </button>
            </div>

            <div className="bodyxsregular text-center text-gray-500">
              6자 이상, 영어 소문자와 숫자만 허용합니다.
            </div>
          </div>
          <div className="inline-flex h-24 w-[880px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="flex h-6 w-[115px] items-center justify-start">
              <div className="bodymdmedium text-gray-900">비밀번호</div>
              <div className="bodymdsemibold text-center text-red-400">*</div>
            </div>
            <div className="flex h-12 w-[312px] items-center justify-center gap-1.5 border border-gray-200 bg-white focus-within:border-primary-700 focus-within:bg-primary-100">
              <input
                type="email"
                className="bodysmmedium h-full w-[280px] border-none bg-white p-2 pl-[0.125rem]  text-gray-900 placeholder-gray-200 caret-primary-700 outline-none focus:bg-primary-100 focus:outline-none"
                placeholder="비밀번호"
              />
            </div>
            <div className="bodyxsregular text-center text-gray-500">
              8~16자 이상, 영문자, 숫자, 특수문자를 모두 포함합니다.
            </div>
          </div>
          <div className="inline-flex h-24 w-[880px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="flex h-6 w-[115px] items-center justify-start">
              <div className="bodymdmedium text-gray-900">비밀번호 확인</div>
              <div className="bodymdsemibold text-center text-red-400">*</div>
            </div>
            <div className="flex h-12 w-[312px] items-center justify-center gap-1.5 border border-gray-200 bg-white focus-within:border-primary-700 focus-within:bg-primary-100">
              <input
                type="email"
                className="bodysmmedium h-full w-[280px] border-none bg-white p-2 pl-[0.125rem]  text-gray-900 placeholder-gray-200 caret-primary-700 outline-none focus:bg-primary-100 focus:outline-none"
                placeholder="비밀번호 확인"
              />
            </div>
          </div>
          <div className="inline-flex h-24 w-[880px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="flex h-6 w-[115px] items-center justify-start">
              <div className="bodymdmedium text-gray-900">이름</div>
              <div className="bodymdsemibold text-center text-red-400">*</div>
            </div>
            <div className="flex h-12 w-[312px] items-center justify-center gap-1.5 border border-gray-200 bg-white focus-within:border-primary-700 focus-within:bg-primary-100">
              <input
                type="email"
                className="bodysmmedium h-full w-[280px] border-none bg-white p-2 pl-[0.125rem]  text-gray-900 placeholder-gray-200 caret-primary-700 outline-none focus:bg-primary-100 focus:outline-none"
                placeholder="이름"
              />
            </div>
            <div className="bodyxsregular text-center text-gray-500">
              공개적으로 사용될 이름입니다.
            </div>
          </div>
        </div>

        {/* 약관,개인정보 수집 및 동의 */}
        <div className="absolute left-[110px] top-[150px] inline-flex flex-col items-start justify-start border border-gray-200 bg-gray-100">
          <div className="inline-flex h-20 w-[890px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="flex h-6 shrink grow basis-0 items-center justify-start">
              <div className="bodymdmedium text-gray-900">이용약관</div>
              <div className="bodymdsemibold text-red-400">*</div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <input
                type="checkbox"
                className="caret-color:primary-700 h-[20px] w-[20px] appearance-none border-2 border-gray-400
                          bg-gray-100 bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className="flex items-start justify-start">
                <div className="bodymdsemibold text-center text-base text-gray-400">동의</div>
              </div>
              <button
                type="button"
                className="flex h-6 w-[112px] items-center justify-center rounded-[10px] border-none bg-transparent focus:outline-none">
                <span className="bodymdmedium text-gray-600 hover:text-primary-700 ">
                  자세히 보기
                </span>
              </button>
            </div>
          </div>
          <div className="inline-flex h-20 w-[890px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="flex h-6 shrink grow basis-0 items-center justify-start">
              <div className="bodymdmedium text-gray-900">개인정보 처리방침</div>
              <div className="bodymdsemibold text-center text-red-400">*</div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <input
                type="checkbox"
                className="caret-color:primary-700 h-[20px] w-[20px] appearance-none border-2 border-gray-400
                          bg-gray-100 bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className="flex items-start justify-start">
                <div className="bodymdsemibold text-center text-base text-gray-400">동의</div>
              </div>
              <button
                type="button"
                className="flex h-6 w-[112px] items-center justify-center rounded-[10px] border-none bg-transparent focus:outline-none">
                <span className="bodymdmedium text-gray-600 hover:text-primary-700 ">
                  자세히 보기
                </span>
              </button>
            </div>
          </div>
          <div className="inline-flex h-20 w-[890px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="flex h-6 shrink grow basis-0 items-center justify-start">
              <div className="bodymdmedium text-gray-900">개인정보 수집 및 이용 동의</div>
              <div className="bodymdsemibold text-red-400">*</div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <input
                type="checkbox"
                className="caret-color:primary-700 h-[20px] w-[20px] appearance-none border-2 border-gray-400
                          bg-gray-100 bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className="flex items-start justify-start">
                <div className="bodymdsemibold text-center text-base text-gray-400">동의</div>
              </div>
              <button
                type="button"
                className="flex h-6 w-[112px] items-center justify-center rounded-[10px] border-none bg-transparent focus:outline-none">
                <span className="bodymdmedium text-gray-600 hover:text-primary-700 ">
                  자세히 보기
                </span>
              </button>
            </div>
          </div>
          <div className="inline-flex h-20 w-[890px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="flex h-6 shrink grow basis-0 items-center justify-start">
              <div className="bodymdmedium text-gray-900">개인정보 제 3자 제공 동의</div>
              <div className="bodymdsemibold text-red-400">*</div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <input
                type="checkbox"
                className="caret-color:primary-700 h-[20px] w-[20px] appearance-none border-2 border-gray-400
                          bg-gray-100 bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className="flex items-start justify-start">
                <div className="bodymdsemibold text-center text-base text-gray-400">동의</div>
              </div>
              <button
                type="button"
                className="flex h-6 w-[112px] items-center justify-center rounded-[10px] border-none bg-transparent focus:outline-none">
                <span className="bodymdmedium text-gray-600 hover:text-primary-700 ">
                  자세히 보기
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 마케팅 수신 동의 */}
        <div className="absolute left-[110px] top-[1310px] inline-flex h-20 w-[880px] items-center justify-start gap-2 border border-gray-200 bg-gray-100 px-12 py-6">
          <div className="flex h-6 shrink grow basis-0 items-center justify-start">
            <div className="bodymdmedium text-gray-900">이메일 수신</div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-start justify-start gap-1">
              <div className="relative h-6 w-6">
                <input
                  type="checkbox"
                  className="caret-color:primary-700 mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400 
                  bg-gray-100 bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
                />
              </div>
              <div className="flex items-start justify-start">
                <div className="bodymdsemibold text-center text-gray-400">동의</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[400px] top-[1742px] inline-flex h-12 w-[312px] items-center justify-center gap-2 bg-pink-400">
          <button
            type="button"
            className="flex h-[48px] w-[312px] shrink-0 flex-row items-center justify-center rounded-none border-none bg-primary-600 hover:border-none hover:bg-primary-700 focus:outline-none">
            <span className="bodymdsemibold w-[268px] text-center text-[#fff] hover:border-none hover:bg-primary-700 ">
              다음
            </span>
          </button>
        </div>
        <div className="absolute left-1/2 top-[1884px] flex -translate-x-1/2 flex-row items-center justify-start gap-[16px]">
          <button
            type="button"
            className="bodyxsmedium flex h-[18px] w-[73px] shrink-0 flex-row items-center justify-center border-none bg-transparent text-center text-[12px] text-gray-400 hover:text-primary-700 focus:outline-none">
            고객센터
          </button>
          <img src="src/assets/images/login/divide_login.svg" alt="" />
          <button
            type="button"
            className="bodyxsmedium flex h-[18px] w-[73px] shrink-0 flex-row items-center justify-center border-none bg-transparent text-center text-[12px] text-[#9ca3af] hover:text-primary-700 focus:outline-none">
            이용약관
          </button>
        </div>

        <div className="bodylsemibold absolute left-[394px] top-[580px] w-[312px] text-center text-gray-900">
          회원가입
        </div>
        <div className="bodylsemibold absolute left-[394px] top-[80px] w-[312px] text-center text-gray-900">
          약관 · 개인정보 수집 및 이용 동의
        </div>
        <div className="bodylsemibold absolute left-[394px] top-[1240px] w-[312px] text-center text-gray-900">
          마케팅 수신 동의
        </div>
        <div className="absolute left-[110px] top-[1430px] inline-flex w-[880px] items-center justify-start gap-8 px-12">
          <div className="flex items-center justify-start gap-2">
            <div className="bodymdmedium w-[120px] text-gray-600">이용목적</div>
            <img src="src/assets/images/login/divide_login.svg" alt="" />
          </div>
          <div className="bodymdmedium shrink grow basis-0 text-gray-400">
            이벤트 및 맞춤 서비스 제공 안내
          </div>
        </div>
      </div>
      <div className="absolute top-0 inline-flex h-[60px] w-[1440px] flex-col items-center justify-center">
        <div className="flex h-[60px] flex-col items-center justify-center self-stretch backdrop-blur-3xl">
          <div className="absolute top-0 h-[60px] w-[1440px] bg-gray-800" />
          <div className="relative h-[60px] w-[1100px]">
            <img
              className="absolute left-[535px] top-[15px] h-[30.85px] w-[30px]"
              src="src/assets/images/login/logo_signup.svg"
              alt=""
            />
          </div>
        </div>
        <div className="absolute left-0 top-0 h-[60px] w-[1440px] border-b border-gray-800" />
      </div>
    </div>
  )
}

export default JoinForm
