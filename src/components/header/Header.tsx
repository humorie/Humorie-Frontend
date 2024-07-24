import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from './Menu'

const Header: React.FC = () => {
  const [showProfile, setShowProfile] = useState(false)
  const navigate = useNavigate()

  const menuItems2 = [
    { id: 1, label: '로그인', onClick: () => navigate('/login') },
    { id: 2, label: '회원가입', onClick: () => navigate('/join') },
  ]

  const handleClickProfile = () => {
    setShowProfile(!showProfile)
  }

  const handleCloseMenu = () => {
    setShowProfile(false)
  }

  return (
    <div className="fixed top-0 z-10 flex h-[60px] w-screen flex-col items-center justify-center bg-white">
      <div className="relative h-[60px] w-[1100px] " onMouseLeave={handleCloseMenu}>
        {/* 로고 */}
        <img
          className="absolute left-[20px] top-0 cursor-pointer"
          src="/src/assets/images/header&footer/headerlogo.svg"
          alt="HeaderLogo"

          onClick={() => navigate('/')}

        />
        {/* 헤더 목록 */}
        <div className="bodysmbold absolute left-[220px] top-0 flex items-start justify-start text-center text-gray-800 ">
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
        </div>
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
