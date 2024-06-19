import React, { useState } from 'react'
import Menu from './Menu'

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const menuItems = [
    { id: 1, label: '서비스 보기' },
    { id: 2, label: '상담사 보기' },
    { id: 3, label: '상담 후기 보기' },
  ]
  const menuItems2 = [
    { id: 1, label: '로그인' },
    { id: 2, label: '회원가입' },
  ]

  const handleClickMenu = () => {
    setShowMenu(!showMenu)
  }

  const handleClickProfile = () => {
    setShowProfile(!showProfile)
  }

  const handleCloseMenu = () => {
    setShowMenu(false)
    setShowProfile(false)
  }

  return (
    <div className="absolute left-0 top-0 flex h-[60px] w-screen flex-col items-center justify-center bg-white">
      <div className="relative h-[60px] w-[1100px] " onMouseLeave={handleCloseMenu}>
        {/* 로고 */}
        <img
          className="absolute left-[20px] top-0 cursor-pointer"
          src="/src/assets/images/header&footer/headerlogo.svg"
          alt="HeaderLogo"
        />
        {/* 헤더 목록 */}
        <div className="bodysmbold absolute left-[220px] top-0 flex items-start justify-start text-center text-gray-800 ">
          <div className="flex h-[60px] w-[100px] items-center justify-center">
            <div
              className="w-[84px] cursor-pointer hover:text-primary-800"
              onClick={handleClickMenu}>
              상담하기
            </div>
            {showMenu && <Menu items={menuItems} />}
          </div>
          <div className="flex h-[60px] w-[100px] items-center justify-center ">
            <div className="w-[84px] cursor-pointer hover:text-primary-800">상담내역</div>
          </div>
          <div className="flex h-[60px] w-[100px] items-center justify-center">
            <div className="w-[84px] cursor-pointer hover:text-primary-800">커뮤니티</div>
          </div>
          <div className="flex h-[60px] w-[100px] items-center justify-center">
            <div className="w-[84px] cursor-pointer hover:text-primary-800">서비스소개</div>
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
          {showProfile && <Menu items={menuItems2} />}
        </div>
      </div>
      <div className="w-screen border-b border-gray-100" />
    </div>
  )
}

export default Header
