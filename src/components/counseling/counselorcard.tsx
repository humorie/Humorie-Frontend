import { useNavigate } from 'react-router-dom'
import '../../index.css'

import Button from '../Button'

const CounselorCard = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col">
      <div className="flex h-[313px] w-[1006px] flex-col items-center justify-center">
        <div className="flex h-[193px] w-[946px] flex-col space-y-[24px]">
          <div className="bodysmmedium flex space-x-[12px]">
            <div className="rounded-[4px] bg-gray-100 px-[12px] py-[6px] text-gray-700">여성</div>
            <div className="rounded-[4px] bg-gray-100 px-[12px] py-[6px] text-gray-700">
              서울시 강남구
            </div>
            <div className="rounded-[4px] bg-gray-100 px-[12px] py-[6px] text-gray-700">
              오프라인
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-center space-x-[34px]">
              <img src="src/assets/images/counseling/image_이솔비상담가.svg" alt="counselorimage" />
              <div className="flex h-[125px] flex-col justify-between">
                <div className="flex items-end space-x-[8px]">
                  <p className="mdsemibold">이솔비</p>
                  <p className="bodymdsemibold pb-[4px] text-gray-800">상담가</p>
                </div>
                <div className="flex items-center">
                  <img src="src/assets/images/counseling/star_rate.svg" alt="별점" />
                  <div className="w-[7px]" />
                  <p className="bodylmedium text-gray-800">5.0 </p>
                  <p className="bodylmedium text-gray-500">(10)</p>
                  <div className="w-[12px]" />
                  <p className="bodymdmedium text-gray-800">결혼 ･ 이혼 ･ 가정 ･ 법의학</p>
                </div>
                <p className="bodymdmedium text-gray-500">
                  “내담자의 작은 소리를 귀기울여듣고 상처를 함께 치유해나가겠습니다.”
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-[20px]">
              <Button
                label="상담사 보기"
                size="Large"
                color="line"
                onClick={() => navigate('/counseling/counselor')}
              />
              <Button
                label="예약하기"
                size="Large"
                color="pink"
                onClick={() => navigate('/counseling/reservation')}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1006px] border-[1.2px] border-gray-400" />
    </div>
  )
}

export default CounselorCard
