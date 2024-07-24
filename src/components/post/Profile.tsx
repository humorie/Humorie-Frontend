import { useNavigate } from 'react-router-dom'

const Profile: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="mb-[300px] mt-[60px] flex h-[500px] w-full flex-row items-center justify-between gap-[60px]">
      {/* 상담사 카드 */}
      <div className="flex h-[451px] flex-col items-center justify-between border border-gray-300">
        <img className="h-[256px] w-[215px]" src="src/assets/images/avatar/avatar_square1.svg" />
        <div className=" flex flex-col items-center justify-start gap-[40px] p-[35px]">
          <div className="flex h-[26px] w-[95px] items-center justify-center gap-2.5 rounded-[5px] bg-gray-100">
            <div className="bodysmmedium text-center text-gray-400">평점 4.98</div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[15px]">
            <div className="bodylbold text-center">가나다 상담사</div>
            <div className="bodysmmedium text-center text-gray-400">앤데이 상담 총 169회 진행</div>
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
        <div className="xssemibold text-center">김정희님의 밝고 활기찬 앞길을 응원합니다.</div>
        <div className="flex flex-col items-start justify-start gap-[30px]">
          <div className="bodymdsemibold flex items-start justify-start gap-[55px]">
            <div className="w-[60px] text-pink-600">대표업무</div>
            <div className="w-[340px]">결혼,가정,이혼부부 상담 서비스</div>
          </div>
          <div className="bodymdsemibold flex flex-row items-start justify-start gap-[51px]">
            <div className="w-[60px] text-pink-600">상담 내용</div>
            <div className="w-[340px]">
              김정희님과 어떠한 상담을 진행했는지 간단한 요약 및 내담자의 증상 소개 및 앞으로 향후
              방향 자유로운 상담사님의 견해
            </div>
          </div>
          <div className="bodymdsemibold flex flex-row items-start justify-start gap-[51px]">
            <div className="w-[60px] text-pink-600">현재 직무</div>
            <div className="flex flex-col items-start justify-start">
              <div className="w-[340px]">00상담 브릿지</div>
              <div className="w-[340px]">00병원 4년근무</div>
            </div>
          </div>
        </div>
        <div
          className="bodymdsemibold flex h-[54px] w-[463px] cursor-pointer items-center justify-center rounded-[10px] bg-pink-400 text-white"
          onClick={() => navigate('/review')}>
          리뷰쓰러 가기
        </div>
      </div>
    </div>
  )
}

export default Profile
