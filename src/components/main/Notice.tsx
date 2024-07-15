import { useNavigate } from 'react-router-dom'

const Notice: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div
      className="relative h-[356px] w-[356px] rounded-lg bg-white shadow"
      onClick={() => navigate('/customerservice')}>
      <div className="absolute left-0 top-0 inline-flex h-28 flex-col items-start justify-start p-6">
        <div className="flex flex-col items-start justify-start gap-4">
          <p className="mdbold text-gray-900">공지사항</p>
          <div className="self-stretch border-4 border-pink-300"></div>
        </div>
      </div>
      <div className="absolute left-0 top-[112px] inline-flex h-[220px] flex-col items-start justify-start">
        <div className="inline-flex w-[356px] items-center justify-start gap-4 px-6 py-2.5">
          <p className="bodymdsemibold grow text-gray-500">문의 방법 안내</p>
          <p className="bodysmregular text-gray-400">06. 19</p>
        </div>
        <div className="inline-flex w-[356px] items-center justify-start gap-4 px-6 py-2.5">
          <p className="bodymdsemibold grow text-gray-500">업데이트 안내</p>
          <p className="bodysmregular text-gray-400"> 00. 00. 00</p>
        </div>
        <div className="inline-flex w-[356px] items-center justify-start gap-4 px-6 py-2.5">
          <p className="bodymdsemibold grow text-gray-500">문의 방법 안내</p>
          <p className="bodysmregular text-gray-400"> 00. 00. 00</p>
        </div>
        <div className="inline-flex w-[356px] items-center justify-start gap-4 px-6 py-2.5">
          <p className="bodymdsemibold grow text-gray-500">업데이트 안내</p>
          <p className="bodysmregular text-gray-400"> 00. 00. 00</p>
        </div>
        <div className="inline-flex w-[356px] items-center justify-start gap-4 px-6 py-2.5">
          <p className="bodymdsemibold grow text-gray-500">공지사항</p>
          <p className="bodysmregular text-gray-400"> 00. 00. 00</p>
        </div>
      </div>
    </div>
  )
}
export default Notice
