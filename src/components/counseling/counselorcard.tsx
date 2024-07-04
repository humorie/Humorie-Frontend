import { useNavigate } from 'react-router-dom'
import '../../index.css'
import ButtonLine from '../button/button_line'
import ButtonPrimary from '../button/button_primary'

const CounselorCard = () => {
  const navigate = useNavigate()
  const onClickConselorhandler = () => {
    navigate('/counseling/counselor')
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center w-[1006px] h-[313px]">
        <div className="flex flex-col w-[946px] h-[193px] space-y-[24px]">
          <div className="flex space-x-[12px] bodysmmedium">
            <div className="px-[12px] py-[6px] rounded-[4px] bg-gray-100 text-gray-700">여성</div>
            <div className="px-[12px] py-[6px] rounded-[4px] bg-gray-100 text-gray-700">
              서울시 강남구
            </div>
            <div className="px-[12px] py-[6px] rounded-[4px] bg-gray-100 text-gray-700">
              오프라인
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex justify-center space-x-[34px]">
              <img src="src/assets/images/counseling/이솔비상담가.svg" alt="counselorimage" />
              <div className="flex flex-col justify-between h-[125px]">
                <div className="flex space-x-[8px] items-end">
                  <p className="mdsemibold">이솔비</p>
                  <p className="bodymdsemibold text-gray-800 pb-[4px]">상담가</p>
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
              <ButtonLine text="프로필 보러가기" onClick={onClickConselorhandler} />
              <ButtonPrimary text="문의하러 가기" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1006px] border-[1.2px] border-gray-400" />
    </div>
  )
}

export default CounselorCard
