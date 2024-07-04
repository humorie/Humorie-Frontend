import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import '../../index.css'
import { Fragment } from 'react'

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

const DropdownRegion = () => {
  return (
    <Menu as="div" className="relative inline-block">
      <div className="relative">
        <MenuButton className="flex w-[100px] h-[40px] p-0 text-gray-700 justify-center items-center gap-x-[8px] rounded-[4px] bg-gray-100 bodymdregular  hover:bg-gray-100">
          지역별
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
        <MenuItems className="absolute z-10 mt-2 w-[98px] h-[200px] overflow-auto origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 flex flex-col bg-gray-100 items-center justify-center">
            <MenuItem>
              {({ active }: { active: boolean }) => (
                <button
                  type="submit"
                  className={classNames(
                    active ? 'text-primary-600' : 'text-gray-700',
                    ' bg-gray-100 w-[62px] rounded-none border-b-[0.5px] border-x-0 border-t-0 border-gray-300 bodysmregular',
                  )}>
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
                    ' bg-gray-100 w-[62px] rounded-none border-b-[0.5px] border-x-0 border-t-0 border-gray-300 bodysmregular',
                  )}>
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
                    'block  bg-gray-100 w-[62px] rounded-none border-b-[0.5px] border-x-0 border-t-0 border-gray-300 bodysmregular',
                  )}>
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
                    'block  bg-gray-100 w-[62px] rounded-none border-b-[0.5px] border-x-0 border-t-0 border-gray-300 bodysmregular',
                  )}>
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
                    'block  bg-gray-100 w-[62px] rounded-none border-b-[0.5px] border-x-0 border-t-0 border-gray-300 bodysmregular',
                  )}>
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
                    'block  bg-gray-100 w-[62px] rounded-none border-b-[0.5px] border-x-0 border-t-0 border-gray-300 bodysmregular',
                  )}>
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
                    '  bg-gray-100 w-[62px] rounded-none border-b-[0.5px] border-x-0 border-t-0 border-gray-300 bodysmregular',
                  )}>
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
                    '  bg-gray-100 w-[62px] rounded-none border-b-[0.5px] border-x-0 border-t-0 border-gray-300 bodysmregular',
                  )}>
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
                    ' bg-gray-100 w-[62px] rounded-none border-b-[0.5px] border-x-0 border-t-0 border-gray-300 bodysmregular',
                  )}>
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
                    ' bg-gray-100 w-[62px] rounded-none border-b-[0.5px] border-x-0 border-t-0 border-gray-300 bodysmregular',
                  )}>
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
                    ' bg-gray-100 w-[62px] rounded-none border-b-[0.5px] border-x-0 border-t-0 border-gray-300 bodysmregular',
                  )}>
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
                    ' bg-gray-100 w-[62px] rounded-none border-b-[0.5px] border-x-0 border-t-0 border-gray-300 bodysmregular',
                  )}>
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
                    ' bg-gray-100 w-[62px] rounded-none bodysmregular',
                  )}>
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
