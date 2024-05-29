import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import '../../index.css'
import { Fragment } from 'react'

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

const DropdownGender = () => {
  return (
    <Menu as="div" className="relative inline-block">
      <div className="relative">
        <MenuButton className="flex px-[16px] py-[8px] justify-center items-center gap-x-[8px] rounded-full bg-white px-3 py-2 bodymdregular ring-1 ring-inset ring-gray-300 hover:bg-gray-100">
          성별
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
        <MenuItems className="absolute z-10 mt-2 w-[84px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 flex flex-col justify-center">
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    ' bg-white px-4 py-2 bodysmregular',
                  )}>
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
                    'block bg-white px-4 py-2 bodysmregular',
                  )}>
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
