import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Pagination from '../Pagenation' // Pagination 컴포넌트를 임포트

interface NoticeTypes {
  id: number
  importance: boolean
  title: string
  createdDate: string
  viewCount: number
}

interface AllNoticeTypes {
  notices: NoticeTypes[]
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
}

const ListinCS = () => {
  const [allNotice, setAllNotice] = useState<NoticeTypes[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<AllNoticeTypes>('/api/notice/get', {
          params: {
            page: currentPage - 1, // API는 0 기반 페이지 인덱싱을 사용할 수 있음
            size: 9, // 한 페이지당 9개의 게시물
          },
        })
        setAllNotice(response.data.notices)
        setTotalPages(response.data.totalPages) // 총 페이지 수 업데이트
      } catch (error) {
        console.error('전체 공지사항 API 에러', error)
      }
    }

    fetchData()
  }, [currentPage])

  return (
    <div className="flex w-[880px] flex-col justify-center">
      <div className="divide-y-[0.5px] divide-gray-400">
        {allNotice.map((notice) => (
          <div key={notice.id} className="bodysmmedium flex py-[26px]">
            <div className="flex w-[83px] items-center justify-center text-gray-400">공지</div>
            <div
              className="w-[590px] cursor-pointer text-gray-500"
              onClick={() => navigate(`/customerservice/${notice.id}`)}>
              {notice.title}
            </div>
            <div className="flex w-[114px] items-center justify-center text-gray-400">
              {notice.createdDate}
            </div>
            <div className="flex w-[93px] items-center justify-center text-gray-400">
              {notice.viewCount}
            </div>
          </div>
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  )
}

export default ListinCS
