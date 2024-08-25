import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../Button'
import Input from '../Input'
import { useNavigate } from 'react-router-dom'

const MemberInfo: React.FC = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [email, setEmail] = useState('')
  const [id, setId] = useState('')
  const [emailSubscription, setEmailSubscription] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordCheckError, setPasswordCheckError] = useState('')
  const [totalPoints, setTotalPoints] = useState(0) //보유포인트조회

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
          const { email, accountName, name } = response.data.result
          setEmail(email)
          setId(accountName)
          setName(name)
        } else {
          setError('회원 정보를 불러오는 데 실패했습니다.')
        }
      } catch (err) {
        setError('API 요청에 실패했습니다.')
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [])

  // 비밀번호 유효성 검사
  const isValidPassword = (password: string): boolean => {
    // Regular expression to check for 8-16 characters, including letters, numbers, and special characters
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
    return passwordRegex.test(password)
  }

  // 회원정보 업데이트 api
  const handleUpdate = async () => {
    setPasswordError('')
    setPasswordCheckError('')

    if (!isValidPassword(newPassword)) {
      setPasswordError('비밀번호 형식을 확인해주세요.')
    }

    if (newPassword !== passwordCheck || passwordCheck === '') {
      setPasswordCheckError('비밀번호가 일치하지 않습니다.')
      return
    }

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
        setSuccess('회원정보가 업데이트 되었습니다.')
        setNewPassword('')
        setPasswordCheck('')

        // 업데이트 성공 시 5초간 메세지
        setTimeout(() => setSuccess(''), 5000)
      } else {
        setError('회원정보 업데이트에 실패했습니다.')
      }
    } catch (err) {
      setError('회원정보 업데이트에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  // 보유포인트 조회 API 호출

  useEffect(() => {
    const fetchPoints = async () => {
      try {
        const token = localStorage.getItem('accessToken')
        const response = await axios.get('/api/points/total', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.data.isSuccess) {
          setTotalPoints(response.data.result.totalPoints)
        } else {
          setError('포인트 조회에 실패했습니다.')
        }
      } catch (err) {
        setError('API 요청에 실패했습니다.')
      } finally {
        setLoading(false)
      }
    }

    fetchPoints()
  }, [])

  // //전체포인트내역조회 api
  // useEffect(() => {
  //   const fetchPoints = async () => {
  //     try {
  //       const token = localStorage.getItem('accessToken')
  //       const response = await axios.get('/api/points/all', {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })

  //       if (response.data.isSuccess) {
  //         setPointsData(response.data.result)
  //       } else {
  //         console.log('포인트 내역 조회에 실패했습니다.')
  //       }
  //     } catch (err) {
  //       console.log('API 요청에 실패했습니다.')
  //     }
  //   }

  //   fetchPoints()
  // }, [])

  // 회원 탈퇴하기 버튼
  const handleDeleteAccountButtonClick = () => {
    navigate('/deleteaccount')
  }

  //
  return (
    <div className="relative mt-[60px] h-[900px] w-[1100px] bg-gray-50 text-center text-gray-900">
      {/* 회원정보 */}
      <div className="bodylsemibold absolute left-[394px] top-[80px] inline-block w-[312px] ">
        회원정보
      </div>
      <div className="absolute left-[110px] top-[150px] flex flex-col items-start justify-start border-[1px] border-gray-200 bg-gray-100 ">
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-b border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium relative">이메일</div>
          </div>
          <div className="bodysmmedium relative flex w-[312px] shrink-0 items-center">{email}</div>
          <div className="bodyxsregular relative text-gray-500">이메일은 변경할 수 없습니다.</div>
        </div>
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-b border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium relative">아이디</div>
          </div>
          <div className="bodysmmedium relative flex w-[312px] shrink-0 items-center">{id}</div>
          <div className="bodyxsregular relative text-gray-500">아이디는 변경할 수 없습니다.</div>
        </div>
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-b border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium relative">이름</div>
            <div className="bodymdsemibold relative text-status-2">*</div>
          </div>
          <div className="box-border flex h-12 w-[312px] flex-row items-center justify-center border-solid border-gray-200 bg-white text-sm">
            <Input
              type="Primary"
              placeholder="이름"
              btnLabel=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="bodyxsregular relative text-gray-500">공개적으로 사용될 이름입니다.</div>
        </div>
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-b border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium relative">새 비밀번호</div>
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
          <div className="bodyxsregular relative text-gray-500">
            새 비밀번호는 8~16자, 영문자, 숫자, 특수문자를 모두 포함합니다.
          </div>
        </div>
        <div className="box-border flex h-24 w-[880px] flex-row items-center justify-start gap-[8px] border-b border-gray-200 px-12 py-6">
          <div className="flex w-[120px] flex-row items-center justify-start">
            <div className="bodymdmedium relative">새 비밀번호 확인</div>
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
            <div className="bodymdmedium relative">이메일 수신</div>
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
                <div className="bodymdsemibold relative">동의</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[394px] top-[766px] flex h-12 w-[312px] flex-row items-center justify-center rounded-md bg-primary-600 text-white">
        <Button label="업데이트 하기" size="XLarge" color="pink" onClick={handleUpdate} />
        <div>
          {success && (
            <div className="fixed bottom-[40px] left-[170px] flex h-[56px] w-auto items-center rounded-md bg-gray-900 p-[24px] text-white shadow-md">
              <div className="bodymdmedium flex h-[24px] w-[207px] items-center">
                <span>{success}</span>
              </div>
              <button
                className="ml-[16px] flex items-center justify-center p-0"
                onClick={() => setSuccess('')}>
                <img
                  src="src/assets/images/mypage/close.svg"
                  alt=""
                  className="h-[24px] w-[24px] object-contain"
                />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 포인트 내역 */}

      <div className="bodylsemibold absolute left-[394px] top-[964px] inline-block w-[312px]">
        포인트 내역
      </div>
      <div className="absolute left-[110px] top-[1034px] box-border flex w-[880px] flex-col items-start justify-center gap-[8px] border-[1px] border-gray-200 bg-gray-100 p-6">
        <div className="bodymdsemibold relative text-black">보유 포인트</div>
        <div className="text-13xl flex flex-row items-center justify-center gap-[3px] text-right">
          <div className="mdbold relative text-primary-700">{totalPoints.toLocaleString()}</div>
          <div className="xssemibold relative text-gray-600">P</div>
        </div>
      </div>

      {/* 결제 내역 */}
      {/* <div className="bodylsemibold absolute left-[394px] top-[1670px] inline-block w-[312px]">
        결제 내역
      </div>

      <div className="absolute left-[110px] top-[1740px] box-border flex w-[880px] flex-col items-start justify-center gap-[8px] border-[1px] border-gray-200 bg-gray-100 p-6 text-left text-black">
        <div className="bodymdsemibold relative inline-block w-[137px]">총 결제 금액</div>
        <div className="flex flex-row items-center justify-center gap-[3px] text-right">
          <div className="mdbold relative">80,000</div>
          <div className="xssemibold relative text-gray-600">원</div>
        </div>
      </div>

      <div className="bodymdmedium absolute left-[110px] top-[1892px] flex flex-col items-start justify-start border-[1px] border-gray-200 bg-white text-gray-600">
        <div className="box-border flex h-[78px] w-[880px] flex-row items-center justify-start gap-[16px] border-b border-gray-200 bg-gray-600 p-6 text-white">
          <input
            type="checkbox"
            className="mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-white 
                  bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
          />
          <div className="relative flex w-[84px] shrink-0 items-center justify-center">날짜</div>
          <div className="relative flex-1">항목</div>
          <div className="flex w-40 flex-row items-center justify-center text-left">
            <div className="relative">승인번호</div>
          </div>
          <div className="relative flex w-14 shrink-0 items-center justify-center">결제수단</div>
          <div className="relative flex w-14 shrink-0 items-center justify-center">상태</div>
          <div className="flex w-[77px] flex-row items-center justify-center text-right">
            <div className="relative">금액</div>
          </div>
        </div>
        <div className="box-border flex h-[78px] w-[880px] flex-row items-center justify-start gap-[16px] border-b border-gray-200 p-6">
          <input
            type="checkbox"
            className="caret-color:primary-700 mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400 
                  bg-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
          />
          <div className="bodysmmedium relative flex w-[84px] shrink-0 items-center text-left">
            2024. 00. 00
          </div>
          <div className="relative flex w-[279px] shrink-0 items-center justify-center text-gray-900">
            상담 예약
          </div>
          <div className="bodysmmedium flex w-40 flex-row items-center justify-center">
            <div className="relative flex-1">000000000000000000</div>
          </div>
          <div className="relative flex w-14 shrink-0 items-center justify-center">하나카드</div>
          <div className="relative flex w-14 shrink-0 items-center justify-center">결제완료</div>
          <div className="bodymdsemibold flex w-[77px] flex-row items-center justify-center gap-[1px] text-right text-gray-900">
            <div className="relative">50,000</div>
            <div className="bodysmsemibold relative text-gray-600">원</div>
          </div>
        </div>
        <div className="box-border flex h-[78px] w-[880px] flex-row items-center justify-start gap-[16px] border-b border-gray-200 p-6">
          <input
            type="checkbox"
            className="caret-color:primary-700 mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400 
                  bg-white bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
          />
          <div className="bodysmmedium relative flex w-[84px] shrink-0 items-center text-left">
            2024. 00. 00
          </div>
          <div className="relative flex w-[279px] shrink-0 items-center justify-center text-gray-900">
            상담 예약
          </div>
          <div className="bodysmmedium flex w-40 flex-row items-center justify-center">
            <div className="relative flex-1">000000000000000000</div>
          </div>
          <div className="relative flex w-14 shrink-0 items-center justify-center">현대카드</div>
          <div className="relative flex w-14 shrink-0 items-center justify-center">결제완료</div>
          <div className="bodymdsemibold flex w-[77px] flex-row items-center justify-center gap-[1px] text-right text-gray-900">
            <div className="relative">30,000</div>
            <div className="bodysmsemibold relative text-gray-600">원</div>
          </div>
        </div>
      </div>

      <div className="absolute left-[394px] top-[2276px] flex h-12 w-[312px] flex-row items-center justify-center rounded-md bg-gray-200 text-gray-500">
        <Button
          label="회원 탈퇴하기"
          size="XLarge"
          color="gray"
          onClick={handleDeleteAccountButtonClick}
        />
      </div> */}
    </div>
  )
}

export default MemberInfo
