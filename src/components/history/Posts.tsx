import React, { useState } from 'react'

import EmptyPost from './EmptyPost'

interface Post {
  id: number
  name: string
  state: string
  content: string
  skill: string
  date: string
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
    {
      id: 2,
      name: '이영희',
      state: '완료',
      content: '상담 내용 2',
      skill: '이메일',
      date: '2024-05-02',
    },
    {
      id: 3,
      name: '박민수',
      state: '대기',
      content: '상담 내용 3',
      skill: '대면',
      date: '2024-05-03',
    },
    {
      id: 4,
      name: '최지혜',
      state: '진행중',
      content: '상담 내용 4',
      skill: '전화',
      date: '2024-05-04',
    },
    {
      id: 5,
      name: '정현우',
      state: '완료',
      content: '상담 내용 5',
      skill: '이메일',
      date: '2024-05-05',
    },
    {
      id: 6,
      name: '이서윤',
      state: '대기',
      content: '상담 내용 6',
      skill: '대면',
      date: '2024-05-06',
    },
    {
      id: 7,
      name: '한지민',
      state: '진행중',
      content: '상담 내용 7',
      skill: '전화',
      date: '2024-05-07',
    },
    {
      id: 8,
      name: '김지훈',
      state: '완료',
      content: '상담 내용 8',
      skill: '이메일',
      date: '2024-05-08',
    },
    {
      id: 9,
      name: '박지성',
      state: '대기',
      content: '상담 내용 9',
      skill: '대면',
      date: '2024-05-09',
    },
    {
      id: 10,
      name: '최유리',
      state: '진행중',
      content: '상담 내용 10',
      skill: '전화',
      date: '2024-05-10',
    },
    {
      id: 11,
      name: '오지현',
      state: '완료',
      content: '상담 내용 11',
      skill: '이메일',
      date: '2024-05-11',
    },
    {
      id: 12,
      name: '윤정민',
      state: '대기',
      content: '상담 내용 12',
      skill: '대면',
      date: '2024-05-12',
    },
  ]
  // 페이지네이션 상태
  const [currentPage, setCurrentPage] = useState<number>(1)
  const postsPerPage = 9
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const getCurrentPosts = (): Post[] => {
    const startIndex = (currentPage - 1) * postsPerPage
    const endIndex = startIndex + postsPerPage
    return posts.slice(startIndex, endIndex)
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i += 1) {
      pageNumbers.push(
        <button
          type="button"
          key={i}
          onClick={() => handlePageClick(i)}
          className="bodysmmedium cursor-pointer bg-transparent text-stone-500">
          {i}{' '}
        </button>,
      )
    }
    return pageNumbers
  }

  return (
    <div className="flex w-[1060px] flex-col bg-white text-black">
      <div className="mb-[50px] mt-[150px] flex h-[30px] flex-col items-start justify-start">
        <p className="xsbold text-center">상담 내역</p>
      </div>

      {/* 상담 리스트 */}
      <div className="flex h-[78px] flex-row items-center justify-around bg-neutral-100 text-center text-stone-500">
        <p className="bodymdmedium w-[100px] ">담당자명</p>
        <p className="bodymdmedium w-[100px] ">상담상태</p>
        <p className="bodymdmedium w-[100px] ">상담내용</p>
        <p className="bodymdmedium w-[100px] ">상담방법</p>
        <p className="bodymdmedium w-[100px] ">상담일</p>
      </div>

      {/* TODO 각 페이지별 링크 연결 */}
      {posts.length > 0 ? (
        <div>
          {getCurrentPosts().map((post) => (
            <div
              key={post.id}
              className="flex flex-row items-center justify-around py-[60px] text-center text-stone-500">
              <p className="w-[100px]">{post.name}</p>
              <p className="w-[100px]">{post.state}</p>
              <p className="w-[100px]">{post.content}</p>
              <p className="w-[100px]">{post.skill}</p>
              <p className="w-[100px]">{post.date}</p>
            </div>
          ))}

          {/* 페이지네이션 */}
          <div className="my-[80px] flex flex-row items-center justify-center gap-[40px]">
            <img
              className=" cursor-pointer"
              onClick={handlePrevious}
              src="src/assets/images/icon/icon_arrow_left_pink.svg"
              alt="왼쪽 화살표"
            />
            {renderPageNumbers()}
            <img
              className=" cursor-pointer"
              onClick={handleNext}
              src="src/assets/images/icon/icon_arrow_right_pink.svg"
              alt="오른쪽 화살표"
            />
          </div>
        </div>
      ) : (
        <EmptyPost />
      )}
    </div>
  )
}

export default Posts
