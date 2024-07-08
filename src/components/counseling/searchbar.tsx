import '../../index.css'

const SearchBar = () => {
  return (
    <div className="flex flex-row bg-gray-50 px-[23px] py-[19px]">
      <img src="src/assets/images/counseling/search.svg" alt="search" className="mr-[36px]" />
      <input
        className="placeholder:text-gray-500 bodylregular w-[1006px] h-[30px] bg-gray-50"
        placeholder="이름, 상황으로 전문가를 검색해보세요!"
        type="search"
      />
    </div>
  )
}

export default SearchBar
