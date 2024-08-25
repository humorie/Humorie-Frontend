import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../Button'
import Input from '../Input'
import { useNavigate } from 'react-router-dom'

const DeleteAccountForm: React.FC = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

  // 회원 정보 조회 api
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('accessToken')
        const response = await axios.get('/api/mypage/get', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.data.isSuccess) {
          const { name } = response.data.result
          setName(name)
        } else {
          console.log('회원 정보를 불러오는 데 실패했습니다.')
        }
      } catch (err) {
        console.log('API 요청에 실패했습니다.')
      }
    }

    fetchUserData()
  }, [])

  // 회원탈퇴 api
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
        console.log('회원 탈퇴가 완료되었습니다.')
        navigate('/') // 성공 시 홈 페이지로 이동
      } else {
        if (response.data.code === 2012) {
          setMessage('비밀번호가 일치하지 않습니다.') // 비밀번호 불일치 시 메시지 설정
        } else {
          setMessage(response.data.message)
        }
        setIsSuccess(false)
      }
    } catch (err) {
      setIsSuccess(false)
      setMessage('API 요청에 실패했습니다.')
    }
  }

  return (
    <div className="flex h-[960px] w-screen flex-col items-center bg-gray-50">
      <img className="shrink-0 self-stretch" src="src/assets/images/login/logo_long.svg" alt="" />
      <div className="absolute top-[60px] h-[900px] w-[1100px] items-center justify-center">
        <div className="bodylsemibold absolute left-[394px] top-[80px] h-[30px] w-[312px]  text-center text-gray-900">
          {name}님, 떠나신다니 아쉬워요.
        </div>
        <div className="absolute left-[110px] top-[150px] items-center justify-start border-[1px] border-gray-200 bg-gray-100 text-left">
          <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-solid border-gray-200 px-12 py-6">
            <div className="flex w-[120px] flex-row items-center justify-start">
              <div className="bodymdmedium relative text-gray-900">비밀번호</div>
              <div className="bodymdsemibold relative text-status-4">*</div>
            </div>
            <div className="box-border flex h-12 w-[312px] flex-row items-center justify-center border-gray-200 bg-white text-sm">
              <Input
                type="Password"
                placeholder="비밀번호"
                btnLabel=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="bodyxsregular relative text-gray-500">
              <p>계정은 즉시 탈퇴 처리되나,</p>
              <p>작성하신 상담 후기가 자동으로 삭제되지는 않습니다.</p>
            </div>
          </div>
        </div>
        <div className="ml-[110px] mt-[270px]">
          {!isSuccess && message && (
            <div className="relative box-border flex h-[66px] w-[880px] flex-row items-center justify-center border-[1px] border-solid border-primary-800 bg-primary-100 p-6 text-center">
              <div className="bodyxsregular relative text-primary-800">{message}</div>
            </div>
          )}
        </div>

        <div className="absolute left-[394px] top-[804px]">
          <Button label="회원 탈퇴하기" size="XLarge" color="pink" onClick={handleDeleteAccount} />
        </div>
      </div>
    </div>
  )
}

export default DeleteAccountForm
