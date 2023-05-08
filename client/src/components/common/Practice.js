import { Disclosure, Transition } from '@headlessui/react'
import { FiCheckCircle } from "react-icons/fi"

export function Practice({text, isCompleted, children, defaultOpen=false}) {
  return (
    <div className="practice-container flex flex-col mb-4">
        <Disclosure defaultOpen={defaultOpen}>
        <Disclosure.Button
            as='div'
            className="flex w-full justify-between rounded-lg bg-primary-orange px-4 py-2 text-left text-white min-h-[50px] focus:outline-none focus-visible:ring cursor-pointer">
            <span className='inline-flex items-center'>{text}</span>
            {isCompleted && <span className='pointer-events-none inline-flex items-center'>Completed <FiCheckCircle className='m-3' style={{"strokeWidth": "4px"}}/></span>}
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
    </div>
  )
}