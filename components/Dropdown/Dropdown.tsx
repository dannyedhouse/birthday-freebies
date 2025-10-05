import {Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition} from '@headlessui/react'
import {Fragment, JSX} from 'react'
import {HiOutlineSelector} from 'react-icons/hi'

export type DropdownOption = {
  name: string
  icon: JSX.Element
}

export default function Dropdown({
  selected,
  setSelected,
  options,
}: {
  selected: DropdownOption
  setSelected: (item: DropdownOption) => void
  options: DropdownOption[]
}) {
  const setOption = (e: DropdownOption) => {
    setSelected(e)
  }

  return (
    <Listbox value={selected} onChange={(e) => setOption(e)}>
      {({open}) => (
        <div className="relative">
          <ListboxButton
            className={`relative min-w-[128px] w-max text-xs h-10 py-2 pl-3 pr-7 sm:min-w-[158px] cursor-default rounded-lg border bg-white sm:py-2 sm:pl-3 sm:pr-10 text-left shadow-md sm:text-sm transition-all duration-200 ${
              open ? 'border-brand-yellow' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <span className="inline-flex gap-2 items-center">
              {selected.icon} {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiOutlineSelector />
            </span>
          </ListboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions
              className="absolute z-20 mt-1 max-h-60 w-max sm:min-w-3.5 overflow-auto rounded-md bg-white py-1 text-xs shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
              style={{minWidth: '100%'}}
            >
              {options.map((option, optionIdx) => (
                <ListboxOption
                  key={optionIdx}
                  className={({active}) =>
                    `relative cursor-default select-none py-2 pl-4 pr-4 z-20 ${
                      active ? 'bg-brand-yellow text-amber-800' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({selected}) => (
                    <>
                      <span
                        className={`inline-flex gap-2 items-center z-20 ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.icon}
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}
