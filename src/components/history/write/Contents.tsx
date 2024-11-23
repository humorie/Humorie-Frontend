import { useState } from 'react'
import axios from 'axios'

import dayjs from 'dayjs'
import Input from '../../common/Input'
import ConfirmDialog from '../../common/ConfirmDialog'
import Button from '../../common/Button'

const Contents: React.FC = () => {
  const now = dayjs()
  const formattedNow = now.format('YYYY-MM-DD HH:mm')

  const [isOnline, setIsOnline] = useState(true) //온라인, 오프라인 상태
  const [accountName, setAccountName] = useState('') // 고객(상담자) 아이디
  const [location, setLocation] = useState('') // 지역
  const [counselDate, setCounselDate] = useState('') // 상담날짜
  const [symptomCategory, setSymptomCategory] = useState('') // 카테고리
  const [title, setTitle] = useState('') // 제목
  const [symptomDetail, setSymptomDetail] = useState('') // 상담증상
  const [content, setContent] = useState('') // 상담내용

  const [dialog, setDialog] = useState<{ title: string; message: string } | null>(null)

  const handleClickSubmit = async () => {
    const requestBody = {
      isOnline: isOnline,
      accountName: accountName,
      location: location,
      counselDate: formattedNow,
      symptomCategory: symptomCategory,
      title: title,
      symptomDetail: symptomDetail,
      content: content,
    }
    try {
      console.log(requestBody)
      const accessToken = localStorage.getItem('accessToken')
      const response = await axios.post(`/api/admin/consult-detail/1`, requestBody, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      if (response.data.isSuccess) {
        setDialog({ title: response.data.message, message: response.data.result })
      }
    } catch (error) {
      console.log(error)
      if (axios.isAxiosError(error) && error.response) {
        const { code, message } = error.response.data
        // 토큰 정보와 일치하는 사용자가 존재하지 않는 경우
        if (code == 2002) {
          setDialog({ title: 'ErrorCode: ' + String(code), message: message })
        }
        // consultId와 일치하는 상담 내역이 존재하지 않는 경우
        else {
          setDialog({ title: 'ErrorCode: ' + String(code), message: message })
        }
      }
    }
  }
  // 온라인 / 오프라인 토글 이벤트 핸들러
  const toggleIsOnline = (value: boolean) => {
    setIsOnline(value)
  }
  // 상담자 이름 변경 이벤트 핸들러
  const handleAccountNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccountName(event.target.value)
  }
  // 지역 이벤트 핸들러
  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  }
  // 상담날짜이벤트 핸들러
  const handleCounselDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCounselDate(event.target.value)
  }
  // 카테고리 변경 이벤트 핸들러
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSymptomCategory(event.target.value)
  }
  // 제목 변경 이벤트 핸들러
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  // 상담증상 변경 이벤트 핸들러
  const handleSymptomChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSymptomDetail(event.target.value)
  }
  // 상담내용 변경 이벤트 핸들러
  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
  }

  return (
    <div className="mt-[170px] flex h-auto w-full flex-col items-start justify-center bg-white px-[170px] text-black">
      {/* 온라인, 오프라인 선택 버튼 */}
      <div className="mb-[34px] flex flex-row gap-[16px]">
        <Button
          label="온라인"
          size="Large"
          color={isOnline ? 'pink' : 'gray'} // 강조: 온라인일 때 핑크
          onClick={() => toggleIsOnline(true)}
        />
        <Button
          label="오프라인"
          size="Large"
          color={!isOnline ? 'pink' : 'gray'} // 강조: 오프라인일 때 핑크
          onClick={() => toggleIsOnline(false)}
        />
      </div>

      {/* 정보입력칸 */}
      <div className="bodysmmedium mb-[108px] flex h-[241px] w-[536px] flex-col items-stretch justify-evenly rounded border border-gray-200 bg-gray-100 px-[40px]">
        <div className="flex flex-row items-center justify-between ">
          고객 아이디
          <Input type="Text" btnLabel="" placeholder="" onChange={handleAccountNameChange} />
        </div>
        <div className="flex flex-row items-center justify-between ">
          지역
          <Input type="Text" btnLabel="" placeholder="" onChange={handleLocationChange} />
        </div>
        <div className="flex flex-row items-center justify-between ">
          상담날짜
          <Input
            type="Text"
            btnLabel=""
            placeholder=""
            value={formattedNow}
            onChange={handleCounselDateChange}
          />
        </div>
      </div>

      <div className="mb-[340px] flex h-auto w-full flex-col gap-[30px]">
        {/* 카테고리 */}
        <div className="relative w-full">
          <input
            className="bodylsemibold h-auto w-full rounded-lg border border-gray-500 bg-white p-[40px]"
            placeholder="카테고리를 입력해 주세요"
            value={symptomCategory}
            onChange={handleCategoryChange}
            maxLength={100}
          />
          <p className="bodylregular absolute bottom-[40px] right-[50px] text-gray-400">
            {symptomCategory.length}자/{100}자
          </p>
        </div>

        {/* 제목 */}
        <div className="relative w-full">
          <input
            className="bodylsemibold h-auto w-full rounded-lg border border-gray-500 bg-white p-[40px] pr-[150px]"
            placeholder="제목을 입력해 주세요"
            value={title}
            onChange={handleTitleChange}
            maxLength={100}
          />
          <p className="bodylregular absolute bottom-[40px] right-[50px] text-gray-400">
            {title.length}자/{100}자
          </p>
        </div>

        {/* 상담증상 */}
        <div className="relative w-full">
          <textarea
            className="bodylsemibold h-[257px] w-full rounded-lg border border-gray-500 bg-white p-[40px] pr-[150px]"
            placeholder="상담증상을 입력해 주세요"
            value={symptomDetail}
            onChange={handleSymptomChange}
            maxLength={100}
          />
          <p className="bodylregular absolute bottom-[40px] right-[50px] text-gray-400">
            {symptomDetail.length}자/{100}자
          </p>
        </div>

        {/* 상담내용 */}
        <div className="relative w-full">
          <textarea
            className="bodylsemibold h-[257px] w-full rounded-lg border border-gray-500 bg-white p-[40px] pr-[150px]"
            placeholder="상담내용을 입력해 주세요"
            value={content}
            onChange={handleContentChange}
            maxLength={1000}
          />
          <p className="bodylregular absolute bottom-[40px] right-[50px] text-gray-400">
            {content.length}자/{1000}자
          </p>
        </div>
      </div>

      {/* 등록 버튼 */}
      <button
        className="hover:contents-gray-50 active:contents-white mb-[260px] flex h-[94px] w-full cursor-pointer items-center justify-center rounded-[10px] bg-pink-400 text-white hover:bg-primary-700 active:bg-primary-800"
        onClick={handleClickSubmit}>
        <div className="smsemibold contents-center contents-white">등록</div>
      </button>
      {dialog && (
        <ConfirmDialog
          title={dialog.title}
          message={dialog.message}
          onClose={() => setDialog(null)}
          path="/history"
        />
      )}
    </div>
  )
}

export default Contents
