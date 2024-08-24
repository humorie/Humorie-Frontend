import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Header from '../components/header/Header'
import Footer from '../components/Footer'

interface NoticeDetails {
  id: number
  author: string
  viewCount: number
  createdDate: string
  createdTime: string
  title: string
  content: string
  importance: boolean
}

interface LinkedNotice {
  id: number
  title: string
}

interface NoticeResponse {
  currentNotice: NoticeDetails
  previousNotice: LinkedNotice | null
  nextNotice: LinkedNotice | null
}

const CustomerServicePost: React.FC = () => {
  const [notice, setNotice] = useState<NoticeDetails>()
  const [page, setPage] = useState<NoticeResponse>()
  const navigate = useNavigate()
  const { id } = useParams<string>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/notice/${id}`)
        setNotice(response.data.currentNotice)
        setPage(response.data)
        console.log('특정 공지사항 API 결과', response.data.currentNotice)
      } catch (error) {
        console.log('특정 공지사항 API 에러: ', error)
      }
    }
    fetchData()
  }, [id])

  return (
    <div className="flex h-auto w-[1440px] flex-col items-center justify-center bg-white text-black">
      <Header />
      <div className="relative h-[450px] w-[1440px] text-center text-black">
        <img
          src="/src/assets/images/customerService/cs_rending_image1.svg"
          alt="렌딩이미지"
          className="h-full w-full"
        />
        <div className="xlbold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">
          공지사항
        </div>
      </div>

      {/* 헤더 */}
      <div className="mt-[100px] flex h-auto w-[1100px] flex-col gap-[40px]">
        <p className="smsemibold flex items-center justify-start self-stretch text-center">
          {notice?.title}
        </p>
        <div className="flex flex-row items-center justify-between self-stretch">
          <div className="flex flex-row gap-[8px]">
            <img
              className="h-[62px] w-[62px]"
              src="/src/assets/images/icon/icon_person_gray.svg"
              alt="프로필 사진"
            />
            <div className="flex flex-col items-start justify-evenly">
              <p className="bodylregular">{notice?.author}</p>
              <div className="flex flex-row items-center justify-center gap-[14px]">
                <div className="bodymdregular flex flex-row items-center justify-center gap-[14px] text-gray-500">
                  <img
                    className="h-[24px] w-[24px]"
                    src="/src/assets/images/icon/icon_eye_gray.svg"
                    alt="조회수"
                  />
                  {notice?.viewCount}
                </div>
                <div className="bodymdregular flex flex-row items-center justify-center gap-[14px] text-gray-500">
                  <img
                    className="h-[24px] w-[24px]"
                    src="/src/assets/images/icon/icon_time_gray.svg"
                    alt="작성일"
                  />
                  {notice?.createdDate} {notice?.createdTime}
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-[27] w-[27px]"
            src="/src/assets/images/icon/icon_list_gray.svg"
            alt="목록으로"
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="flex border-t border-gray-400" />
      </div>

      {/* 본문 */}
      <div className="bodymdmedium h-[500px] w-[1100px] py-[80px]">{notice?.content}</div>

      {/* 풋터 */}
      <div className="mb-[100px] w-[1100px]">
        {page?.previousNotice && (
          <div className="flex h-[62px] items-center justify-start border-t border-gray-400">
            <div className="flex flex-row items-center justify-center">
              <p className="bodymdmedium mr-[28px] text-gray-500">이전글</p>
              <p
                className="bodysmregular cursor-pointer"
                onClick={() => navigate(`/customerservice/${page.previousNotice?.id}`)}>
                {page.previousNotice.title}
              </p>
            </div>
          </div>
        )}
        <div className="flex items-center justify-start border-t border-gray-400" />
        {page?.nextNotice && (
          <div className="flex h-[62px] items-center justify-start border-b border-gray-400">
            <div className="flex flex-row items-center justify-center">
              <p className="bodymdmedium mr-[28px] text-gray-500">다음글</p>
              <p
                className="bodysmregular cursor-pointer"
                onClick={() => navigate(`/customerservice/${page.nextNotice?.id}`)}>
                {page.nextNotice.title}
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default CustomerServicePost
