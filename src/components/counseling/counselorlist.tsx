import { useNavigate } from 'react-router-dom'
import '../../index.css'

const Counselorlist = () => {
  const navigate = useNavigate()
  const onClickConselorhandler = () => {
    navigate('/counseling/counselor')
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center w-[790px] h-[280px] border-[1px] space-x-[110px]">
        <div className="flex flex-col content-center space-y-[40px]">
          <div className="flex flex-row items-end content-center space-x-[17px]">
            <p className="xssemibold">이솔비</p>
            <p className="bodysmregular">평균응답 1시간 이내</p>
          </div>
          <div className="flex flex-col space-y-[13px]">
            <p className="">“내담자의 작은 소리를 귀기울여듣고 상처를 함께 치유해나가겠습니다.”</p>
            <div className="flex flex-row items-center space-x-[19px]">
              <div className="bodyxsregular px-[10px] py-[2px] bg-gray-400 text-white flex-shrink">
                결혼
              </div>
              <div className="bodyxsregular px-[10px] py-[2px] bg-gray-400 text-white">이혼</div>
              <div className="bodyxsregular px-[10px] py-[2px] bg-gray-400 text-white">가정</div>
              <div className="bodyxsregular px-[10px] py-[2px] bg-gray-400 text-white">법의학</div>
            </div>
          </div>
          <div className="flex flex-row space-x-[16px]">
            <button
              type="submit"
              className="bodymdregular px-[15px] py-[8px] bg-gray-400 text-white">
              문의하러 가기
            </button>
            <button
              type="submit"
              onClick={onClickConselorhandler}
              className="bodymdregular px-[15px] py-[8px] bg-gray-400 text-white">
              프로필 보러가기
            </button>
          </div>
        </div>
        <img src="" alt="counselor" />
      </div>
      <div className="w-[790px] border-[0.08px] border-gray-400 mb-[9px]"> </div>
    </div>
  )
}

export default Counselorlist
