import Footer from '../components/Footer'
import Calendar from '../components/reservation/Calendar'
import CardReservation from '../components/reservation/CardReservation'
import Header from '../components/reservation/Header'
import Place from '../components/reservation/Place'
import TimeTable from '../components/reservation/TimeTable'

const Reservation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div className="flex w-[1440px] flex-col items-start justify-start bg-gray-50 px-[170px] pb-[150px] pt-[80px]">
        <div className="flex flex-row items-start justify-center gap-[90px]">
          <div className="flex flex-col items-center justify-center gap-[110px]">
            <Calendar />
            <TimeTable />
            <Place />
          </div>
          <CardReservation />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Reservation
