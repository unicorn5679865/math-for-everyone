import { Disclosure, Transition } from '@headlessui/react'
import Button from './Button'
import { Fragment } from 'react'

export function ExpandablePanel({text, children}) {
  return (
    <Disclosure>
      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-primary-orange px-4 py-2 text-left text-white   focus:outline-none focus-visible:ring">
            {text}
      </Disclosure.Button>

      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100 border-solid border-l-2"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Disclosure.Panel>
          {children}
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  )
}