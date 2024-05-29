import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Post {
  id: number
  name: string
  state: string
  content: string
  skill: string
  date: string
}

const CounselingList: React.FC = () => {
  // 임시 데이터
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
  const postsPerPage = 7
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
          className="mx-1 bg-transparent px-3 py-1">
          {i}
        </button>,
      )
    }
    return pageNumbers
  }

  const navigate = useNavigate()
  const goToReview = () => {
    navigate('/history/review') // 리뷰페이지 이동
  }

  return (
    <div className="flex h-[2203px] w-screen items-center justify-center text-black">
      <div className="flex h-[1913px] w-[1060px] flex-col  items-center px-[20px]">
        <div className="mdbold flex h-[93px] w-[1060px] items-center justify-center text-center">
          상담 내역을 확인해볼까요?
        </div>
        <div className="flex">
          {/* 왼쪽 */}
          <div className="bodylmedium h-[345px] w-[530px] bg-zinc-300 pl-[70px] pt-[40px]">
            <p className="text-black">홍길동님이</p>
            <p className="xsbold text-black">가장 최근에 받은 상담</p>
            <p className="h-[20px]" />
            <p className="text-black">
              내용 : 대인관계/가족/임신 출산 아프로의 방향에 대한 깊은 고민
            </p>
            <p className="text-black">상담사 : ---</p>
            <p className="text-black">상담시간 : ---</p>
            <p className="h-[60px]" />
            <div className="flex w-full justify-around ">
              <p className="text-gray-400">2024.2.5</p>
              <p className="text-gray-400">무료온라인상담</p>
              <p className="text-gray-400">앤데이프리미엄</p>
            </div>
          </div>
          {/* 오른쪽 */}
          <div className="flex h-[345px] w-[530px] flex-col items-end bg-zinc-300 pr-[70px] pt-[40px] ">
            <div className="mb-[16px] h-[200px] w-[170px] bg-black" />
            <div className="h-[46px]">
              <button type="button" className="mr-[5px] h-[46px] w-[126px] bg-gray-400">
                프로필 보기
              </button>
              <button
                type="button"
                onClick={goToReview}
                className="h-[46px] w-[126px] bg-gray-400 ">
                리뷰쓰러가기
              </button>
            </div>
          </div>
        </div>
        <div className="bodysmsemibold flex w-full justify-evenly py-[30px] ">
          <p>상담목록</p>
          <p>상담사목록</p>
        </div>
        <div className="bodysmsemibold flex w-full">
          <div className="mr-[8px] h-[30px] w-[99px] border border-stone-300 text-center">날짜</div>
          <div className="mr-[8px] h-[30px] w-[99px] border border-stone-300 text-center">
            카테고리
          </div>
          <input
            type="input"
            className="mr-[12px] h-[30px] w-[160px] border border-stone-300 bg-white"
          />
          <div className="inline-flex h-[29px] w-[65px] items-center justify-center gap-2.5 bg-rose-300 px-[5px] py-[1.5px]">
            <div className="font-['Pretendard Variable'] text-center text-sm font-bold text-white">
              검색
            </div>
          </div>
        </div>
        {/* 리스트 */}
        <div className="h-[80px]" />
        <div className="bodysmsemibold flex h-[78px] w-full items-center justify-between bg-neutral-100 px-[70px] text-[#696969]">
          <p>담당자명</p>
          <p>상담상태</p>
          <p>상담내용</p>
          <p>상담방법</p>
          <p>상담일</p>
        </div>
        <div className="h-[700px]">
          <ul className="flex w-[1060px] flex-col px-[70px]">
            {getCurrentPosts().map((post) => (
              <li
                className="flex h-[78px] items-center justify-between text-[#696969]"
                key={post.id}>
                <p>{post.name}</p>
                <p>{post.state}</p>
                <p>{post.content}</p>
                <p>{post.skill}</p>
                <p>{post.date}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center px-[70px]">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="mx-1 bg-transparent px-3 py-1">
            &lt;
          </button>
          {renderPageNumbers()}
          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="mx-1 bg-transparent px-3 py-1 ">
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}

export default CounselingList
