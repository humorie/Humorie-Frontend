import { useEffect, useState } from 'react'
import { useTagsStore } from '../../../store/store'
import axios from 'axios'
import { childsymptoms, couplesymptoms, familysymptoms, privatesymptoms } from './table'

const SearchResults: React.FC<{ query: string }> = ({ query }) => {
  const [results, setResults] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { addTag, removeTag, selectedSymptoms, addSelectedSymptom, removeSelectedSymptom } =
    useTagsStore()

  useEffect(() => {
    if (query) {
      setLoading(true)
      try {
        const allSymptoms = [
          ...privatesymptoms,
          ...couplesymptoms,
          ...familysymptoms,
          ...childsymptoms,
        ]
        const filteredResults = allSymptoms.filter((symptom) =>
          symptom.toLowerCase().includes(query.toLowerCase()),
        )
        setResults(filteredResults)
        setLoading(false)
      } catch (e) {
        setError('Error occurred while filtering symptoms')
        setLoading(false)
      }
    } else {
      setResults([])
    }
  }, [query])

  const handleSymptomClick = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      removeSelectedSymptom(symptom)
      removeTag(symptom)
    } else {
      addSelectedSymptom(symptom)
      addTag({ content: symptom })
    }
  }

  if (error) {
    return <div>API 요청 에러</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex h-[363px] w-full flex-col">
      {results.length > 0 ? (
        results.map((symptom, index) => (
          <div
            key={index}
            className={`bodylmedium  cursor-pointer justify-center border-b border-gray-300 bg-white px-[20px] py-[14px]
            ${selectedSymptoms.includes(symptom) ? 'text-primary-600' : 'text-gray-500'}`}
            onClick={() => handleSymptomClick(symptom)}>
            <div className="flex justify-between hover:text-primary-600">
              {symptom}
              {selectedSymptoms.includes(symptom) && (
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
