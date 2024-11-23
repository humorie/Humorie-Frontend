import { useNavigate } from 'react-router-dom'
import { useFetchUser } from '../../../hooks/useFetchUser'
import Button from '../../common/Button'

const EmptyPost: React.FC = () => {
  const user = useFetchUser()
  const navigate = useNavigate()

  return (
    <div className="flex w-[1060px] flex-col items-center justify-center bg-white">
      <div className="mt-[73px] flex flex-col">
        <p className="bodylsemibold text-black">최근 상담내역이 없습니다.</p>
        {/* 관리자 계정일 경우 글쓰기 버튼 활성화 */}
        {user?.accountName == 'admin' && (
          <div className="flex items-center justify-center">
            <Button
              label="글쓰기"
              size="Small"
              color="gray"
              onClick={() => navigate('/history/wirte')}
            />
          </div>
        )}
      </div>

      <button
        className="bodysmmedium mb-[381px] mt-[168px] flex h-[42px] w-[273px] flex-row items-center justify-center gap-2 rounded-md bg-pink-400 text-white"
        onClick={() => navigate('/counseling')}>
        상담 예약하러 가기
        <img src="/src/assets/images/icon/icon_arrow_right_white.svg" alt="오른쪽 흰색 화살표" />
      </button>
    </div>
  )
}

export default EmptyPost
