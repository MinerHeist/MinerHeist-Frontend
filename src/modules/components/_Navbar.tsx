import { useState } from 'react'
import { nanoid } from 'nanoid'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const pages = ['Home', 'Leaderboard', 'Team', 'Tome']

  const handleToggle = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav id="navbar">
      <button onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`blur-div ${showMenu ? 'show' : 'hide'}`}></div>
      <div className={`navbar-menu ${showMenu ? 'show' : 'hide'}`}>
        {pages.map((page) => {
          return (
            <a
              className="nav-link"
              key={nanoid()}
              href={page == 'Home' ? '/' : page}
            >
              {page}
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
