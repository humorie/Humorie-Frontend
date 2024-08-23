import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CounselorTypes, PostContentsTypes } from '../../Types'
import axios from 'axios'

interface PostProfilePageTypes {
  id: string
  contents: PostContentsTypes
}

const Profile: React.FC<PostProfilePageTypes> = ({ id, contents }) => {
  const [counselor, setCounselor] = useState<CounselorTypes>()
  const navigate = useNavigate()

  // 특정 상담사의 상담내역 API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/counselor/${id}`)
        console.log('상담사 프로필 조회 API: ', response.data.result)
        setCounselor(response.data.result)
      } catch (error) {
        console.log('API 요청 에러: ', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="mb-[300px] mt-[60px] flex h-[500px] w-full flex-row items-center justify-between gap-[60px]">
      {/* 상담사 카드 */}
      <div className="flex h-[451px] flex-col items-center justify-between border border-gray-300">
        <img
          className="h-[256px] w-[215px]"
          src="/src/assets/images/avatar/avatar_square1.svg"
          alt="상담사 프로필 사진"
        />
        <div className=" flex flex-col items-center justify-start gap-[40px] p-[35px]">
          <div className="flex h-[26px] w-[95px] items-center justify-center gap-2.5 rounded-[5px] bg-gray-100">
            <div className="bodysmmedium text-center text-gray-400">평점 {counselor?.rating}</div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[15px]">
            <div className="bodylbold text-center">{counselor?.name} 상담사</div>
            <div className="bodysmmedium text-center text-gray-400">
              앤데이 상담 총 {counselor?.counselingCount}회 진행
            </div>
          </div>
        </div>
      </div>
      {/* 상담사 설명 */}
      <div className="flex flex-col items-start justify-center gap-[30px]">
        <div className="flex flex-row items-center justify-center gap-2.5 rounded-md bg-gray-200 px-[18px] py-2">
          <img
            src="/src/assets/images/counseling/icon_shield.svg"
            alt="뱃지"
            className="h-[24px] w-[24px]"
          />
          <p className="bodyxssemibold text-center text-gray-500">공인 의료 서비스 제공자</p>
        </div>
        <div className="xssemibold text-center">{counselor?.introduction}</div>
        <div className="flex flex-col items-start justify-start gap-[30px]">
          <div className="bodymdsemibold flex items-start justify-start gap-[50px]">
            <div className="w-[60px] text-pink-600">대표업무</div>
            <div className="w-[340px]">{counselor?.symptoms.join(', ')}</div>
          </div>
          <div className="bodymdsemibold flex flex-row items-start justify-start gap-[50px]">
            <div className="w-[60px] text-pink-600">상담 내용</div>
            <div className="w-[340px]">{contents.consultDetail.content}</div>
          </div>
          <div className="bodymdsemibold flex flex-row items-start justify-start gap-[50px]">
            <div className="w-[60px] text-pink-600">현재 직무</div>
            <div className="flex flex-col items-start justify-start">
              <div className="w-[340px]">
                {counselor?.careers.map((career, index) => (
                  <div key={index}>
                    {career}
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="bodymdsemibold flex h-[54px] w-[463px] cursor-pointer items-center justify-center rounded-[10px] bg-pink-400 text-white"
          onClick={() => navigate(`/review/${id}`)}>
          리뷰쓰러 가기
        </div>
      </div>
    </div>
  )
}

export default Profile
