interface SearchinModalProps {
  onSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchinModal: React.FC<SearchinModalProps> = ({ onSearchInputChange }) => {
  return (
    <div className="my-[32px] flex h-[68px] w-[500px] items-center justify-center space-x-[36px] bg-gray-50 px-[24px] py-[19px]">
      <img src="src/assets/images/counseling/search.svg" alt="search icon" />
      <input
        type="text"
        placeholder="나의 상황이나 증상을 검색해보세요!"
        className="bodylregular w-[388px] bg-gray-50 text-gray-500 placeholder:text-gray-500 focus:outline-none"
        onChange={onSearchInputChange}
      />
    </div>
  )
}

export default SearchinModal
