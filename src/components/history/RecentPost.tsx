import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import axios from 'axios'

interface ConsultDetail {
  id: number
  counselorId: number
  counselorName: string
  rating: number
  isOnline: true
  counselDate: string
  title: string
  content: string
}

const RecentPost: React.FC = () => {
  const [contents, setContents] = useState<ConsultDetail>()
  const navigate = useNavigate()
  const pinkStars = Math.floor(contents?.rating || 0) // 분홍색 별 개수
  const grayStars = 5 - pinkStars // 회색 별 개수

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken')
        const response = await axios.get('/api/consult-detail/latest', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        setContents(response.data)
        console.log('최근 상담 내역 조회 API 결과: ', response.data)
      } catch (error) {
        console.log('최근 상담 내역 조회 API 에러: ', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="flex w-[1060px] flex-col items-center justify-center bg-white text-black">
      <div className="mb-[20px] mt-[50px] flex h-[30px] w-full flex-col items-start justify-start">
        <p className="smbold text-center">가장 최근에 받은 상담</p>
      </div>

      <div className="flex h-[350px] w-full flex-row items-center justify-center border border-gray-200 p-[40px]">
        <div className="flex h-full w-full basis-1/5 flex-col items-center justify-between gap-[16px]">
          <img
            className="h-[150px] w-[145px]"
            src="src/assets/images/avatar/avatar_square1.svg"
            alt="프로필 사진"
          />
          <div className="flex w-full flex-row items-center justify-center gap-[8px] text-center">
            <p className="bodylregular">상담사</p>
            <p className="bodylmedium">{contents?.counselorName}</p>
            <img
              className="ml-[4px] h-[24px] w-[24px] cursor-pointer"
              src="src/assets/images/icon/icon_arrow_right.svg"
              alt="오른쪽 화살표"
              onClick={() => navigate(`/counseling/counselor/${contents?.counselorId}`)}
            />
          </div>
          <div className="flex flex-row gap-[10px]">
            {[...Array(pinkStars)].map((_, i) => (
              <img
                key={i}
                className="h-[18px] w-[18px]"
                src="src/assets/images/icon/icon_star_pink.svg"
                alt="별_분홍색"
              />
            ))}
            {[...Array(grayStars)].map((_, i) => (
              <img
                key={i}
                className="h-[18px] w-[18px]"
                src="src/assets/images/icon/icon_star_gray.svg"
                alt="별_회색"
              />
            ))}
          </div>
          <div className="bodysmmedium text-neutral-500">{contents?.rating.toFixed(1)}</div>
        </div>

        <div className="flex h-full w-full basis-2/5 flex-col items-start justify-start gap-[12px]">
          <div className="flex h-[20px] w-[92px] items-center justify-center border border-gray-300 bg-white">
            <p className="bodyxsregular text-gray-500">무료 온라인상담</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-[9px] text-center">
            <p className="bodylmedium">{contents?.counselDate}</p>
            <p className="bodymdsemibold">상담내용</p>
          </div>
          <p className="bodylsemibold w-[300px]">{contents?.title}</p>
        </div>
        <div className="flex h-full w-full basis-2/5 flex-col items-end justify-between pt-[60px]">
          <p className="bodysmmedium w-[320px] text-neutral-500">{contents?.content}</p>
          <Button
            size="Large"
            label="리뷰 쓰러가기"
            onClick={() => navigate(`/review/${contents?.id}`)}
          />
        </div>
      </div>
    </div>
  )
}

export default RecentPost
