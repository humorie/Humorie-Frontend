import Counselorlist from '../components/counseling/counselorlist'
import Dropdown from '../components/counseling/dropdown'
import FindCounselor from '../components/counseling/findcounselor'
import MySituation from '../components/counseling/mysituation'
import MySymptoms from '../components/counseling/mysymptoms'
import Recommendation from '../components/counseling/recommendation'
import SearchBar from '../components/counseling/searchbar'
import '../index.css'

const Counseling: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen scroll-auto">
      <FindCounselor />
      <div className="h-[40px]"> </div>
      <div className="flex flex-col w-[1006px]">
        <SearchBar />
        <Dropdown />
        <Counselorlist />
      </div>
    </div>
  )
}

export default Counseling
