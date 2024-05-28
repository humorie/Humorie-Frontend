const join = () => {
  return (
    // 회원가입
    <div className="w-[1440px] w-screen flex items-center justify-center h-[2010px] relative bg-gray-50 overflow-hidden">
      <div className="w-[1100px] h-[1950px] top-[60px] absolute">
        <div className="left-[110px] top-[650px] absolute bg-gray-100 border border-gray-200 flex-col justify-start items-start inline-flex">
          <div className="w-[880px] h-24 px-12 py-6 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
            <div className="w-[115px] h-6 justify-start items-center flex">
              <div className="text-gray-900 bodymdmedium">이메일</div>
              <div className="text-center text-red-400 bodymdsemibold">*</div>
            </div>
            <div className="w-[312px] h-12 bg-white border border-gray-200 justify-center items-center gap-1 flex focus-within:border-primary-700 focus-within:bg-primary-100">
              <input
                type="email"
                className="pl-[0.125rem] w-[280px] h-full text-gray-900 bodysmmedium leading-tight tracking-tight p-2 border-none outline-none text-gray-900 bg-white placeholder-gray-200 caret-primary-700 focus:outline-none focus:bg-primary-100"
                placeholder="이메일"
              />
            </div>
          </div>
          <div className="w-[880px] h-24 px-12 py-6 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
            <div className="w-[115px] h-6 justify-start items-center flex">
              <div className="text-gray-900 bodymdmedium">아이디</div>
              <div className="mr-16 text-center text-red-400 bodymdsemibold">*</div>
            </div>
            <div className="w-[312px] h-12 bg-white border border-gray-200 justify-center items-center gap-1.5 flex focus-within:border-primary-700 focus-within:bg-primary-100">
              <input
                type="id"
                className="ml-2 w-[280px] h-full text-gray-900 bodysmmedium leading-tight tracking-tight p-2 border-none outline-none text-gray-900 bg-white placeholder-gray-200 caret-primary-700 rounded-none hover:border-none focus:outline-none focus:bg-primary-100"
                placeholder="아이디"
              />
              <button
                type="button"
                className="border-none rounded-none px-0 mr-4 w-[75px] h-[32px] bg-primary-600 justify-center items-center gap-2 flex hover:bg-primary-700 hover:border-none focus:outline-none">
                <span className="w-[44px] px-0 text-center text-white bodyxssemibold leading-[14px] tracking-tight hover:bg-primary-700 hover:border-none">
                  중복검사
                </span>
              </button>
            </div>

            <div className="text-center text-gray-500 bodyxsregular leading-[18px] tracking-tight">
              6자 이상, 영어 소문자와 숫자만 허용합니다.
            </div>
          </div>
          <div className="w-[880px] h-24 px-12 py-6 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
            <div className="w-[115px] h-6 justify-start items-center flex">
              <div className="text-gray-900 bodymdmedium">비밀번호</div>
              <div className="text-center text-red-400 bodymdsemibold">*</div>
            </div>
            <div className="w-[312px] h-12 bg-white border border-gray-200 justify-center items-center gap-1.5 flex focus-within:border-primary-700 focus-within:bg-primary-100">
              <input
                type="email"
                className="pl-[0.125rem] w-[280px] h-full text-gray-900 bodysmmedium leading-tight tracking-tight p-2 border-none outline-none text-gray-900 bg-white placeholder-gray-200 caret-primary-700 focus:outline-none focus:bg-primary-100"
                placeholder="비밀번호"
              />
            </div>
            <div className="text-center text-gray-500 bodyxsregular leading-[18px] tracking-tight">
              8~16자 이상, 영문자, 숫자, 특수문자를 모두 포함합니다.
            </div>
          </div>
          <div className="w-[880px] h-24 px-12 py-6 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
            <div className="w-[115px] h-6 justify-start items-center flex">
              <div className="text-gray-900 bodymdmedium">비밀번호 확인</div>
              <div className="text-center text-red-400 bodymdsemibold">*</div>
            </div>
            <div className="w-[312px] h-12 bg-white border border-gray-200 justify-center items-center gap-1.5 flex focus-within:border-primary-700 focus-within:bg-primary-100">
              <input
                type="email"
                className="pl-[0.125rem] w-[280px] h-full text-gray-900 bodysmmedium leading-tight tracking-tight p-2 border-none outline-none text-gray-900 bg-white placeholder-gray-200 caret-primary-700 focus:outline-none focus:bg-primary-100"
                placeholder="비밀번호 확인"
              />
            </div>
          </div>
          <div className="w-[880px] h-24 px-12 py-6 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
            <div className="w-[115px] h-6 justify-start items-center flex">
              <div className="text-gray-900 bodymdmedium">이름</div>
              <div className="text-center text-red-400 bodymdsemibold">*</div>
            </div>
            <div className="w-[312px] h-12 bg-white border border-gray-200 justify-center items-center gap-1.5 flex focus-within:border-primary-700 focus-within:bg-primary-100">
              <input
                type="email"
                className="pl-[0.125rem] w-[280px] h-full text-gray-900 bodysmmedium leading-tight tracking-tight p-2 border-none outline-none text-gray-900 bg-white placeholder-gray-200 caret-primary-700 focus:outline-none focus:bg-primary-100"
                placeholder="이름"
              />
            </div>
            <div className="text-center text-gray-500 bodyxsregular leading-[18px] tracking-tight">
              공개적으로 사용될 이름입니다.
            </div>
          </div>
        </div>

        {/* 약관,개인정보 수집 및 동의 */}
        <div className="left-[110px] top-[150px] absolute bg-gray-100 border border-gray-200 flex-col justify-start items-start inline-flex">
          <div className="w-[890px] h-20 px-12 py-6 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-6 justify-start items-center flex">
              <div className="text-gray-900 bodymdmedium">이용약관</div>
              <div className="text-red-400 bodymdsemibold">*</div>
            </div>
            <div className="justify-end items-center gap-2 flex">
              <input
                type="checkbox"
                className="appearance-none w-[20px] h-[20px] bg-gray-100 checked:bg-[url('src/assets/images/login/check.svg')] checked:border-0
                          border-2 border-gray-400 bg-center caret-color:primary-700"
              />
              <div className="justify-start items-start flex">
                <div className="text-center text-gray-400 text-base font-semibold font-['Pretendard Variable'] leading-normal tracking-tight">
                  동의
                </div>
              </div>
              <button
                type="button"
                className="border-none w-[112px] h-6 rounded-[10px] flex justify-center items-center bg-transparent focus:outline-none">
                <span className="text-gray-600 bodymdmedium hover:text-primary-700 ">
                  자세히 보기
                </span>
              </button>
            </div>
          </div>
          <div className="w-[890px] h-20 px-12 py-6 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-6 justify-start items-center flex">
              <div className="text-gray-900 bodymdmedium">개인정보 처리방침</div>
              <div className="text-center text-red-400 bodymdsemibold">*</div>
            </div>
            <div className="justify-end items-center gap-2 flex">
              <input
                type="checkbox"
                className="appearance-none w-[20px] h-[20px] bg-gray-100 checked:bg-[url('src/assets/images/login/check.svg')] checked:border-0
                          border-2 border-gray-400 bg-center caret-color:primary-700"
              />
              <div className="justify-start items-start flex">
                <div className="text-center text-gray-400 text-base font-semibold font-['Pretendard Variable'] leading-normal tracking-tight">
                  동의
                </div>
              </div>
              <button
                type="button"
                className="border-none w-[112px] h-6 rounded-[10px] flex justify-center items-center bg-transparent focus:outline-none">
                <span className="text-gray-600 bodymdmedium hover:text-primary-700 ">
                  자세히 보기
                </span>
              </button>
            </div>
          </div>
          <div className="w-[890px] h-20 px-12 py-6 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-6 justify-start items-center flex">
              <div className="text-gray-900 bodymdmedium">개인정보 수집 및 이용 동의</div>
              <div className="text-red-400 bodymdsemibold">*</div>
            </div>
            <div className="justify-end items-center gap-2 flex">
              <input
                type="checkbox"
                className="appearance-none w-[20px] h-[20px] bg-gray-100 checked:bg-[url('src/assets/images/login/check.svg')] checked:border-0
                          border-2 border-gray-400 bg-center caret-color:primary-700"
              />
              <div className="justify-start items-start flex">
                <div className="text-center text-gray-400 text-base font-semibold font-['Pretendard Variable'] leading-normal tracking-tight">
                  동의
                </div>
              </div>
              <button
                type="button"
                className="border-none w-[112px] h-6 rounded-[10px] flex justify-center items-center bg-transparent focus:outline-none">
                <span className="text-gray-600 bodymdmedium hover:text-primary-700 ">
                  자세히 보기
                </span>
              </button>
            </div>
          </div>
          <div className="w-[890px] h-20 px-12 py-6 border-b border-gray-200 justify-start items-center gap-2 inline-flex">
            <div className="grow shrink basis-0 h-6 justify-start items-center flex">
              <div className="text-gray-900 bodymdmedium">개인정보 제 3자 제공 동의</div>
              <div className="text-red-400 bodymdsemibold">*</div>
            </div>
            <div className="justify-end items-center gap-2 flex">
              <input
                type="checkbox"
                className="appearance-none w-[20px] h-[20px] bg-gray-100 checked:bg-[url('src/assets/images/login/check.svg')] checked:border-0
                          border-2 border-gray-400 bg-center caret-color:primary-700"
              />
              <div className="justify-start items-start flex">
                <div className="text-center text-gray-400 text-base font-semibold font-['Pretendard Variable'] leading-normal tracking-tight">
                  동의
                </div>
              </div>
              <button
                type="button"
                className="border-none w-[112px] h-6 rounded-[10px] flex justify-center items-center bg-transparent focus:outline-none">
                <span className="text-gray-600 bodymdmedium hover:text-primary-700 ">
                  자세히 보기
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 마케팅 수신 동의 */}
        <div className="w-[880px] h-20 px-12 py-6 left-[110px] top-[1310px] absolute bg-gray-100 border border-gray-200 justify-start items-center gap-2 inline-flex">
          <div className="grow shrink basis-0 h-6 justify-start items-center flex">
            <div className="text-gray-900 bodymdmedium">이메일 수신</div>
          </div>
          <div className="justify-end items-center gap-4 flex">
            <div className="justify-start items-start gap-1 flex">
              <div className="w-6 h-6 relative">
                <input
                  type="checkbox"
                  className="mt-0.5 appearance-none w-[20px] h-[20px] bg-gray-100 checked:bg-[url('src/assets/images/login/check.svg')] checked:border-0 
                  border-2 border-gray-400 bg-center caret-color:primary-700"
                />
              </div>
              <div className="justify-start items-start flex">
                <div className="text-center text-gray-400 bodymdsemibold">동의</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[312px] h-12 left-[400px] top-[1742px] absolute bg-pink-400 justify-center items-center gap-2 inline-flex">
          <button
            type="button"
            className="border-none w-[312px] h-[48px] shrink-0 flex flex-row items-center justify-center bg-primary-600 rounded-none hover:bg-primary-700 hover:border-none focus:outline-none">
            <span className="w-[268px] text-[16px] leading-[24px] tracking-[0em] bodymdsemibold text-[#fff] text-center hover:bg-primary-700 hover:border-none ">
              다음
            </span>
          </button>
        </div>
        <div className="absolute -translate-x-1/2 left-1/2 top-[1884px] flex flex-row items-center justify-start gap-[16px]">
          <button
            type="button"
            className="border-none bg-transparent w-[73px] h-[18px] shrink-0 flex flex-row items-center justify-center text-[12px] leading-[18px] tracking-[0em] bodyxsmedium text-gray-400 text-center hover:text-primary-700 focus:outline-none">
            고객센터
          </button>
          <img src="src/assets/images/login/divide_login.svg" alt="" />
          <button
            type="button"
            className="border-none bg-transparent w-[73px] h-[18px] shrink-0 flex flex-row items-center justify-center text-[12px] leading-[18px] tracking-[0em] bodyxsmedium text-[#9ca3af] text-center hover:text-primary-700 focus:outline-none">
            이용약관
          </button>
        </div>

        <div className="w-[312px] left-[394px] top-[580px] absolute text-center text-gray-900 bodylsemibold">
          회원가입
        </div>
        <div className="w-[312px] left-[394px] top-[80px] absolute text-center text-gray-900 bodylsemibold">
          약관 · 개인정보 수집 및 이용 동의
        </div>
        <div className="w-[312px] left-[394px] top-[1240px] absolute text-center text-gray-900 bodylsemibold">
          마케팅 수신 동의
        </div>
        <div className="w-[880px] px-12 left-[110px] top-[1430px] absolute justify-start items-center gap-8 inline-flex">
          <div className="justify-start items-center gap-2 flex">
            <div className="w-[120px] text-gray-600 bodymdmedium">이용목적</div>
            <img src="src/assets/images/login/divide_login.svg" alt="" />
          </div>
          <div className="grow shrink basis-0 text-gray-400 bodymdmedium">
            이벤트 및 맞춤 서비스 제공 안내
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[60px] top-0 absolute flex-col justify-center items-center inline-flex">
        <div className="self-stretch h-[60px] backdrop-blur-3xl flex-col justify-center items-center flex">
          <div className="w-[1440px] h-[60px] top-0 absolute bg-gray-800" />
          <div className="w-[1100px] h-[60px] relative">
            <img
              className="w-[30px] h-[30.85px] left-[535px] top-[15px] absolute"
              src="src/assets/images/login/logo_signup.svg"
              alt=""
            />
          </div>
        </div>
        <div className="w-[1440px] h-[60px] left-0 top-0 absolute border-b border-gray-800" />
      </div>
    </div>
  )
}

export default join
