import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import '../../index.css'
import { Fragment } from 'react'

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

const DropdownViews = () => {
  return (
    <Menu as="div" className="relative inline-block">
      <div className="relative">
        <MenuButton className="flex w-[100px] h-[40px] p-0 text-gray-800 justify-center items-center gap-x-[8px] rounded-[4px] bg-gray-100 bodymdregular  hover:bg-gray-100">
          리뷰
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
        <MenuItems className="absolute z-10 mt-2 w-[100px] origin-top-right rounded-[4px] bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 flex flex-col bg-gray-100 justify-center">
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    ' bg-gray-100 px-4 py-2 bodysmregular',
                  )}>
                  조회순
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    'block bg-gray-100 px-4 py-2 bodysmregular',
                  )}>
                  추천순
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    'block bg-gray-100 px-4 py-2 bodysmregular',
                  )}>
                  인기순
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    'block bg-gray-100 px-4 py-2 bodysmregular',
                  )}>
                  최신순
                </button>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}

export default DropdownViews
