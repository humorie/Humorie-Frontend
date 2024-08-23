import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Calendar from '../components/reservation/Calendar'
import CardReservation from '../components/reservation/CardReservation'
import Header from '../components/reservation/Header'
import Place from '../components/reservation/Place'
import TimeTable from '../components/reservation/TimeTable'
import { useAuthStore } from '../store/store'
import LoginForm from '../components/login/LoginForm'

const Reservation: React.FC = () => {
  const { counselorId } = useParams()
  const { isLoggedIn, checkAuth } = useAuthStore((state) => ({
    isLoggedIn: state.isLoggedIn,
    checkAuth: state.checkAuth,
  }))

  if (!counselorId) {
    return <div>Error: Counselor ID is missing</div>
  }

  // 리프레시 토큰검사
  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <div className="flex flex-col items-center justify-center">
      {isLoggedIn ? (
        <>
          <Header counselorId={counselorId} />
          <div className="flex w-[1440px] flex-col items-start justify-start bg-gray-50 px-[170px] pb-[150px] pt-[80px]">
            <div className="flex flex-row items-start justify-center gap-[90px]">
              <div className="flex flex-col items-center justify-center gap-[110px]">
                <Calendar counselorId={counselorId} />
                <TimeTable counselorId={counselorId} />
                <Place />
              </div>
              <CardReservation counselorId={counselorId} />
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <LoginForm />
      )}
    </div>
  )
}

export default Reservation
