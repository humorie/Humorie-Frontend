import Button from './Button'
import { useNavigate } from 'react-router-dom'

interface DialogProps {
  title: string
  message: string
  path?: string
  onClose: () => void // 닫기 동작
}

const ConfirmDialog: React.FC<DialogProps> = ({ title, message, path, onClose }) => {
  const navigate = useNavigate()
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded=[10px] flex h-auto w-[640px] flex-col bg-white p-[40px] shadow">
        <div className="flex items-center justify-end">
          <img
            className="h-[24px] w-[24px] cursor-pointer"
            src="/src/assets/images/icon/icon_close.svg"
            alt="닫기"
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col items-center justify-start gap-[16px]">
          <p className="mdbold self-stretch text-gray-700">{title}</p>
          <p className="bodymdmedium self-stretch text-gray-700">{message}</p>
        </div>
        <div className="mt-[40px] flex items-center justify-center">
          <Button
            label="확인"
            size="Large"
            color="pink"
            onClick={() => {
              if (path) {
                navigate(path) // 경로가 있는 경우 이동
              }
              onClose() // 경로 이동 후 닫기 호출
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ConfirmDialog
