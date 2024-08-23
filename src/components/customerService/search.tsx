const SearchinCS = () => {
  return (
    <div className="mb-[70px] flex h-[68px] w-[880px] items-center justify-center space-x-[36px] bg-gray-50 px-[24px] py-[19px]">
      <img src="src/assets/images/counseling/search.svg" alt="search icon" />
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        className="bodylregular w-full bg-gray-50 text-gray-500 placeholder:text-gray-500 focus:outline-none"
      />
    </div>
  )
}

export default SearchinCS
