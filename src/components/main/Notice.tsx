import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

interface NoticeTypes {
  id: number
  importance: boolean
  title: string
  createdDate: string
  viewCount: number
}

const Notice: React.FC = () => {
  const [allNotice, setAllNotice] = useState<NoticeTypes[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/notice/get', {
          params: {
            page: 0,
            size: 5,
          },
        })
        setAllNotice(response.data.notices)
        console.log('전체 공지사항 API 결과', response.data)
      } catch (error) {
        console.log('전체 공지사항 API 에러: ', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="relative h-[356px] w-[356px] rounded-lg bg-white shadow">
      <div className="absolute left-0 top-0 inline-flex h-28 flex-col items-start justify-start p-6">
        <div className="flex flex-col items-start justify-start gap-4">
          <p
            className="mdbold cursor-pointer text-gray-900"
            onClick={() => navigate('/customerservice')}>
            공지사항
          </p>
          <div className="self-stretch border-4 border-pink-300"></div>
        </div>
      </div>
      <div className="absolute left-0 top-[112px] inline-flex h-[220px] flex-col items-start justify-start">
        {allNotice.map((notice) => (
          <div
            className="inline-flex w-[356px] cursor-pointer items-center justify-start gap-4 px-6 py-2.5"
            onClick={() => navigate(`/customerservice/${notice.id}`)}
            key={notice.id}>
            <p className="bodymdsemibold grow text-gray-500">{notice.title}</p>
            <p className="bodysmregular text-gray-400">{notice.createdDate}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Notice
