import { useNavigate } from 'react-router-dom'
import '../../index.css'
import ButtonPrimary from '../button/button_primary'
import ButtonLine from '../button/button_line'
import CounselorCard from './counselorcard'

const Counselorlist = () => {
  const navigate = useNavigate()
  const onClickConselorhandler = () => {
    navigate('/counseling/counselor')
  }

  return (
    <div className="flex flex-col justify-center items-center mb-[136px]">
      <CounselorCard />
      <CounselorCard />
      <CounselorCard />
      <CounselorCard />
      <CounselorCard />
    </div>
  )
}

export default Counselorlist
