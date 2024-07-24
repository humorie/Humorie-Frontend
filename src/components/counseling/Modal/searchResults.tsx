import { useTagsStore } from '../../../store/store'

const mockData = [
  { id: 1, symptom: '부모-자녀 갈등' },
  { id: 2, symptom: '자녀 간 갈등' },
  { id: 3, symptom: '자녀 양육' },
  { id: 4, symptom: '자녀 성격' },
]

interface SearchResult {
  id: number
  symptom: string
}

interface SearchResultsProps {
  query: string
}

const SearchResults: React.FC<SearchResultsProps> = ({ query }) => {
  const filteredResults = mockData.filter((item) => item.symptom.includes(query))
  const { addTag, removeTag, selectedSymptoms, addSelectedSymptom, removeSelectedSymptom } =
    useTagsStore()

  const handleSymptomClick = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      removeSelectedSymptom(symptom)
      removeTag(symptom)
    } else {
      addSelectedSymptom(symptom)
      addTag({ content: symptom })
    }
  }

  return (
    <div className="flex h-[363px] w-full flex-col">
      {filteredResults.length > 0 ? (
        filteredResults.map((result) => (
          <div
            key={result.id}
            className={`bodylmedium  cursor-pointer justify-center border-b border-gray-300 bg-white px-[20px] py-[14px]
            ${selectedSymptoms.includes(result.symptom) ? 'text-primary-600' : 'text-gray-500'}`}
            onClick={() => handleSymptomClick(result.symptom)}>
            <div className="flex justify-between hover:text-primary-600">
              {result.symptom}
              {selectedSymptoms.includes(result.symptom) && (
                <img src="src/assets/images/counseling/icon_checkmark.svg" alt="selected" />
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center">검색 결과가 없습니다</div>
      )}
    </div>
  )
}

export default SearchResults
