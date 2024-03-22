import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const UserProfileIcon = ({currentHover, setCurrentHover, icon, hover}) => {
  return (
    <button
          disabled={currentHover === hover}
          className="disabled:text-cyan-500 text-gray-800/50 border-b-4 disabled:border-cyan-500 border-transparent px-5 py-3 text-3xl cursor-pointer  transition-all duration-300"
          onMouseEnter={() => setCurrentHover(hover)}
        >
          <FontAwesomeIcon icon={icon} />
        </button>
  )
}

export default UserProfileIcon