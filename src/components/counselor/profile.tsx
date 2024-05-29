import '../../index.css'

const Profile = () => {
  return (
    <div className="flex flex-col items-center w-[360px]">
      <img src="" alt="counselor" className="w-full h-[381px]" />
      <div className="flex flex-col items-center justify-evenly w-full h-[300px] bg-gray-200">
        <p className="mdbold">이솔비 상담사</p>
        <div className="flex flex-col items-center space-y-[9px]">
          <div className="px-[32px] py-[6px] bodysmmedium bg-gray-300">평점 4.29</div>
          <div className="bodysmmedium">앤데이 상담 총 169회 진행</div>
        </div>
        <button type="submit" className="bodysmmedium px-[38px] py-[20px] bg-gray-300">
          이솔비 상담사에게 상담받기
        </button>
      </div>
    </div>
  )
}

export default Profile
