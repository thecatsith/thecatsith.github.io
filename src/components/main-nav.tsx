import React from "react"
import "./main-nav.scss"
import { FaLightbulb, FaRegLightbulb, FaHome } from "react-icons/fa"
import { Link } from "gatsby"

const MainNav = ({ lightMode, toggleLightMode }) => {
  const lightModeToggleIcon = () =>
    lightMode ? <FaRegLightbulb /> : <FaLightbulb />

  return (
    <nav className="main-nav">
      <ul className="main-nav--items">
        <li>
          <Link to="/" title="Home" className="main-nav--item">
            <FaHome />
          </Link>
        </li>
        <li>
          <Link to="/about-me" title="About me" className="main-nav--item">
            About me
          </Link>
        </li>
        <li>
          <Link
            to="/about-site"
            title="About this site"
            className="main-nav--item"
          >
            About this site
          </Link>
        </li>
        <li>
          <button
            className="main-nav--item icon-button"
            onClick={toggleLightMode}
            aria-label="Toggle light mode"
          >
            {lightModeToggleIcon()}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
