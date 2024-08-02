import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import '../../index.css'
import { Fragment } from 'react'
import { useDropdownStore } from '../../store/store'

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

const DropdownViews = () => {
  const { selectedDropdowns, setSelectedDropdown } = useDropdownStore()
  const selectedViews = selectedDropdowns['views'] || '리뷰'

  const handleSelectedViews = (views: string) => {
    setSelectedDropdown('views', views)
  }

  return (
    <Menu as="div" className="relative inline-block">
      <div className="relative">
        <MenuButton
          className={classNames(
            `bodymdregular flex h-[40px] w-[100px] items-center justify-center gap-x-[8px] rounded-[4px] bg-gray-100 p-0  text-gray-700  hover:bg-gray-100`,
            selectedViews !== '리뷰' ? 'text-primary-600' : 'text-gray-700',
          )}>
          {selectedViews}
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
          <div className="flex flex-col items-center justify-center bg-gray-100 py-1">
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    ' bodymdregular w-[85px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedViews('조회순')}>
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
                    'bodymdregular w-[85px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedViews('추천순')}>
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
                    'bodymdregular w-[85px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedViews('인기순')}>
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
                    'bodymdregular rounded-none bg-gray-100',
                  )}
                  onClick={() => handleSelectedViews('최신순')}>
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
