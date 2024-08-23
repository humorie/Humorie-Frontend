import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EmptyPost from './EmptyPost'
// import Pagination from '../Pagenation'
import axios from 'axios'
import { AllHistoryTypes } from '../Types'
import RecentPost from './RecentPost'

const Contents: React.FC = () => {
  const [historyList, setHistoryList] = useState<AllHistoryTypes>() // 전체 상담 목록 상태관리
  // const [currentPage, setCurrentPage] = useState<number>(1)
  const navigate = useNavigate()

  // const postsPerPage = 9
  // const totalPages = Math.ceil(posts.length / postsPerPage)

  // const getCurrentPosts = (): Post[] => {
  //   const startIndex = (currentPage - 1) * postsPerPage
  //   const endIndex = startIndex + postsPerPage
  //   return posts.slice(startIndex, endIndex)
  // }

  // const handlePageClick = (pageNumber: number) => {
  //   setCurrentPage(pageNumber)
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken')
        const response = await axios.get('/api/consult-detail/list', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            page: 1, // 페이지 번호
            size: 9, // 게시물 개수
          },
        })
        setHistoryList(response.data)
        console.log('전체 상담 내역 조회 API 결과: ', response.data)
      } catch (error) {
        console.log('전체 상담 내역 조회 API 에러: ', error)
      }
    }
    fetchData()
  }, [])

  if (!historyList) {
    return <div>전체 상담 내역 API 조회 에러</div>
  }

  return (
    <div className="flex w-[1060px] flex-col items-center justify-center bg-white text-black">
      <div className="mt-[85px] flex h-[93px] w-full flex-col items-center justify-center">
        <p className="mdbold">상담 내역을 확인해 볼까요?</p>
      </div>
      {historyList.totalElements > 0 ? (
        <div>
          {/* 최근 상담 목록 */}
          <RecentPost />

          <div className="mb-[50px] mt-[80px] flex h-[30px] flex-col items-start justify-start">
            <p className="xsbold text-center">상담 내역</p>
          </div>

          {/* 전체 상담 목록 */}
          <div className="bodymdmedium flex h-[78px] w-full flex-row items-center justify-evenly gap-[100px] bg-neutral-100 text-center text-stone-500">
            <p className="w-[100px]">담당자명</p>
            <p className="w-[100px]">상담상태</p>
            <p className="w-[100px]">상담영역</p>
            <p className="w-[100px]">상담방법</p>
            <p className="w-[100px]">상담일</p>
          </div>

          {historyList.consultDetails.map((post) => (
            <div
              key={post.id}
              className="bodysmmedium flex w-full cursor-pointer flex-row items-center justify-evenly gap-[100px] py-[60px] text-center text-stone-500"
              onClick={() => navigate(`/history/${post.id}`)}>
              <p className="w-[100px]">{post.counselorName}</p>
              <p className="w-[100px]">{post.status === true ? '상담완료' : '상담진행'}</p>
              <p className="w-[100px]">{post.counselContent}</p>
              <p className="w-[100px]">{post.location}</p>
              <p className="w-[100px]">{post.counselDate}</p>
            </div>
          ))}
        </div>
      ) : (
        <EmptyPost />
      )}
    </div>
  )
}

export default Contents
