import { useEffect } from 'react'
import Contents from '../components/history/Contents'
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import GoToLogin from '../components/history/GoToLogin'
import { useAuthStore } from '../store/store'

const History: React.FC = () => {
  const { isLoggedIn, checkAuth } = useAuthStore()

  // 리프레시 토큰검사
  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <Header />
      {isLoggedIn ? <Contents /> : <GoToLogin />}
      <Footer />
    </div>
  )
}

export default History
