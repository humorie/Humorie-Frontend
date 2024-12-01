/* eslint-disable import/no-named-as-default-member */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../common/Button'
import Input from '../common/Input'
import { useFetchUser } from '../../hooks/useFetchUser'

const UserInfo: React.FC = () => {
  const user = useFetchUser()

  const [name, setName] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [emailSubscription, setEmailSubscription] = useState(false)

  const [toastState, setToastState] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const [nameError, setNameerror] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordCheckError, setPasswordCheckError] = useState('')

  const Toast = () => {
    useEffect(() => {
      const timer = setTimeout(() => {
        setToastState(false)
      }, 5000)
      return () => {
        clearTimeout(timer)
      }
    }, [])

    return (
      <div className="fixed bottom-10 left-[170px] flex h-[56px] w-auto items-center rounded-md bg-gray-900 p-[24px] text-white shadow-md">
        <div className="bodymdmedium flex h-[24px] w-[207px] items-center">
          <span>{toastMessage}</span>
        </div>
        <button
          className="ml-[16px] flex items-center justify-center p-0"
          onClick={() => setToastMessage('')}>
          <img
            src="src/assets/images/mypage/close.svg"
            alt=""
            className="h-[24px] w-[24px] object-contain"
            onClick={() => setToastState(false)}
          />
        </button>
      </div>
    )
  }

  // 회원정보 업데이트 api
  const handleClickUpdate = async () => {
    try {
      const token = localStorage.getItem('accessToken')
      const response = await axios.patch(
        '/api/mypage/update',
        {
          name,
          newPassword,
          passwordCheck,
          emailSubscription,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )

      if (response.data.isSuccess) {
        setToastMessage('회원정보가 업데이트 되었습니다.')
        setToastState(true)
        setNameerror('')
        setNewPassword('')
        setPasswordCheck('')
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { code, message } = error.response.data
        // 토큰이 만료되었거나 토큰 정보가 올바르지 않은 경우
        if (code == 2002) {
          console.log(message)
        }
        // 이름을 입력하지 않은 경우
        else if (code == 2010) {
          setNameerror(message)
        }
        // 이름 형식이 올바르지 않은 경우
        else if (code == 2009) {
          setNameerror(message)
        }
        // 새 비밀번호 필드에 값이 있고, 비밀번호 확인 필드가 비어있는 경우
        else if (code == 2021) {
          setPasswordCheckError(message)
        }
        // 새 비밀번호 필드가 비어있고, 비밀번호 확인 필드에만 값이 있는 경우
        else if (code == 2022) {
          setPasswordError(message)
        }
        // 비밀번호 형식이 올바르지 않는 경우
        else if (code == 2007) {
          setPasswordError(message)
          setPasswordCheckError(message)
        }
        // 비밀번호와 비밀번호 확인 필드의 값이 다른 경우
        else {
          setPasswordError(message)
          setPasswordCheckError(message)
        }
      }
    }
  }

  return (
    <div className="flex w-[1100px] flex-col items-center justify-center bg-gray-50 pb-[150px] pt-[80px] text-center text-gray-900">
      {/* 회원정보 */}
      <div className="bodylsemibold mb-[40px] mt-[80px] flex">회원정보</div>
      <div className=" flex flex-col items-start justify-start border-[1px] border-gray-200 bg-gray-100 ">
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-b border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium ">이메일</div>
          </div>
          <div className="bodysmmedium  flex w-[312px] shrink-0 items-center">{user?.email}</div>
          <div className="bodyxsregular  text-gray-500">이메일은 변경할 수 없습니다.</div>
        </div>
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-b border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium ">아이디</div>
          </div>
          <div className="bodysmmedium  flex w-[312px] shrink-0 items-center">
            {user?.accountName}
          </div>
          <div className="bodyxsregular  text-gray-500">아이디는 변경할 수 없습니다.</div>
        </div>
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-b border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium ">이름</div>
            <div className="bodymdsemibold  text-status-2">*</div>
          </div>
          <div className="flex h-12 w-[312px] flex-col items-start justify-center gap-1.5 border-gray-200 focus-within:border-primary-700 ">
            <Input
              type="Primary"
              placeholder="이름"
              btnLabel=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div>{nameError && <div className="bodyxsmedium text-status-3">{nameError}</div>}</div>
          </div>
          <div className="bodyxsregular  text-gray-500">공개적으로 사용될 이름입니다.</div>
        </div>
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-b border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium ">새 비밀번호</div>
          </div>
          <div className="flex h-12 w-[312px] flex-col items-start justify-center gap-1.5 border-gray-200 focus-within:border-primary-700 ">
            <Input
              type="Password"
              placeholder="비밀번호"
              btnLabel=""
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <div>
              {passwordError && <div className="bodyxsmedium text-status-3">{passwordError}</div>}
            </div>
          </div>
          <div className="bodyxsregular  text-gray-500">
            새 비밀번호는 8~16자, 영문자, 숫자, 특수문자를 모두 포함합니다.
          </div>
        </div>
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-b border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium ">새 비밀번호 확인</div>
          </div>
          <div className="flex h-12 w-[312px] flex-col items-start justify-center gap-1.5 border-gray-200 focus-within:border-primary-700 ">
            <Input
              type="Password"
              placeholder="비밀번호 확인"
              btnLabel=""
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
            <div>
              {passwordCheckError && (
                <div className="bodyxsmedium text-status-3">{passwordCheckError}</div>
              )}
            </div>
          </div>
        </div>
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium ">이메일 수신</div>
          </div>
          <div className="flex flex-row items-center justify-end text-center text-gray-400">
            <div className="flex flex-row items-start justify-start gap-[4px]">
              <input
                type="checkbox"
                checked={emailSubscription}
                onChange={(e) => setEmailSubscription(e.target.checked)}
                className="caret-color:primary-700 mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400
                          bg-gray-100 bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className="flex flex-row items-start justify-start">
                <div className="bodymdsemibold ">동의</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-[40px] flex h-12 w-[312px] flex-row items-center justify-center rounded-md bg-primary-600 text-white">
        <Button label="업데이트 하기" size="XLarge" color="pink" onClick={handleClickUpdate} />
      </div>

      {/* 토스트 */}
      {toastState && <Toast />}
    </div>
  )
}

export default UserInfo
