import React, { useState } from 'react'
import axios from 'axios'
import Button from '../components/common/Button'
import Input from '../components/common/Input'
import { useFetchUser } from '../hooks/useFetchUser'
import { useNavigate } from 'react-router-dom'

const DeleteAccount: React.FC = () => {
  const navigate = useNavigate()

  const user = useFetchUser()

  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

  // 회원탈퇴
  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem('accessToken')
      const response = await axios.delete('/api/mypage/delete', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { password },
      })

      if (response.data.isSuccess) {
        setIsSuccess(true)
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')

        navigate('/') // 성공 시 홈 페이지로 이동
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const { code, message } = error.response.data
        // 토큰이 만료되었거나 토큰 정보가 올바르지 않은 경우
        if (code == 2002) {
          setMessage(message)
        }
        // 비밀번호를 입력하지 않은 경우
        else if (code == 2022) {
          setMessage(message)
        }
        // 입력한 비밀번호의 형식이 올바르지 않은 경우
        else if (code == 2005) {
          setMessage(message)
        }
        // 입력한 비밀번호와 기존 비밀번호와 다른 경우
        else {
          setMessage(message)
        }
      }
    }
  }

  return (
    <div className="flex h-screen w-screen justify-center bg-gray-50">
      <div className="fixed left-0 top-0 h-[60px] w-full bg-gray-800">
        <img
          className="absolute left-1/2 top-1/4 h-[30px] w-[30px]"
          src="/src/assets/images/header&footer/logo.svg"
          alt="헤더 로고"
        />
      </div>
      <div className="flex w-[1100] flex-col items-center px-[110px] pb-[40px] pt-[80px]">
        <p className="bodylsemibold mb-[40px] h-[30px] w-full text-center text-gray-900">
          {user?.name}님, 떠나신다니 아쉬워요.
        </p>
        {/* 비밀번호 입력 */}
        <div className="mb-[24px] w-full border-[1px] border-gray-200 bg-gray-100">
          <div className="box-border flex flex-row items-center justify-start gap-[8px] border-solid border-gray-200 px-[48px] py-[24px]">
            <div className="flex w-[120px] flex-row items-center justify-start">
              <p className="bodymdmedium text-gray-900">비밀번호</p>
              <p className="bodymdsemibold text-status-4">*</p>
            </div>
            <div className="bodysmmedium box-border flex h-[48px] w-[312px] flex-row items-center justify-center border-gray-200 bg-white">
              <Input
                type="Password"
                placeholder="비밀번호"
                btnLabel=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="bodyxsregular text-gray-500">
              <p>계정은 즉시 탈퇴 처리되나,</p>
              <p>작성하신 상담 후기가 자동으로 삭제되지는 않습니다.</p>
            </div>
          </div>
        </div>
        {!isSuccess && message && (
          <div className=" box-border flex h-[66px] w-full flex-row items-center justify-center border-[1px] border-solid border-primary-800 bg-primary-100 p-6 text-center">
            <div className="bodyxsregular  text-primary-800">{message}</div>
          </div>
        )}
        <div className="absolute bottom-[40px]">
          <Button label="회원 탈퇴하기" size="XLarge" color="pink" onClick={handleDeleteAccount} />
        </div>
      </div>
    </div>
  )
}

export default DeleteAccount
