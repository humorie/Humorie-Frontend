import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Menu from './Menu'

const Header: React.FC = () => {
  const [showProfile, setShowProfile] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const refreshToken = localStorage.getItem('refreshToken')
  const accessToken = localStorage.getItem('accessToken')

  const navigate = useNavigate()

  // 리프레시 토큰 유/무에 따라 헤더의 로그인 메뉴 동적으로 변환
  const menuItems = isLoggedIn
    ? [{ id: 1, label: '로그아웃', onClick: () => handleClickLogout() }]
    : [
        { id: 1, label: '로그인', onClick: () => navigate('/login') },
        { id: 2, label: '회원가입', onClick: () => navigate('/join') },
      ]

  // 리프레시 토큰 검사
  useEffect(() => {
    setIsLoggedIn(!!refreshToken) // 비어있지 않는 문자열이면 true, 즉 리프레시 토큰이 발급된 상태 라면 true
  })

  // 로그아웃 API
  const handleClickLogout = async () => {
    const refreshToken = localStorage.getItem('refreshToken')
    if (refreshToken) {
      try {
        const response = await axios.delete('/api/account/logout', {
          headers: {
            Authorization: accessToken,
            refresh_token: refreshToken,
          },
        })

        if (response.data.isSuccess) {
          // 서버에서 로그아웃 성공 응답을 받았을 경우
          localStorage.removeItem('refreshToken')
          setIsLoggedIn(false)
          navigate('/')
        } else {
          // 로그아웃 실패 처리
          console.error('Logout failed:', response.status)
        }
      } catch (error) {
        console.error('Logout error:', error)
      }
    }
  }

  // 프로필 아이콘 클릭 이벤트
  const handleClickProfile = () => {
    setShowProfile(!showProfile)
  }

  const handleCloseMenu = () => {
    setShowProfile(false)
  }

  return (
    <div className="fixed top-0 z-10 flex h-[60px] w-screen flex-col items-center justify-center bg-white">
      <div className="relative h-[60px] w-[1100px]" onMouseLeave={handleCloseMenu}>
        {/* 로고 */}
        <img
          className="absolute left-[20px] top-0 cursor-pointer"
          src="/src/assets/images/header&footer/headerlogo.svg"
          alt="HeaderLogo"
          onClick={() => navigate('/')}
        />
        {/* 헤더 목록 */}
        <nav className="bodysmbold absolute left-[220px] top-0 flex items-start justify-start text-center text-gray-800">
          <div className="flex h-[60px] w-[100px] items-center justify-center">
            <div
              className="w-[84px] cursor-pointer hover:text-primary-800"
              onClick={() => navigate('/counseling')}>
              상담하기
            </div>
          </div>
          <div className="flex h-[60px] w-[100px] items-center justify-center ">
            <div
              className="w-[84px] cursor-pointer hover:text-primary-800"
              onClick={() => navigate('/history')}>
              상담내역
            </div>
          </div>
          <div className="flex h-[60px] w-[100px] items-center justify-center">
            <div
              className="w-[84px] cursor-pointer hover:text-primary-800"
              onClick={() => alert('미구현')}>
              커뮤니티
            </div>
          </div>
          <div className="flex h-[60px] w-[100px] items-center justify-center">
            <div
              className="w-[84px] cursor-pointer hover:text-primary-800"
              onClick={() => navigate('/info')}>
              서비스소개
            </div>
          </div>
        </nav>
        {/* 프로필 */}
        <div className="absolute left-[1068px] top-0 flex h-[60px] w-[60px] cursor-pointer items-center justify-center">
          <img
            className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center opacity-60"
            src="/src/assets/images/header&footer/profile.svg"
            alt="profile"
            onClick={handleClickProfile}
          />
          {showProfile && <Menu items={menuItems} />}
        </div>
      </div>

      <div className="w-full border-b border-gray-100" />
    </div>
  )
}

export default Header
