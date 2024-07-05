import RecentPost from './RecentPost'
import Posts from './Posts'

const Contents: React.FC = () => {
  return (
    <div className="flex w-[1060px] flex-col items-center justify-center bg-white text-black">
      <div className="mt-[60px] flex h-[93px] w-full flex-col items-center justify-center">
        <p className="mdbold">상담 내역을 확인해 볼까요?</p>
      </div>
      <RecentPost />
      <Posts />
    </div>
  )
}

export default Contents
