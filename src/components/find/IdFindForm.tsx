import Button from '../common/Button'
import Input from '../common/Input'
import { useNavigate } from 'react-router-dom'
import React, { useState, useCallback } from 'react'
import axios from 'axios'

const IdFindForm: React.FC = () => {
  const navigate = useNavigate()
  // 로그인 버튼
  const handleLoginClick = () => {
    navigate('/login')
  }

  // 회원가입 버튼
  const handleJoinButtonClick = () => {
    navigate('/join')
  }

  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [foundId, setFoundId] = useState<string>('')

  // 이메일 입력 핸들러
  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }, [])

  // 아이디를 변환하는 함수
  const maskId = (id: string): string => {
    if (id.length <= 3) {
      return id
    }
    const front = id.slice(0, 2)
    const back = id.slice(-1)
    const middle = '*'.repeat(id.length - 3)
    return `${front}${middle}${back}`
  }

  // 아이디찾기 버튼 클릭 핸들러
  const handleFindIdClick = async () => {
    if (!email) {
      setMessage('가입자 정보를 찾을 수 없습니다.')
      setIsSuccess(false)
      return
    }

    try {
      const response = await axios.post('/api/account/find-id', {
        email: email,
      })

      const { isSuccess, result } = response.data

      if (isSuccess) {
        const maskedId = maskId(result)
        setFoundId(maskedId)
        setMessage(`회원님의 아이디는 ${maskedId}입니다.`)
        setIsSuccess(true)
      } else {
        setMessage('가입자 정보를 찾을 수 없습니다.')
        setIsSuccess(false)
      }
    } catch (error) {
      console.error('아이디 찾기 실패:', error)
      setMessage('가입자 정보를 찾을 수 없습니다.')
      setIsSuccess(false)
    }
  }

  return (
    <div className="flex h-[960px] w-screen flex-col items-center bg-gray-50">
      <img className="shrink-0 self-stretch" src="src/assets/images/login/logo_long.svg" alt="" />
      <div className="absolute top-[60px] h-[900px] w-[1100px] items-center justify-center">
        <div className="bodylsemibold absolute left-[394px] top-[80px] h-[30px] w-[312px]  text-center text-gray-900">
          아이디 찾기
        </div>
        <div className="absolute left-[110px] top-[150px] items-center justify-start border-[1px] border-gray-200 bg-gray-100 text-left">
          <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-solid border-gray-200 px-12 py-6">
            <div className="flex w-[120px] flex-row items-center justify-start">
              <div className="bodymdmedium relative text-gray-900">이메일</div>
              <div className="bodymdsemibold relative text-status-4">*</div>
            </div>
            <div className="box-border flex h-12 w-[312px] flex-row items-center justify-center border-solid border-gray-200 bg-white text-sm">
              <Input
                type="Primary"
                placeholder="이메일"
                btnLabel=""
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="bodyxsregular relative text-center text-gray-500">
              가입에 사용한 이메일을 입력해주세요.
            </div>
          </div>
        </div>

        {/* 성공 메시지 */}
        {isSuccess && (
          <div className="relative left-[110px] top-[270px] box-border flex w-[880px] flex-row items-center justify-center border-[1px] border-solid border-point-5 bg-point-6 p-6 text-center">
            <div className="bodyxsregular relative text-gray-800">
              회원님의 아이디는 {foundId}입니다.
            </div>
          </div>
        )}
        {/* 에러 메시지 */}
        {!isSuccess && message && (
          <div className="relative left-[110px] top-[270px] box-border flex w-[880px] flex-row items-center justify-center border-[1px] border-solid border-primary-800 bg-primary-100 p-6 text-center">
            <div className="bodyxsregular relative text-primary-800">{message}</div>
          </div>
        )}

        <div className="absolute left-[394px] top-[746px]">
          <Button label="아이디 찾기" size="XLarge" color="pink" onClick={handleFindIdClick} />
        </div>

        <div className="absolute left-[466px] top-[834px] h-[18px] w-[168px] text-sm text-gray-400">
          <div className="absolute left-[0px] top-[0px] flex h-[18px] w-[68px] flex-row items-center justify-center rounded-lg">
            <button
              type="button"
              className="bodysmsemibold flex h-[18px] w-[68px] flex-row items-center justify-center whitespace-nowrap border-none bg-transparent text-center text-[12px] text-gray-400 hover:text-primary-700 focus:outline-none"
              onClick={handleLoginClick}>
              로그인
            </button>
          </div>
          <img
            className="absolute left-[84px] top-[4px] "
            alt=""
            src="src/assets/images/login/divide_login.svg"
          />
          <div className="absolute left-[100px] top-[0px] flex h-[18px] w-[68px] flex-row items-center justify-center rounded-lg">
            <button
              type="button"
              className="bodysmsemibold flex h-[18px] w-[68px] flex-row items-center justify-center whitespace-nowrap border-none bg-transparent text-center text-[12px] text-gray-400 hover:text-primary-700 focus:outline-none"
              onClick={handleJoinButtonClick}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdFindForm
