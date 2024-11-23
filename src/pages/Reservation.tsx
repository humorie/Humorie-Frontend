import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/common/Footer'
import Calendar from '../components/reservation/Calendar'
import CardReservation from '../components/reservation/CardReservation'
import Header from '../components/reservation/Header'
import Place from '../components/reservation/Place'
import TimeTable from '../components/reservation/TimeTable'
import { useAuthStore } from '../store/store'
import LoginForm from '../components/login/LoginForm'

const Reservation: React.FC = () => {
  const { counselorId } = useParams()
  const numCounselorId = Number(counselorId)
  const { isLoggedIn, checkAuth } = useAuthStore()

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
          <Header counselorId={numCounselorId} />
          <div className="flex w-[1440px] flex-col items-start justify-start bg-gray-50 px-[170px] pb-[150px] pt-[80px]">
            <div className="flex flex-row items-start justify-center gap-[90px]">
              <div className="flex flex-col items-center justify-center gap-[110px]">
                <Calendar counselorId={numCounselorId} />
                <TimeTable counselorId={numCounselorId} />
                <Place />
              </div>
              <CardReservation counselorId={numCounselorId} />
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
