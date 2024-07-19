import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmptyPost from './EmptyPost'
import Pagination from '../Pagenation'

interface Post {
  id: number
  name: string // 상담사 이리름
  state: string // 상담 상태
  content: string // 상담 내용
  skill: string // 상담 방법
  date: string // 상담일
}

const Posts: React.FC = () => {
  const posts: Post[] = [
    {
      id: 1,
      name: '김철수',
      state: '진행중',
      content: '상담 내용 1',
      skill: '전화',
      date: '2024-05-01',
    },
  ]
  const navigate = useNavigate()
  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState<number>(1)
  const postsPerPage = 9
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const getCurrentPosts = (): Post[] => {
    const startIndex = (currentPage - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    return posts.slice(startIndex, endIndex)
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="flex w-[1060px] flex-col bg-white text-black">
      <div className="mb-[50px] mt-[150px] flex h-[30px] flex-col items-start justify-start">
        <p className="xsbold text-center">상담 내역</p>
      </div>

      {/* 상담 리스트 */}
      <div className="bodymdmedium flex h-[78px] w-full flex-row items-center justify-evenly gap-[100px] bg-neutral-100 text-center text-stone-500">
        <p className="w-[100px]">담당자명</p>
        <p className="w-[100px]">상담상태</p>
        <p className="w-[100px]">상담내용</p>
        <p className="w-[100px]">상담방법</p>
        <p className="w-[100px]">상담일</p>
      </div>

      {/* TODO 각 페이지별 링크 연결 */}
      {posts.length > 0 ? (
        <div>
          {getCurrentPosts().map((post) => (
            <div
              key={post.id}
              className="bodysmmedium flex w-full cursor-pointer flex-row items-center justify-evenly gap-[100px] py-[60px] text-center text-stone-500"
              onClick={() => navigate('/post')}>
              <p className="w-[100px]">{post.name}</p>
              <p className="w-[100px]">{post.state}</p>
              <p className="w-[100px]">{post.content}</p>
              <p className="w-[100px]">{post.skill}</p>
              <p className="w-[100px]">{post.date}</p>
            </div>
          ))}

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageClick}
          />
        </div>
      ) : (
        <EmptyPost />
      )}
    </div>
  )
}

export default Posts
