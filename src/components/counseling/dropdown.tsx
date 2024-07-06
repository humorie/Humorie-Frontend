import '../../index.css'
import DropdownGender from './dropdownGender'
import DropdownMethod from './dropdownMethod'
import DropdownRegion from './dropdownRegion'
import DropdownViews from './dropdownViews'

const Dropdown = () => {
  return (
    <div className="flex flex-row items-center justify-end space-x-[9px] mt-[40px] mb-[52px]">
      <DropdownMethod />
      <DropdownRegion />
      <DropdownGender />
      <DropdownViews />
    </div>
  )
}

export default Dropdown
