import '../../index.css'
import Button from '../Button'
import Input from '../Input'
import { useNavigate } from 'react-router-dom'
import { useState, useCallback } from 'react'
import axios from 'axios'

const JoinForm = () => {
  const navigate = useNavigate()
  // 고객센터 버튼
  const handleCustomerServiceClick = () => {
    navigate('/customerservice')
  }

  // 이용약관 버튼
  const handlePolicyClick = () => {
    navigate('/policy')
  }

  // input 유효성 검사
  // 이메일, 아이디, 비밀번호, 비밀번호확인, 이름
  const [email, setEmail] = useState<string>('')
  const [id, setId] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  // 오류메세지 상태 저장
  const [emailMessage, setEmailMessage] = useState<string>('')
  const [idMessage, setIdMessage] = useState<string>('')
  const [passwordMessage, setPasswordMessage] = useState<string>('')
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState<string>('')
  const [nameMessage, setNameMessage] = useState<string>('')

  // 유효성 검사
  const [isEmail, setIsEmail] = useState<boolean>(false)
  const [isId, setIsId] = useState<boolean>(false)
  const [isPassword, setIsPassword] = useState<boolean>(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false)
  const [isName, setIsName] = useState<string>('')

  // 이메일
  const onChangeEmail = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const emailCurrent = e.target.value
    setEmail(emailCurrent)

    if (!emailRegex.test(emailCurrent) && emailCurrent.length > 0) {
      setEmailMessage('이메일 형식을 확인해주세요.')
      setIsEmail(false)
    } else {
      setEmailMessage('')
      setIsEmail(true)
    }
  }, [])

  // 아이디
  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const idCurrent = e.target.value
    setId(idCurrent)

    if (idCurrent.trim().length === 0 && idCurrent.length > 0) {
      setIdMessage('아이디를 입력해주세요.')
      setIsId(false)
    } else {
      setIdMessage('')
      setIsId(true)
    }
  }, [])

  // 비밀번호
  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
    const passwordCurrent = e.target.value
    setPassword(passwordCurrent)

    if (!passwordRegex.test(passwordCurrent) && passwordCurrent.length > 0) {
      setPasswordMessage('비밀번호 형식을 확인해주세요.')
      setIsPassword(false)
    } else {
      setPasswordMessage('')
      setIsPassword(true)
    }
  }, [])

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value
      setPasswordConfirm(passwordConfirmCurrent)

      if (password === passwordConfirmCurrent && passwordConfirmCurrent.length > 0) {
        setPasswordConfirmMessage('비밀번호가 일치합니다.')
        setIsPasswordConfirm(true)
      } else {
        setPasswordConfirmMessage('')
        setIsPasswordConfirm(false)
      }
    },
    [password],
  )

  // 이름
  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const nameCurrent = e.target.value
    setName(nameCurrent)

    if (nameCurrent.trim().length === 0 && nameCurrent.length > 0) {
      setNameMessage('이름을 입력해주세요.')
    } else {
      setNameMessage('')
    }
  }, [])

  // 핸드폰 번호
  const onChangePhoneNumber = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const phoneCurrent = e.target.value
    setPhoneNumber(phoneCurrent)
  }, [])

  // 다음 버튼 : 약관 · 개인정보 수집 및 이용 동의 체크박스
  const [isChecked1, setIsChecked1] = useState<boolean>(false)
  const [isChecked2, setIsChecked2] = useState<boolean>(false)
  const [isChecked3, setIsChecked3] = useState<boolean>(false)
  const [isChecked4, setIsChecked4] = useState<boolean>(false)

  const [checkboxMessage1, setCheckboxMessage1] = useState<string>('')
  const [checkboxMessage2, setCheckboxMessage2] = useState<string>('')
  const [checkboxMessage3, setCheckboxMessage3] = useState<string>('')
  const [checkboxMessage4, setCheckboxMessage4] = useState<string>('')

  // checkbox 상태 업데이트
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const checked = e.target.checked

    switch (type) {
      case '1':
        setIsChecked1(checked)
        if (checked) setCheckboxMessage1('')
        break
      case '2':
        setIsChecked2(checked)
        if (checked) setCheckboxMessage2('')
        break
      case '3':
        setIsChecked3(checked)
        if (checked) setCheckboxMessage3('')
        break
      case '4':
        setIsChecked4(checked)
        if (checked) setCheckboxMessage4('')
        break
    }
  }

  // 다음 버튼 클릭 시 유효성 검사
  const handleSubmit = async () => {
    let isValid = true

    // 체크박스 유효성 검사
    if (!isChecked1) {
      setCheckboxMessage1('이용약관에 체크해 주세요.')
      isValid = false
    }
    if (!isChecked2) {
      setCheckboxMessage2('개인정보 처리방침에 체크해 주세요.')
      isValid = false
    }
    if (!isChecked3) {
      setCheckboxMessage3('개인정보 수집 및 이용 동의에 체크해 주세요.')
      isValid = false
    }
    if (!isChecked4) {
      setCheckboxMessage4('개인정보 제 3자 제공 동의에 체크해 주세요.')
      isValid = false
    }

    // input 유효성 검사
    if (!email) {
      setEmailMessage('이메일을 입력해주세요.')
      isValid = false
    } else if (emailMessage) {
      isValid = false
    }

    if (!id) {
      setIdMessage('아이디를 입력해주세요.')
      isValid = false
    } else if (!isId) {
      isValid = false
    }

    if (!password) {
      setPasswordMessage('비밀번호를 입력해주세요.')
      setIsPassword(false)
      isValid = false
    } else if (passwordMessage) {
      isValid = false
    }

    if (!passwordConfirm) {
      setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.')
      isValid = false
    } else if (passwordConfirmMessage) {
      isValid = false
    }
    if (!name) {
      setNameMessage('이름을 입력해주세요.')
      isValid = false
    } else if (nameMessage) {
      isValid = false
    }

    // 회원가입 API 호출
    // if (isValid) {
    //   try {
    //     const response = await axios.post('http://localhost:8080/account/join', {
    //       email: email,
    //       accountName: email, // 여기에 알맞은 값을 넣어주세요
    //       password: password,
    //       passwordCheck: passwordConfirm,
    //       name: name,
    //       phoneNumber: phoneNumber, // 전화번호를 추가하세요
    //     })

    //     console.log('회원가입 성공:', response.data)
    //     navigate('joinsuccess')
    //     // 회원가입 성공 후 동작
    //   } catch (error) {
    //     console.error('회원가입 실패:', error)
    //     // 에러 처리
    //   }
    // }
  }

  return (
    <div className="relative flex h-[2010px] w-screen items-center justify-center overflow-hidden bg-gray-50">
      <div className="absolute top-0 inline-flex h-[60px] w-full flex-col items-center justify-center">
        <div className="flex h-[60px] flex-col items-center justify-center self-stretch backdrop-blur-3xl">
          <img
            className="shrink-0 self-stretch"
            src="src/assets/images/login/logo_long.svg"
            alt=""
          />
        </div>
      </div>
      <div className="absolute left-0 top-0 h-[60px] w-[1440px] border-b border-gray-800" />
      <div className="absolute top-[60px] h-[1950px] w-[1100px]">
        {/* 약관,개인정보 수집 및 동의 */}
        <div className="bodylsemibold absolute left-[394px] top-[80px] w-[312px] text-center text-gray-900">
          약관 · 개인정보 수집 및 이용 동의
        </div>

        <div className="absolute left-[110px] top-[150px] inline-flex flex-col items-start justify-start border border-gray-200 bg-gray-100">
          <div className="inline-flex h-20 w-[890px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="relative flex h-6 shrink grow basis-0 items-center justify-start">
              <div className="bodymdmedium flex flex-col text-gray-900">이용약관</div>
              <div className="bodymdsemibold text-status-4">*</div>
              <div className="absolute top-full">
                {checkboxMessage1 && (
                  <div className="bodyxsmedium text-status-4">{checkboxMessage1}</div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <input
                type="checkbox"
                checked={isChecked1}
                onChange={(e) => handleCheckboxChange(e, '1')}
                className="caret-color:primary-700 h-[20px] w-[20px] appearance-none border-2 border-gray-400
                          bg-gray-100 bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className="flex items-start justify-start">
                <div className="bodymdsemibold text-center text-base text-gray-400">동의</div>
              </div>
              <button
                type="button"
                className="flex h-6 w-[112px] items-center justify-center rounded-[10px] border-none bg-transparent focus:outline-none">
                <span className="bodymdmedium text-gray-600 hover:text-primary-700 ">
                  자세히 보기
                </span>
              </button>
            </div>
          </div>

          <div className="inline-flex h-20 w-[890px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="relative flex h-6 shrink grow basis-0 items-center justify-start">
              <div className="bodymdmedium text-gray-900">개인정보 처리방침</div>
              <div className="bodymdsemibold text-status-4 text-center">*</div>
              <div className="absolute top-full">
                {checkboxMessage2 && (
                  <div className="bodyxsmedium text-status-4">{checkboxMessage2}</div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <input
                type="checkbox"
                checked={isChecked2}
                onChange={(e) => handleCheckboxChange(e, '2')}
                className="caret-color:primary-700 h-[20px] w-[20px] appearance-none border-2 border-gray-400
                          bg-gray-100 bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className="flex items-start justify-start">
                <div className="bodymdsemibold text-center text-base text-gray-400">동의</div>
              </div>
              <button
                type="button"
                className="flex h-6 w-[112px] items-center justify-center rounded-[10px] border-none bg-transparent focus:outline-none">
                <span className="bodymdmedium text-gray-600 hover:text-primary-700 ">
                  자세히 보기
                </span>
              </button>
            </div>
          </div>
          <div className="inline-flex h-20 w-[890px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="relative flex h-6 shrink grow basis-0 items-center justify-start">
              <div className="bodymdmedium text-gray-900">개인정보 수집 및 이용 동의</div>
              <div className="bodymdsemibold text-status-4">*</div>
              <div className="absolute top-full">
                {checkboxMessage3 && (
                  <div className="bodyxsmedium text-status-4">{checkboxMessage3}</div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <input
                type="checkbox"
                checked={isChecked3}
                onChange={(e) => handleCheckboxChange(e, '3')}
                className="caret-color:primary-700 h-[20px] w-[20px] appearance-none border-2 border-gray-400
                          bg-gray-100 bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className="flex items-start justify-start">
                <div className="bodymdsemibold text-center text-base text-gray-400">동의</div>
              </div>
              <button
                type="button"
                className="flex h-6 w-[112px] items-center justify-center rounded-[10px] border-none bg-transparent focus:outline-none">
                <span className="bodymdmedium text-gray-600 hover:text-primary-700 ">
                  자세히 보기
                </span>
              </button>
            </div>
          </div>
          <div className="inline-flex h-20 w-[890px] items-center justify-start gap-2  border-gray-200 px-12 py-6">
            <div className="relative flex h-6 shrink grow basis-0 items-center justify-start">
              <div className="bodymdmedium text-gray-900">개인정보 제 3자 제공 동의</div>
              <div className="bodymdsemibold text-status-4">*</div>
              <div className="absolute top-full">
                {checkboxMessage4 && (
                  <div className="bodyxsmedium text-status-4">{checkboxMessage4}</div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-end gap-2">
              <input
                type="checkbox"
                checked={isChecked4}
                onChange={(e) => handleCheckboxChange(e, '4')}
                className="caret-color:primary-700 h-[20px] w-[20px] appearance-none border-2 border-gray-400
                          bg-gray-100 bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
              />
              <div className="flex items-start justify-start">
                <div className="bodymdsemibold text-center text-base text-gray-400">동의</div>
              </div>
              <button
                type="button"
                className="flex h-6 w-[112px] items-center justify-center rounded-[10px] border-none bg-transparent focus:outline-none">
                <span className="bodymdmedium text-gray-600 hover:text-primary-700 ">
                  자세히 보기
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 회원가입 */}
        <div className="bodylsemibold absolute left-[394px] top-[580px] w-[312px] text-center text-gray-900">
          회원가입
        </div>
        <div className="absolute left-[110px] top-[650px] inline-flex flex-col items-start justify-start border border-gray-200 bg-gray-100">
          <div className="inline-flex h-24 w-[880px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="flex h-6 w-[115px] items-center justify-start">
              <div className="bodymdmedium text-gray-900">이메일</div>
              <div className="bodymdsemibold text-center text-red-400">*</div>
            </div>
            <div className="flex h-12 w-[312px] flex-col justify-center gap-1 border-gray-200 focus-within:border-primary-700">
              <Input type="Primary" placeholder="이메일" btnLabel="" onChange={onChangeEmail} />
              <div>
                {emailMessage && (
                  <div
                    className={`bodyxsmedium text-status-3 mt-1 ${isEmail ? 'success' : 'text-status-3'}`}>
                    {emailMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="inline-flex h-24 w-[880px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="flex h-6 w-[115px] items-center justify-start">
              <div className="bodymdmedium text-gray-900">아이디</div>
              <div className="bodymdsemibold mr-16 text-center text-red-400">*</div>
            </div>
            <div className="flex h-12 w-[312px] flex-col justify-center gap-1.5 border-gray-200 focus-within:border-primary-700">
              <Input type="Button" placeholder="아이디" btnLabel="중복검사" onChange={onChangeId} />
              <div>
                {idMessage && <div className="bodyxsmedium text-status-3">{idMessage}</div>}
              </div>
            </div>

            <div className="bodyxsregular text-center text-gray-500">
              6자 이상, 영어 소문자와 숫자만 허용합니다.
            </div>
          </div>
          <div className="inline-flex h-24 w-[880px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="flex h-6 w-[115px] items-center justify-start">
              <div className="bodymdmedium text-gray-900">비밀번호</div>
              <div className="bodymdsemibold text-center text-red-400">*</div>
            </div>
            <div className="flex h-12 w-[312px] flex-col justify-center gap-1.5 border-gray-200 focus-within:border-primary-700">
              <Input
                type="Password"
                placeholder="비밀번호"
                btnLabel=""
                onChange={onChangePassword}
              />
              <div>
                {passwordMessage && (
                  <div className={`bodyxsmedium ${isPassword ? 'success' : 'text-status-3'}`}>
                    {passwordMessage}
                  </div>
                )}
              </div>
            </div>
            <div className="bodyxsregular text-center text-gray-500">
              8~16자 이상, 영문자, 숫자, 특수문자를 모두 포함합니다.
            </div>
          </div>
          <div className="inline-flex h-24 w-[880px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="flex h-6 w-[115px] items-center justify-start">
              <div className="bodymdmedium text-gray-900">비밀번호 확인</div>
              <div className="bodymdsemibold text-center text-red-400">*</div>
            </div>
            <div className="flex h-12 w-[312px] flex-col justify-center gap-1.5 border-gray-200 focus-within:border-primary-700">
              <Input
                type="Password"
                placeholder="비밀번호 확인"
                btnLabel=""
                onChange={onChangePasswordConfirm}
              />
              <div>
                {passwordConfirmMessage && (
                  <div
                    className={`bodyxsmedium ${isPasswordConfirm ? 'text-primary-600' : 'text-status-3'}`}>
                    {passwordConfirmMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="inline-flex h-24 w-[880px] items-center justify-start gap-2 border-b border-gray-200 px-12 py-6">
            <div className="flex h-6 w-[115px] items-center justify-start">
              <div className="bodymdmedium text-gray-900">이름</div>
              <div className="bodymdsemibold text-center text-red-400">*</div>
            </div>
            <div className="flex h-12 w-[312px] flex-col justify-center gap-1.5 border-gray-200 focus-within:border-primary-700">
              <Input type="Primary" placeholder="이름" btnLabel="" onChange={onChangeName} />
              <div>
                {nameMessage && <div className="bodyxsmedium text-status-3">{nameMessage}</div>}
              </div>
            </div>
            <div className="bodyxsregular text-center text-gray-500">
              공개적으로 사용될 이름입니다.
            </div>
          </div>
        </div>

        {/* 마케팅 수신 동의 */}
        <div className="bodylsemibold absolute left-[394px] top-[1240px] w-[312px] text-center text-gray-900">
          마케팅 수신 동의
        </div>
        <div className="absolute left-[110px] top-[1310px] inline-flex h-20 w-[880px] items-center justify-start gap-2 border border-gray-200 bg-gray-100 px-12 py-6">
          <div className="flex h-6 shrink grow basis-0 items-center justify-start">
            <div className="bodymdmedium text-gray-900">이메일 수신</div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <div className="flex items-start justify-start gap-1">
              <div className="relative h-6 w-6">
                <input
                  type="checkbox"
                  className="caret-color:primary-700 mt-0.5 h-[20px] w-[20px] appearance-none border-2 border-gray-400 
                  bg-gray-100 bg-center checked:border-0 checked:bg-[url('src/assets/images/login/check.svg')]"
                />
              </div>
              <div className="flex items-start justify-start">
                <div className="bodymdsemibold text-center text-gray-400">동의</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-[110px] top-[1430px] inline-flex w-[880px] items-center justify-start gap-8 px-12">
          <div className="flex items-center justify-start gap-2">
            <div className="bodymdmedium w-[120px] text-gray-600">이용목적</div>
            <img src="src/assets/images/login/divide_login.svg" alt="" />
          </div>
          <div className="bodymdmedium shrink grow basis-0 text-gray-400">
            이벤트 및 맞춤 서비스 제공 안내
          </div>
        </div>
        <div className="absolute left-[400px] top-[1742px] inline-flex h-12 w-[312px] items-center justify-center gap-2">
          <Button label="다음" size="XLarge" color="pink" onClick={handleSubmit} />
        </div>
        <div className="absolute left-1/2 top-[1884px] flex -translate-x-1/2 flex-row items-center justify-start gap-[16px]">
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

export default JoinForm
