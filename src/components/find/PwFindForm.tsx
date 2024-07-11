import Button from '../Button'

const PwFindForm: React.FC = () => {
  return (
    <div className="flex h-[960px] w-screen flex-col items-center bg-gray-50">
      <img className="shrink-0 self-stretch" src="src/assets/images/login/logo_long.svg" alt="" />
      <div className="absolute top-[60px] h-[900px] w-[1100px] items-center justify-center">
        <div className="bodylsemibold absolute left-[394px] top-[80px] h-[30px] w-[312px]  text-center text-gray-900">
          비밀번호 찾기
        </div>
        <div className="absolute left-[110px] top-[150px] items-center justify-start border-[1px] border-gray-200 bg-gray-100 text-left">
          <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-solid border-gray-200 px-12 py-6">
            <div className="flex w-[120px] flex-row items-center justify-start">
              <div className="bodymdmedium relative text-gray-900">이메일</div>
              <div className="text-status-4 bodymdsemibold relative">*</div>
            </div>
            <div className="box-border flex h-12 w-[312px] flex-row items-center justify-center border-[1px] border-solid border-gray-200 bg-white text-sm">
              <input
                type="email"
                className="bodysmmedium h-full w-[280px] border-none bg-white p-2 pl-[0.125rem] text-gray-900 text-gray-900 placeholder-gray-200 outline-none focus:outline-none"
                placeholder="이메일"
              />
            </div>
            <div className="relative text-center text-xs leading-[18px] text-gray-500">
              가입에 사용한 이메일을 입력해주세요.
            </div>
          </div>
        </div>
        <div className="absolute left-[394px] top-[746px]">
          <Button label="임시 비밀번호 발송" size="XLarge" color="pink" />
        </div>

        <div className="absolute left-[466px] top-[834px] h-[18px] w-[168px] text-sm text-gray-400">
          <div className="absolute left-[0px] top-[0px] flex h-[18px] w-[68px] flex-row items-center justify-center rounded-lg">
            <button
              type="button"
              className="bodysmsemibold flex h-[18px] w-[68px] flex-row items-center justify-center whitespace-nowrap border-none bg-transparent text-center text-[12px] text-gray-400 hover:text-primary-700 focus:outline-none">
              로그인
            </button>
          </div>
          <img
            className="absolute left-[84px] top-[4px] "
            alt=""
            src="src/assets/images/login/divide_login.svg"
          />
          <div className="absolute left-[100px] top-[0px] flex h-[18px] w-[68px] flex-row items-center justify-center rounded-lg">
            <button
              type="button"
              className="bodysmsemibold flex h-[18px] w-[68px] flex-row items-center justify-center whitespace-nowrap border-none bg-transparent text-center text-[12px] text-gray-400 hover:text-primary-700 focus:outline-none">
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PwFindForm
