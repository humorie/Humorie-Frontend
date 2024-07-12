import Table from '../components/counseling/Modal/table'
import Career from '../components/counselor/career'
import Introduction from '../components/counselor/introduction'
import Profile from '../components/counselor/profile'
import '../index.css'

const Counselor: React.FC = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center space-y-[66px] bg-white">
      <div className="mt-[135px] flex w-[1050px] flex-row justify-between">
        <Profile />
        <Introduction />
      </div>
      <Career />
    </div>
  )
}

export default Counselor
