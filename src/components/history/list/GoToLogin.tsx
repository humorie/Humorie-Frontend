import { useNavigate } from 'react-router-dom'
import Button from '../../common/Button'

const GoToLogin: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="flex h-[700px] w-full flex-col items-center justify-center px-[170px] pb-[370px] pt-[128px]">
      <div className="mdbold mb-[16px] flex flex-row items-center justify-center gap-2 self-stretch text-gray-700">
        <div>🗒️</div>
        나의 상담내역
      </div>
      <div className="bodysmmedium mb-[50px] flex flex-col items-center justify-center text-gray-400">
        <p>엔데이에서 진행한 상댐내역을 모아볼 수 있어요.</p>
        <p>로그인 후 이용 가능해요.</p>
      </div>
      <Button
        label="로그인하러 가기"
        color="pink"
        size="XLarge"
        onClick={() => navigate('/login')}
      />
    </div>
  )
}

export default GoToLogin
