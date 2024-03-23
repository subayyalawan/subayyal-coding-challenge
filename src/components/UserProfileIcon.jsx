import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const UserProfileIcon = ({currentHover, setCurrentHover, icon, hover}) => {
  return (
    <button
          disabled={currentHover === hover}
          className="disabled:text-cyan-500 text-gray-800/50 border-b-4 disabled:border-cyan-500 border-transparent md:px-5 md:py-3 sm:py-1 sm:px-3 px-3 py-1 md:text-3xl sm:text-2xl text-2xl cursor-pointer  transition-all duration-300"
          onMouseEnter={() => setCurrentHover(hover)}
        >
          <FontAwesomeIcon icon={icon} />
        </button>
  )
}

export default UserProfileIcon