import Counselorlist from '../components/counseling/counselorlist'
import Dropdown from '../components/counseling/dropdown'
import FindCounselor from '../components/counseling/findcounselor'
import MySituation from '../components/counseling/mysituation'
import MySymptoms from '../components/counseling/mysymptoms'
import Recommendation from '../components/counseling/recommendation'
import '../index.css'

const Counseling: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen space-y-[50px] scroll-auto">
      <FindCounselor />
      <div className="flex flex-row w-[1050px] justify-between">
        <div className="flex flex-col space-y-[24px]">
          <MySituation />
          <MySymptoms />
        </div>
        <div className="flex flex-col space-y-[21px]">
          <Dropdown />
          <Recommendation />
          <Counselorlist />
        </div>
      </div>
    </div>
  )
}

export default Counseling
