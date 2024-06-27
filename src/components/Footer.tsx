const Footer: React.FC = () => {
  return (
    <div className="flex w-screen items-center justify-center bg-white">
      <div className="flex h-[200px] w-[1100px] flex-col items-center justify-center ">
        <div className="flex shrink grow basis-0 flex-col items-center justify-center self-stretch  px-5 py-6">
          <div className="flex h-[140px] flex-col items-start justify-start gap-8 self-stretch">
            <div className="flex items-center justify-between self-stretch">
              <div className="bodysmbold gap-2, flex items-center justify-start text-center text-gray-800">
                <div className="flex h-[60px] w-[100px] items-center justify-center ">
                  <p className=" w-[84px]">고객센터</p>
                </div>
                <div className="flex h-[60px] w-[100px] items-center justify-center ">
                  <p className=" w-[84px] ">이용약관</p>
                </div>
              </div>
              <div className="flex w-[160px] items-center justify-between">
                <img alt="blog_logo" src="src/assets/images/header&footer/blog.svg" />
                <img alt="instagram_logo" src="src/assets/images/header&footer/instagram.svg" />
                <img alt="apple_logo" src="src/assets/images/header&footer/apple.svg.svg" />
                <img alt="google_logo" src="src/assets/images/header&footer/google.svg" />
              </div>
            </div>
            <div className="bodysmmedium flex h-12 flex-col items-start justify-start gap-7 self-stretch px-[26px] text-gray-400">
              <div className="flex h-12 flex-col items-start justify-start gap-2 self-stretch">
                <div className="flex items-start justify-start gap-2">
                  <p>인천광역시 연수구 아카데미로 119(송도동) 인천대학교</p>
                </div>
                <div className="flex items-start justify-start gap-2">
                  <p>Copyright @ NEXTDAY. ALL RIGHT RESERVED.</p>
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
