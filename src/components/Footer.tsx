import { useLocation, useNavigate } from 'react-router-dom'

const Footer: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const onClickCustomerServicehandler = () => {
    navigate('/customerservice')
  }
  const onClickPolicyhandler = () => {
    navigate('/policy')
  }

  return (
    <div className="flex h-[200px] w-screen items-center justify-center border-t border-gray-100 bg-white">
      <div className="flex w-[1060px] flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center self-stretch  px-[20px] py-[24px]">
          <div className="flex h-[140px] flex-col items-start justify-start gap-8 self-stretch">
            <div className="flex flex-row items-center justify-between self-stretch">
              {/* 고객센터, 이용약관 */}
              <div className="bodysmbold flex items-center justify-start text-center text-gray-800">
                <div
                  className={`flex h-[60px] w-[100px] cursor-pointer items-center justify-center text-center hover:text-primary-700 active:text-primary-800 
                    ${location.pathname === '/customerservice' ? 'text-primary-700' : 'text-gray-800'}`}
                  onClick={onClickCustomerServicehandler}>
                  고객센터
                </div>
                <div
                  className={`flex h-[60px] w-[100px] cursor-pointer items-center justify-center text-center hover:text-primary-700 active:text-primary-800
                    ${location.pathname === '/policy' ? 'text-primary-800' : 'text-gray-800'}`}
                  onClick={onClickPolicyhandler}>
                  이용약관
                </div>
              </div>
              {/* 로고 */}
              <div className="flex w-[160px] items-center justify-between">
                <img alt="blog_logo" src="/src/assets/images/header&footer/blog.svg" />
                <img alt="instagram_logo" src="/src/assets/images/header&footer/instagram.svg" />
                <img alt="apple_logo" src="/src/assets/images/header&footer/apple.svg" />
                <img alt="google_logo" src="/src/assets/images/header&footer/google.svg" />
              </div>
            </div>
            {/* 하단 글 */}
            <div className="bodysmmedium flex h-[48px] w-full flex-col items-start justify-start px-[26px] text-gray-400">
              <div className="flex h-full w-full flex-col items-start justify-start gap-[8px]">
                <div className="flex items-start justify-start text-center">
                  인천광역시 연수구 아카데미로 119(송도동) 인천대학교
                </div>
                <div className="flex items-start justify-start text-center">
                  Copyright @ NEXTDAY. ALL RIGHT RESERVED.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
