import React from 'react'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={'bodymdmedium cursor-pointer bg-transparent text-gray-500'}>
          {i}
        </button>,
      )
    }
    return pageNumbers
  }

  return (
    <div className="my-[80px] flex cursor-pointer flex-row items-center justify-center gap-[40px]">
      <img
        className="h-[20px] w-[20px] cursor-pointer"
        onClick={handlePrevious}
        src="src/assets/images/icon/icon_arrow_left.svg"
        alt="왼쪽 화살표"
      />
      {renderPageNumbers()}
      <img
        className="h-[20px] w-[20px] cursor-pointer"
        onClick={handleNext}
        src="src/assets/images/icon/icon_arrow_right.svg"
        alt="오른쪽 화살표"
      />
    </div>
  )
}

export default Pagination