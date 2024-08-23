import Footer from '../components/Footer'
import Header from '../components/header/Header'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import MakeTagModal from '../components/review/MyTagModal'
import { useModalStore } from '../store/store'
import axios from 'axios'
import Tag from '../components/Tag'

// 태그의 타입 정의
interface TagType {
  tagId: number
  tagName: string
  tagContent: string
}

const Review: React.FC = () => {
  const { consultId } = useParams()
  const [title, setTitle] = useState('') // 리뷰 제목
  const [contents, setContents] = useState('') // 리뷰 콘텐츠
  const [rating, setRating] = useState(0) // 별점
  const [tags, setTags] = useState<TagType[]>([]) // 태그 목록
  const { modalOpen, openModal, closeModal } = useModalStore()
  const navigate = useNavigate()

  if (!consultId) {
    return <div>Error: ConsultId ID is missing</div>
  }

  // 리뷰작성 API 요청
  const handleSubmit = async () => {
    if (!title || !contents || !rating) {
      alert('리뷰 내용을 확인해 주세요')
      return
    }

    try {
      const accessToken = localStorage.getItem('accessToken')
      const response = await axios.post(
        `/api/review/${consultId}?consultId=${consultId}`,

        {
          title: title,
          content: contents,
          rating: rating,
        },

        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      if (response.data.isSuccess) {
        console.log('리뷰작성 API 결과: ', response.data)
        navigate('/review/complete')
      }
    } catch (error) {
      console.error('리뷰작성 API 에러: ', error)
      alert('예약 요청에 실패했습니다. 다시 시도해 주세요.')
    }
  }

  // 마이태그 API 요청
  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken')
      try {
        const response = await axios.get('/api/review/tags', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        if (response.data.isSuccess) {
          console.log('태그 목록 조회 API 결과: ', response.data.result)
          setTags(response.data.result)
        }
      } catch (error) {
        console.log('태그 목록 조회 API 에러: ', error)
      }
    }
    fetchData()
  }, [])

  // 태그 삭제 핸들러
  const handleTagDelete = async (tagId: number) => {
    const accessToken = localStorage.getItem('accessToken')
    try {
      const response = await axios.delete(`/api/review/tag/${tagId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      if (response.data.isSuccess) {
        // 태그 삭제 성공 시, 태그 목록에서 해당 태그를 제거
        setTags((prevTags) => prevTags.filter((tag) => tag.tagId !== tagId))
        console.log('태그 삭제 API 결과: ', response.data.message)
      }
    } catch (error) {
      console.error('태그 삭제 API 에러: ', error)
    }
  }

  // 제목 변경 이벤트 핸들러
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  // 컨텐츠 변경 이벤트 핸들러
  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value)
  }
  // 태그 클릭 이벤트 핸들러
  const handleTagClick = (title: string, content: string) => {
    setTitle(title)
    setContents(content)
  }

  // 별점 클릭 이벤트 핸들러
  const handleStarClick = (index: number) => {
    setRating(index + 1) // 클릭한 별의 인덱스까지 별점 설정
  }
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <Header />
      <div className="contents-black flex w-[1060px] flex-col items-center justify-center bg-white text-black">
        <div className="mb-[85px] mt-[180px] flex h-[204px] w-full flex-col items-center justify-evenly rounded-lg bg-pink-50">
          <div className="smbold contents-center">{}이번상담 어떠셨나요?</div>
          <div className="flex h-[30px] w-[330px] flex-row gap-[45px]">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={
                  index < rating
                    ? '/src/assets/images/icon/icon_star_pink.svg'
                    : '/src/assets/images/icon/icon_star_gray.svg'
                }
                className="h-[30px] w-[30px] cursor-pointer"
                alt={index < rating ? '별_핑크' : '별_회색'}
                onClick={() => handleStarClick(index)}
              />
            ))}
          </div>
        </div>
        {/* 제목 */}
        <div className="relative w-full">
          <input
            className="bodylsemibold h-24 w-full rounded-lg border border-gray-500 bg-white p-[40px]"
            placeholder="제목을 입력해 주세요"
            value={title}
            onChange={handleTitleChange}
            maxLength={100}
          />
          <p className="xsregular absolute bottom-[30px] left-[930px] text-gray-400">
            {title.length}/{100}자
          </p>
        </div>

        {/* 컨텐츠 */}
        <div className="relative w-full">
          <textarea
            className="bodylsemibold mt-[52px] h-[665px] w-full rounded-lg border border-gray-500 bg-white p-[40px]"
            placeholder="내용을 입력해주세요"
            value={contents}
            onChange={handleContentChange}
            maxLength={500}
          />
          <p className="xsregular absolute left-[930px] top-[650px] text-gray-400">
            {contents.length}/{500}자
          </p>
        </div>

        {/* 마이태그 */}
        <div className="mt-[40px] flex w-full flex-row items-center justify-between self-stretch text-black">
          {/* 태그 */}
          <div className="flex flex-row items-center justify-center gap-[12px]">
            {tags.slice(0, 5).map((tag) => (
              <Tag
                key={tag.tagId}
                label={tag.tagName}
                onClick={() => handleTagClick(tag.tagName, tag.tagContent)}
                onDelete={() => handleTagDelete(tag.tagId)}
              />
            ))}
          </div>

          {/* 태그 제작 버튼 */}
          <Button
            label="자주쓰는 문구 등록하러 가기"
            size="XLarge"
            color="gray"
            onClick={openModal}
          />
        </div>
        {/* 태그 입력 모달 */}
        <MakeTagModal isOpen={modalOpen} onClose={closeModal} />
        {/* 등록 버튼 */}
        <div
          className="hover:contents-gray-50 active:contents-white mb-[356px] mt-[122px] flex h-[94px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-pink-400 px-[35px] py-[15px] text-white hover:bg-primary-700 active:bg-primary-800"
          onClick={handleSubmit}>
          <div className="smsemibold contents-center contents-white">등록</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Review
