import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Pagination from '../Pagenation'
import Input from '../Input'
import Button from '../Button'

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

const List = () => {
  const [allNotice, setAllNotice] = useState<NoticeTypes[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  // 전체 공지사항 전체 조회 API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<AllNoticeTypes>('/api/notice/get', {
          params: {
            page: currentPage - 1,
            size: 8, // 한 페이지당 9개의 게시물
          },
        })
        setAllNotice(response.data.notices)
        setTotalPages(response.data.totalPages)
      } catch (error) {
        console.log('전체 공지사항 API 에러: ', error)
      }
    }
    fetchData()
  }, [currentPage])

  // 공지사항 검색 API
  const handleSearchClick = async () => {
    try {
      const response = await axios.get<AllNoticeTypes>('/api/notice/search', {
        params: {
          page: currentPage - 1,
          size: 8,
          keyword: keyword,
        },
      })
      setAllNotice(response.data.notices)
      setTotalPages(response.data.totalPages) // 총 페이지 수 업데이트
    } catch (error) {
      console.log('공지사항 검색 API 에러: ', error)
    }
  }

  // 검색어 이벤트 핸들러
  const handleKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  return (
    <div className="flex w-[880px] flex-col justify-center">
      <div className="divide-y-[0.5px] divide-gray-400">
        {allNotice.length > 0 ? (
          allNotice.map((notice) => (
            <div key={notice.id} className="bodysmmedium flex py-[26px]">
              <div className="flex w-[110px] items-center justify-center text-gray-400">공지</div>
              <div
                className="flex w-[590px] cursor-pointer text-gray-500"
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
          ))
        ) : (
          <div className="my-8 flex items-center justify-center">검색결과가 없습니다.</div>
        )}
      </div>
      <div className="border border-gray-300" />

      <div className="my-[80px] flex items-center justify-end">
        <Button
          label="글쓰기"
          size="Small"
          color="gray"
          onClick={() => navigate('/customerservice/write')}
        />
      </div>

      <div className="my-[60px] flex flex-col items-center justify-center gap-[60px]">
        {allNotice.length > 0 ? (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        ) : null}
        <Input
          type="Button"
          placeholder="검색어를 입력해주세요"
          onChange={handleKeywordChange}
          btnLabel="검색"
          btnEvent={handleSearchClick}
        />
      </div>
    </div>
  )
}

export default List
