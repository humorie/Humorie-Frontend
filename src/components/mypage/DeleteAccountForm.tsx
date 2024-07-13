import Button from '../Button'

const DeleteAccountForm: React.FC = () => {
  return (
    <div className="flex h-[960px] w-screen flex-col items-center bg-gray-50">
      <img className="shrink-0 self-stretch" src="src/assets/images/login/logo_long.svg" alt="" />
      <div className="absolute top-[60px] h-[900px] w-[1100px] items-center justify-center">
        <div className="bodylsemibold absolute left-[394px] top-[80px] h-[30px] w-[312px]  text-center text-gray-900">
          김데이님, 떠나신다니 아쉬워요.
        </div>
        <div className="absolute left-[110px] top-[150px] items-center justify-start border-[1px] border-gray-200 bg-gray-100 text-left">
          <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-solid border-gray-200 px-12 py-6">
            <div className="flex w-[120px] flex-row items-center justify-start">
              <div className="bodymdmedium relative text-gray-900">비밀번호</div>
              <div className="text-status-4 bodymdsemibold relative">*</div>
            </div>
            <div className="box-border flex h-12 w-[312px] flex-row items-center justify-center border-[1px] border-solid border-gray-200 bg-white text-sm">
              <input
                type="password"
                className="bodysmmedium h-full w-[280px] border-none bg-white p-2 pl-[0.125rem] text-gray-900 text-gray-900 placeholder-gray-200 outline-none focus:outline-none"
                placeholder="비밀번호"
              />
            </div>
            <div className="bodyxsregular relative text-gray-500">
              <p>계정은 즉시 탈퇴 처리되나,</p>
              <p>작성하신 상담 후기가 자동으로 삭제되지는 않습니다.</p>
            </div>
          </div>
        </div>
        <div className="absolute left-[394px] top-[804px]">
          <Button label="회원 탈퇴하기" size="XLarge" color="pink" />
        </div>
      </div>
    </div>
  )
}

export default DeleteAccountForm
