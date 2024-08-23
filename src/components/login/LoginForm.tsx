import React, { useEffect, useState } from 'react'
import '../../index.css'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import axios from 'axios'

const LoginForm = () => {
  const navigate = useNavigate()
  const [accountName, setAccountName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [intervalId, setIntervalId] = useState<number | null>(null)

  // access token 자동 갱신 함수
  const refreshAccessToken = async () => {
    try {
      console.log('토큰 갱신 시도 중...')
      // 로컬 스토리지에서 refresh token을 가져옴.
      const refreshToken = localStorage.getItem('refreshToken')
      if (!refreshToken) {
        throw new Error('Refresh token이 없습니다.')
      }

      // refresh token을 사용하여 새로운 access token을 요청함.
      const response = await axios.post(
        '/api/account/issue/token',
        {}, // 요청 본문이 빈 객체인지 확인
        {
          headers: {
            refresh_token: refreshToken,
          },
        },
      )
      console.log('토큰 갱신 응답:', response.data)

      if (response.data.isSuccess) {
        const result = response.data.result
        // 새로운 access token과 refresh token을 로컬 스토리지에 저장.
        if (result) {
          const { accessToken, refreshToken: newRefreshToken } = result
          localStorage.setItem('accessToken', accessToken)
          localStorage.setItem('refreshToken', newRefreshToken)
          console.log('토큰 갱신 성공:', { accessToken, newRefreshToken })
        } else {
          console.error('토큰 갱신 실패:', response.data.message)
          navigate('/login')
        }
      } else {
        console.error('토큰 갱신 실패:', response.data.message)
        navigate('/login')
      }
    } catch (error) {
      console.error('토큰 갱신 오류:', error)
      navigate('/login')
    }
  }

  const startTokenRefreshInterval = () => {
    // 기존의 인터벌을 클리어하고 새로운 인터벌을 설정
    if (intervalId) {
      clearInterval(intervalId)
    }
    const id = setInterval(refreshAccessToken, 29 * 60 * 1000)
    setIntervalId(id)
  }

  // 로그인 버튼 클릭 핸들러
  const handleLoginButtonClick = async () => {
    try {
      const response = await axios.post('/api/account/login', {
        accountName,
        password,
      })

      // 로그인 성공 시 토큰 저장
      if (response.data.isSuccess) {
        const result = response.data.result

        if (result && typeof result === 'object') {
          const { accessToken, refreshToken } = result
          localStorage.setItem('accessToken', accessToken)
          localStorage.setItem('refreshToken', refreshToken)
          console.log('로그인 성공:', { accessToken, refreshToken })

          navigate('/')

          startTokenRefreshInterval() // 로그인 후 토큰 갱신 설정
        } else {
          setErrorMessage(
            response.data.message ||
              '아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.',
          )
        }
      }
    } catch (error) {
      console.error('로그인 오류:', error)
      setErrorMessage(
        '아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.',
      )
    }
  }

  useEffect(() => {
    // 컴포넌트가 언마운트될 때 인터벌 클리어
    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [intervalId])

  // 로그인 상태가 유지되면 토큰 갱신을 시작하도록 설정
  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      startTokenRefreshInterval() // 로그인 후 또는 페이지 리프레시 후 토큰 갱신 설정
    }
  }, [])

  // 회원가입 버튼
  const handleJoinButtonClick = () => {
    navigate('/join')
  }

  // 아이디 찾기 버튼
  const handleFindIdButtonClick = () => {
    navigate('/findid')
  }

  // 비밀번호 찾기 버튼
  const handleFindPwButtonClick = () => {
    navigate('/findpw')
  }

  // 고객센터 버튼
  const handleCustomerServiceClick = () => {
    navigate('/customerservice')
  }

  // 이용약관 버튼
  const handlePolicyClick = () => {
    navigate('/policy')
  }

  // 엔터키 눌렀을 때 로그인 시도
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLoginButtonClick()
    }
  }

  return (
    <div className="relative flex h-[960px] w-screen items-center justify-center bg-gray-50">
      <div className="absolute top-0 h-[960px] w-[1100px] bg-gray-50">
        <div className="absolute left-1/2 top-[128px] h-[35px] w-[312px] -translate-x-1/2">
          <img
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            src="src/assets/images/login/logo_login.svg"
            alt=""
          />
        </div>
        <div className="absolute left-1/2 top-[203px] flex -translate-x-1/2 flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[6px]">
              <div className="flex h-[48px] w-[312px] shrink-0 flex-row items-center justify-center gap-[6px] border-solid border-gray-200 bg-white focus-within:border-primary-700 focus-within:bg-primary-100">
                <div className="relative box-border flex h-12 w-full flex-row items-center justify-center gap-[6px] border-solid border-gray-200 bg-white text-left text-sm text-gray-300">
                  <div className="flex h-12 w-[312px] items-center justify-center gap-1 border border-gray-200 bg-white focus-within:border-primary-700 focus-within:bg-primary-100">
                    <img
                      className="relative h-5 w-5 shrink-0 overflow-hidden"
                      src="src/assets/images/login/person_empty.svg"
                      alt=""
                    />
                    <input
                      type="email"
                      value={accountName}
                      onChange={(e) => setAccountName(e.target.value)}
                      onKeyDown={handleKeyDown} // 엔터키 이벤트 추가
                      className="bodysmmedium h-full w-[254px] border-none bg-white p-2 pl-[0.125rem] text-gray-900 placeholder-gray-200 caret-primary-700 outline-none focus:bg-primary-100 focus:outline-none"
                      placeholder="아이디"
                    />
                  </div>
                </div>
              </div>
              <div className="font-bodysm-medium relative box-border flex h-12 w-full flex-row items-center justify-center gap-[6px] border-solid border-gray-200 bg-white text-left text-sm text-gray-300">
                <div className="flex h-12 w-[312px] items-center justify-center gap-1 border border-gray-200 bg-white focus-within:border-primary-700 focus-within:bg-primary-100">
                  <img
                    className="relative h-5 w-5 shrink-0 overflow-hidden"
                    src="src/assets/images/login/lock_empty.svg"
                    alt=""
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={handleKeyDown} // 엔터키 이벤트 추가
                    className="bodysmmedium h-full w-[254px] border-none bg-white p-2 pl-[0.125rem] text-gray-900 placeholder-gray-200 caret-primary-700 outline-none focus:bg-primary-100 focus:outline-none"
                    placeholder="비밀번호"
                  />
                </div>
              </div>
            </div>
            <div className="relative ml-1 flex w-full flex-row items-center justify-start gap-[6px] text-gray-400">
              <input
                type="checkbox"
                className="caret-color:primary-700 h-[13.5px] w-[13.5px] appearance-none border-[1.5px] border-gray-400
                          bg-gray-50 bg-center checked:border-0 checked:bg-[url('src/assets/images/login/login_check.svg')]"
              />
              <div className="bodysmmedium relative ml-1.5 inline-block w-[286px] shrink-0">
                로그인 상태 유지
              </div>
            </div>

            {/* 에러 메시지 표시 */}
            {errorMessage && (
              <div className="text-status-3 bodyxsmedium whitespace-pre-line">{errorMessage}</div>
            )}

            <Button label="로그인" size="XLarge" color="pink" onClick={handleLoginButtonClick} />
          </div>

          <div className="flex h-[18px] w-[312px] flex-row items-start justify-start gap-[76px]">
            <button
              type="button"
              className="bodysmsemibold flex h-[18px] w-[68px] shrink-0 items-center justify-center whitespace-nowrap border-none bg-transparent text-gray-400 hover:text-primary-700 focus:outline-none"
              onClick={handleJoinButtonClick}>
              회원가입
            </button>

            <div className="flex flex-row items-center justify-start gap-[16px]">
              <button
                type="button"
                className="bodysmsemibold flex h-[18px] w-[68px] shrink-0 items-center justify-center whitespace-nowrap border-none bg-transparent text-center text-gray-400 hover:text-primary-700 focus:outline-none"
                onClick={handleFindIdButtonClick}>
                아이디 찾기
              </button>
              <img src="src/assets/images/login/divide_login.svg" alt="" />
              <button
                type="button"
                className="bodysmsemibold flex h-[18px] w-[68px] shrink-0 items-center justify-center whitespace-nowrap border-none bg-transparent text-center text-gray-400 hover:text-primary-700 focus:outline-none"
                onClick={handleFindPwButtonClick}>
                비밀번호 찾기
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-[894px] flex -translate-x-1/2 flex-row items-center justify-start gap-[16px]">
          <button
            type="button"
            className="bodysmsemibold flex h-[20px] w-[49px] shrink-0 flex-row items-center justify-center whitespace-nowrap border-none bg-transparent text-center text-gray-400 hover:text-primary-700 focus:outline-none"
            onClick={handleCustomerServiceClick}>
            고객센터
          </button>
          <img src="src/assets/images/login/divide_login.svg" alt="" />
          <button
            type="button"
            className="bodysmsemibold flex h-[20px] w-[49px] shrink-0 flex-row items-center justify-center whitespace-nowrap border-none bg-transparent text-center text-gray-400 hover:text-primary-700 focus:outline-none"
            onClick={handlePolicyClick}>
            이용약관
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
