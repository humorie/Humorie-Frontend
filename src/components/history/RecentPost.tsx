import { useNavigate } from 'react-router-dom'
import Button from '../Button'

const RecentPost: React.FC = () => {
  const navigate = useNavigate()
  const goToReview = () => {
    navigate('/review') // 리뷰페이지 이동
  }

  return (
    <div className="flex w-[1060px] flex-col items-center justify-center bg-white text-black">
      <div className="mb-[20px] mt-[50px] flex h-[30px] w-full flex-col items-start justify-start">
        <p className="smbold text-center">가장 최근에 받은 상담</p>
      </div>

      {/* 상담사 프로필 */}
      <div className="flex h-[350px] w-full flex-row items-center justify-center border border-gray-200 p-[40px]">
        <div className="flex h-full w-full basis-1/5 flex-col items-center justify-between gap-[16px]">
          <img
            className="h-[150px] w-[145px]"
            src="src/assets/images/avatar/avatar_square1.svg"
            alt="프로필 사진"
          />
          <div className="flex w-full flex-row items-center justify-center gap-[8px] text-center">
            <p className="bodylregular">상담사</p>
            <p className="bodylmedium">김정희</p>
            <img
              className="ml-[4px]"
              src="src/assets/images/icon/icon_arrow_right.svg"
              alt="오른쪽 화살표"
            />
          </div>
          <div className="flex flex-row gap-[10px]">
            <img
              className="h-[18px] w-[18px]"
              src="src/assets/images/icon/icon_star_pink.svg"
              alt="별_분홍색"
            />
            <img
              className="h-[18px] w-[18px]"
              src="src/assets/images/icon/icon_star_pink.svg"
              alt="별_분홍색"
            />
            <img
              className="h-[18px] w-[18px]"
              src="src/assets/images/icon/icon_star_pink.svg"
              alt="별_분홍색"
            />
            <img
              className="h-[18px] w-[18px]"
              src="src/assets/images/icon/icon_star_pink.svg"
              alt="별_분홍색"
            />
            <img
              className="h-[18px] w-[18px]"
              src="src/assets/images/icon/icon_star_gray.svg"
              alt="별_회색"
            />
          </div>
          <div className="bodysmmedium text-neutral-500">5.0</div>
        </div>

        {/* 상담 내용 */}
        <div className="flex h-full w-full basis-2/5 flex-col items-start justify-start gap-[12px]">
          <div className="flex h-[20px] w-[92px] items-center justify-center border border-gray-300 bg-white">
            <p className="bodyxsregular text-gray-500">무료 온라인상담</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-[9px] text-center">
            <p className="bodylmedium">2024.2.5</p>
            <p className="bodymdsemibold">상담내용</p>
          </div>
          <p className="bodylsemibold w-[300px]">
            대인관계 및 가족/임신 출산 앞으로의 방향에 대한 깊은 고민
          </p>
        </div>

        {/* 리뷰 쓰러가기 */}
        <div className="flex h-full w-full basis-2/5 flex-col items-end justify-between pt-[60px]">
          <p className="bodysmmedium w-[320px] text-neutral-500">
            대인관계 및 가족/임신 출산 앞으로의 방향에 대한 깊은 고민 에 대한 상담과 함께 미래 향후
            걱정에 대한 불안감이 다소 높음. 적절한 심리치료와 ...대인관계 및 가족/임신 출산 앞으로의
            방향에 대한 깊은 고민에 대한 상담과 함께 미래 향후
          </p>

          {/* 리뷰쓰러가기 버튼 */}
          <Button size="Large" label="리뷰 쓰러가기" onClick={goToReview} />
        </div>
      </div>
    </div>
  )
}

export default RecentPost
