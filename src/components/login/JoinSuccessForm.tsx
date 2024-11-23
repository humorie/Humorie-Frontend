import '../../index.css'
import Button from '../common/Button'
import { useNavigate } from 'react-router-dom'

const JoinSuccess = () => {
  const navigate = useNavigate()
  // 시작하기 버튼
  const handleStartButtonClick = () => {
    navigate('/login')
  }

  // 고객센터 버튼
  const handleCustomerServiceClick = () => {
    navigate('/customerservice')
  }

  // 이용약관 버튼
  const handlePolicyClick = () => {
    navigate('/policy')
  }
  return (
    <div className="relative flex h-[960px] w-[1440px] items-center justify-center overflow-hidden bg-gray-50">
      <div className="absolute top-0 h-[960px] w-[1100px]">
        <div className="absolute left-1/2 top-[357px] flex h-[48px] w-[312px] -translate-x-1/2 flex-row items-center justify-center ">
          <Button label="시작하기" size="XLarge" color="pink" onClick={handleStartButtonClick} />
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
              <div className="text-gray-400"> 지금 바로 다양한 상담 서비스를 경험해 보세요!</div>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-[894px] flex -translate-x-1/2 flex-row items-center justify-start gap-[16px]">
          <button
            type="button"
            className="bodysmsemibold flex h-[20px] w-[49px] shrink-0 flex-row items-center justify-center whitespace-nowrap border-none bg-transparent text-center text-gray-400 hover:text-primary-700 focus:outline-none"
            onClick={handleCustomerServiceClick}>
            고객센터
          </button>
          <img src="src/assets/images/login/divide_login.svg" alt="" />
          <button
            type="button"
            className="bodysmsemibold flex h-[20px] w-[49px] shrink-0 flex-row items-center justify-center whitespace-nowrap border-none bg-transparent text-center text-gray-400 hover:text-primary-700 focus:outline-none"
            onClick={handlePolicyClick}>
            이용약관
          </button>
        </div>
      </div>
    </div>
  )
}

export default JoinSuccess
