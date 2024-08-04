import React, { useState } from 'react'
import '../../index.css'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import axios from 'axios'

const LoginForm = () => {
  const navigate = useNavigate()
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

  const [accountName, setAccountName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  // 로그인 버튼 클릭 핸들러
  const handleLoginButtonClick = async () => {
    try {
      const response = await axios.post('/api/account/login', {
        accountName,
        password,
      })

      if (response.data.isSuccess) {
        // 로그인 성공 시 토큰 저장
        const { accessToken, refreshToken } = response.data.result
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
        navigate('/')

        console.log('로그인 성공:', {
          accessToken,
          refreshToken,
        })
      } else {
        // 실패 시 에러 메시지 처리
        setErrorMessage(
          response.data.message ||
            '아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.',
        )
      }
    } catch (error) {
      console.error('Login Error:', error)
      setErrorMessage(
        '아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.',
      )
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
