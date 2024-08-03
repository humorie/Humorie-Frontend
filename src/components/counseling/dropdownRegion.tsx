import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import '../../index.css'
import { Fragment } from 'react'
import { useDropdownStore } from '../../store/store'

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

const DropdownRegion = () => {
  const { selectedDropdowns, setSelectedDropdown } = useDropdownStore()
  const selectedRegion = selectedDropdowns['region'] || '지역별'

  const handleSelectedRegion = (region: string) => {
    setSelectedDropdown('region', region)
  }

  return (
    <Menu as="div" className="relative inline-block">
      <div className="relative">
        <MenuButton
          className={classNames(
            `bodymdregular flex h-[40px] w-[100px] items-center justify-center gap-x-[8px] rounded-[4px] bg-gray-100 p-0  hover:bg-gray-100`,
            selectedRegion !== '지역별' ? 'text-primary-600' : 'text-gray-700',
          )}>
          {selectedRegion}
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
        <MenuItems className="absolute z-10 mt-2 h-[200px] w-[98px] origin-top-right overflow-auto rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col items-center justify-center bg-gray-100 py-1">
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    ' bodymdregular w-[80px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedRegion('서울')}>
                  서울
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    ' bodymdregular w-[80px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedRegion('경기')}>
                  경기
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    'bodymdregular  block w-[80px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedRegion('인천')}>
                  인천
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    'bodymdregular  block w-[80px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedRegion('강원')}>
                  강원
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    'bodymdregular  block w-[80px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedRegion('충청')}>
                  충청
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    'bodymdregular  block w-[80px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedRegion('대전')}>
                  대전
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    '  bodymdregular w-[80px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedRegion('경상')}>
                  경상
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    '  bodymdregular w-[80px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedRegion('전라')}>
                  전라
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    ' bodymdregular w-[80px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedRegion('대구')}>
                  대구
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    ' bodymdregular w-[80px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedRegion('광주')}>
                  광주
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    ' bodymdregular w-[80px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedRegion('울산')}>
                  울산
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    ' bodymdregular w-[80px] rounded-none border-x-0 border-b-[0.5px] border-t-0 border-gray-300 bg-gray-100',
                  )}
                  onClick={() => handleSelectedRegion('부산')}>
                  부산
                </button>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    ' bodymdregular w-[80px] rounded-none bg-gray-100',
                  )}
                  onClick={() => handleSelectedRegion('제주')}>
                  제주
                </button>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}

export default DropdownRegion
