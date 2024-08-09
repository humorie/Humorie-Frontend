import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import '../../index.css'
import { Fragment } from 'react'
import { useDropdownStore, useFiltersStore } from '../../store/store'

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

const DropdownGender = () => {
  const { selectedDropdowns, setSelectedDropdown } = useDropdownStore()
  const { setGender } = useFiltersStore()
  const selectedGender = selectedDropdowns['gender'] || '성별'

  const handleSelectedGender = (gender: string) => {
    setSelectedDropdown('gender', gender)
    setGender(gender)
  }

  return (
    <Menu as="div" className="relative inline-block">
      <div className="relative">
        <MenuButton
          className={classNames(
            `bodymdregular flex h-[40px] w-[100px] items-center justify-center gap-x-[8px] rounded-[4px] bg-gray-100 p-0 hover:bg-gray-100`,
            selectedGender !== '성별' ? 'text-primary-600' : 'text-gray-700',
          )}>
          {selectedGender}
          <img src="src/assets/images/counseling/dropdown.svg" alt="dropdown" />
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95">
        <MenuItems className="absolute z-10 mt-2 w-[100px] origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col items-center py-1">
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    'bodymdregular w-[80px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedGender('남성')}>
                  남성
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    'bodymdregular block w-[80px] rounded-none bg-gray-100',
                  )}
                  onClick={() => handleSelectedGender('여성')}>
                  여성
                </button>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}

export default DropdownGender
