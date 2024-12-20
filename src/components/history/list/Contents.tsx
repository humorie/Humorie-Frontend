import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EmptyPost from './EmptyPost'
import axios from 'axios'
import RecentPost from './RecentPost'
import Pagination from '../../common/Pagenation'
import Button from '../../common/Button'
import { useFetchUser } from '../../../hooks/useFetchUser'

interface ConsultDetail {
  id: number
  counselorId: number
  counselorName: string
  status: boolean
  symptoms: string[]
  isOnline: boolean
  counselDate: string
  counselTime: string
}

interface ConsultDetailsResponse {
  consultDetails: ConsultDetail[]
  pageNumber: number
  pageSize: number
  totalElements: number
  totalPages: number
}

const Contents: React.FC = () => {
  const [historyList, setHistoryList] = useState<ConsultDetailsResponse>() // 전체 상담 목록 상태관리
  const [currentPage, setCurrentPage] = useState(1) // 현재 페이지
  const [totalPages, setTotalPages] = useState(0) // 전체 페이지

  const user = useFetchUser()

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken')
        const response = await axios.get('/api/consult-detail/list', {
          headers: {
            Authorization: accessToken,
          },
          params: {
            page: currentPage - 1, // 페이지 번호
            size: 9, // 게시물 개수
          },
        })
        setHistoryList(response.data)
        setTotalPages(response.data.totalPages) // 총 페이지 수 업데이트
        // console.log('전체 상담 내역 조회 API 결과: ', response.data)
      } catch (error) {
        console.log('전체 상담 내역 조회 API 에러: ', error)
      }
    }
    fetchData()
  }, [currentPage])

  if (!historyList) {
    return <div>전체 상담 내역 API 조회 에러</div>
  }

  return (
    <div className="flex w-[1060px] flex-col items-center justify-center bg-white text-black">
      <div className="mt-[85px] flex h-[93px] w-full flex-col items-center justify-center">
        <p className="mdbold">상담 내역을 확인해 볼까요?</p>
      </div>
      <div>
        {/* 최근 상담 목록 */}
        {historyList.totalElements > 0 ? <RecentPost /> : null}

        <div className="mb-[50px] mt-[80px] flex h-[30px] flex-col items-start justify-start">
          <p className="xsbold text-center">상담 내역</p>
        </div>

        {/* 전체 상담 목록 */}
        <div className="bodymdmedium flex h-[78px] w-full flex-row items-center justify-evenly gap-[100px] bg-neutral-100 text-center text-stone-500">
          <ul className="w-[100px]">담당자명</ul>
          <ul className="w-[100px]">상담상태</ul>
          <ul className="w-[150px]">상담영역</ul>
          <ul className="w-[100px]">상담방법</ul>
          <ul className="w-[100px]">상담일</ul>
        </div>

        {historyList.totalElements > 0 ? (
          <>
            {historyList.consultDetails.map((post) => (
              <div
                key={post.id}
                className="bodysmmedium flex w-full cursor-pointer flex-row items-center justify-evenly gap-[100px] py-[60px] text-center text-stone-500"
                onClick={() => navigate(`/history/${post.id}`)}>
                <ul className="w-[100px]">{post.counselorName}</ul>
                <ul className="w-[100px]">{post.status === true ? '상담완료' : '상담진행'}</ul>
                <ul className="w-[150px] truncate">{post.symptoms.join(' / ')}</ul>
                <ul className="w-[100px]">{post.isOnline === true ? '온라인' : '오프라인'}</ul>
                <ul className="w-[100px]">{post.counselDate}</ul>
              </div>
            ))}
            {/* 관리자 계정일 경우 글쓰기 버튼 활성화 */}
            {user?.accountName == 'admin' && (
              <div className="flex items-center justify-end">
                <Button
                  label="글쓰기"
                  size="Small"
                  color="gray"
                  onClick={() => navigate('/history/wirte')}
                />
              </div>
            )}
            <div className="mb-[170px] mt-[80px] flex items-center justify-center">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
          </>
        ) : (
          <EmptyPost />
        )}
      </div>
    </div>
  )
}

export default Contents
