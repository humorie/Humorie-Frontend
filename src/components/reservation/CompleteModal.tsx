import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import { useModalStore } from '../../store/store'

const CompleteModal: React.FC = () => {
  const { closeModal } = useModalStore()
  const navigate = useNavigate()
  return (
    <div className="fixed inset-0 flex h-full w-full items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="flex h-[280px] w-[600px] flex-col items-center justify-between rounded-lg bg-white p-[40px]">
        <div className="flex flex-col gap-[16px] self-stretch">
          <p className="mdbold text-gray-700">상담 예약이 접수되었어요</p>
          <div>
            <span className=" font-medium leading-normal tracking-tight text-gray-700">
              상담사님이 예약을 확정하는 대로
              <br />
            </span>
            <span className=" font-semibold leading-normal tracking-tight text-[#f26695]">
              회원님의 이메일
            </span>
            <span className=" font-medium leading-normal tracking-tight text-gray-700">
              로 결과를 알려드릴게요.
            </span>
          </div>
        </div>
        <Button
          label="확인"
          size="Large"
          color="pink"
          onClick={() => {
            closeModal()
            navigate('/')
          }}
        />
      </div>
    </div>
  )
}

export default CompleteModal
