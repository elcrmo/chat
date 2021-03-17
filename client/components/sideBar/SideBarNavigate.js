import React from 'react'
import ButtonUsersList from './NavigateButtons/buttonUsersList'
import ButtonChannels from './NavigateButtons/buttonChannels'
import ButtonSettings from './NavigateButtons/buttonSettings'
import ButtonTheme from './NavigateButtons/buttonTheme'

const SideBarNavigate = () => {
  return (
    <div>
      <div className="flex flex-col items-center py-4 flex-shrink-0 w-20 bg-indigo-800 rounded-3xl">
        <a
          href="#"
          className="flex items-center justify-center h-12 w-12 bg-indigo-100 text-indigo-800 rounded-full"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
        </a>
        <ul className="flex flex-col space-y-2 mt-12">
          <li>
            <ButtonUsersList />
          </li>
          <li>
            <ButtonChannels />
          </li>
          <li>
            <ButtonSettings />
          </li>
          <li>
            <ButtonTheme />
          </li>
        </ul>
      </div>
    </div>
  )
}

SideBarNavigate.propType = {}

export default SideBarNavigate