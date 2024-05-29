import Career from '../components/counselor/career'
import Introduction from '../components/counselor/introduction'
import Profile from '../components/counselor/profile'
import '../index.css'

const Counselor: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen scroll-auto space-y-[66px]">
      <div className="flex flex-row justify-between w-[1050px] mt-[135px]">
        <Profile />
        <Introduction />
      </div>
      <Career />
    </div>
  )
}

export default Counselor
