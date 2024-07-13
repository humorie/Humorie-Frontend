import { useState } from 'react'

// 예시 게시물 데이터
const cslists = [
  {
    id: 1,
    title: '공지사항 1',
    date: '2024.4.5',
    views: 205,
    type: '중요공지',
    content: '공지사항내용공지사항내용공지사항내용',
  },
  {
    id: 2,
    title: '공지사항 2',
    date: '2024.4.5',
    views: 205,
    type: '중요공지',
    content: '공지사항내용공지사항내용공지사항내용',
  },
  {
    id: 3,
    title: '공지사항 3',
    date: '2024.4.5',
    views: 205,
    type: '중요공지',
    content: '공지사항내용공지사항내용공지사항내용',
  },
  {
    id: 4,
    title: '공지사항 4',
    date: '2024.4.5',
    views: 205,
    type: '공지',
    content: '공지사항내용공지사항내용공지사항내용',
  },
  {
    id: 5,
    title: '공지사항 5',
    date: '2024.4.5',
    views: 205,
    type: '공지',
    content: '공지사항내용공지사항내용공지사항내용',
  },
  {
    id: 6,
    title: '공지사항 6',
    date: '2024.4.5',
    views: 205,
    type: '공지',
    content: '공지사항내용공지사항내용공지사항내용',
  },
  {
    id: 7,
    title: '공지사항 7',
    date: '2024.4.5',
    views: 205,
    type: '공지',
    content: '공지사항내용공지사항내용공지사항내용',
  },
  {
    id: 8,
    title: '공지사항 8',
    date: '2024.4.5',
    views: 205,
    type: '공지',
    content: '공지사항내용공지사항내용공지사항내용',
  },
  {
    id: 9,
    title: '공지사항 9',
    date: '2024.4.5',
    views: 205,
    type: '공지',
    content: '공지사항내용공지사항내용공지사항내용',
  },
  {
    id: 10,
    title: '공지사항 10',
    date: '2024.4.5',
    views: 205,
    type: '공지',
    content: '공지사항내용공지사항내용공지사항내용',
  },
]

const ListinCS = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const listsPerPage = 6 // 한 페이지에 보여줄 게시물 수
  const totalPages = Math.ceil(cslists.length / listsPerPage)

  const getCurrentLists = () => {
    const startIndex = (currentPage - 1) * listsPerPage
    const endIndex = startIndex + listsPerPage
    return cslists.slice(startIndex, endIndex)
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
    <div className="flex w-[880px] flex-col justify-center">
      <div className="divide-y-[0.5px] divide-gray-400">
        <div className="bodysmsemibold flex py-[26px]">
          <div className="flex w-[673px] items-center justify-center">제목</div>
          <div className="flex w-[114px] items-center justify-center">날짜</div>
          <div className="flex w-[93px] items-center justify-center">조회</div>
        </div>

        {getCurrentLists().map((list) => (
          <div
            key={list.id}
            className={`bodysmsemibold flex py-[26px] ${
              list.type === '중요공지' ? 'bg-gray-100' : 'bg-white'
            }`}>
            <div className="flex w-[83px] items-center justify-center">{list.type}</div>
            <div className="w-[590px] ps-[43px]">{list.content}</div>
            <div className="flex w-[114px] items-center justify-center">{list.date}</div>
            <div className="flex w-[93px] items-center justify-center">{list.views}</div>
          </div>
        ))}

        <div className="h-[220px]"></div>
      </div>
      <div className="mb-[107px] flex flex-row items-center justify-center gap-[40px] ">
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
  )
}

export default ListinCS
