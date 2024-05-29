import '../../index.css'
import DropdownGender from './dropdownGender'
import DropdownMethod from './dropdownMethod'
import DropdownRegion from './dropdownRegion'
import DropdownViews from './dropdownViews'

const Dropdown = () => {
  return (
    <div className="flex flex-row space-x-[21px]">
      <DropdownMethod />
      <DropdownRegion />
      <DropdownGender />
      <DropdownViews />
    </div>
  )
}

export default Dropdown
