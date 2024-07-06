import '../../index.css'

const Profile = () => {
  return (
    <div className="flex flex-col items-center w-[360px] border-[1px] border-gray-300">
      <img
        src="/src/assets/images/counseling/profile_image.svg"
        alt="counselor"
        className="w-full h-[381px]"
      />
      <div className="flex flex-col items-center w-full h-[300px] bg-white ">
        <div className="h-[28px]"> </div>
        <div className="flex flex-col items-center">
          <div className="px-[22px] py-[3px] bodyxsbold bg-gray-100 text-gray-400 rounded-[5px]">
            평점 4.29
          </div>
          <div className="h-[26px]"> </div>
          <div className="flex flex-col items-center space-y-[3px]">
            <p className="mdbold text-black">이솔비 상담사</p>
            <div className="bodysmmedium text-gray-500">앤데이 상담 총 169회 진행</div>
          </div>
        </div>
        <div className="h-[70px]"> </div>
        <button
          type="submit"
          className="bodymdsemibold px-[45px] py-[15px] bg-primary-600 text-white">
          상담 예약하기
        </button>
      </div>
    </div>
  )
}

export default Profile
