import '../../index.css'
import DropdownGender from './dropdownGender'
import DropdownMethod from './dropdownMethod'
import DropdownViews from './dropdownViews'

const Dropdown = () => {
  return (
    <div className="mb-[52px] mt-[40px] flex flex-row items-center justify-end space-x-[9px]">
      <DropdownMethod />
      <DropdownGender />
      <DropdownViews />
    </div>
  )
}

export default Dropdown
