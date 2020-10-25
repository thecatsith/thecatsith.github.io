import React from "react"
import "./main-nav.scss"
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa"
import { graphql, Link, useStaticQuery } from "gatsby"

const MainNav = ({ lightMode, toggleLightMode, navLinks }) => {
  const lightModeToggleIcon = () =>
    lightMode ? <FaRegLightbulb /> : <FaLightbulb />

  return (
    <nav className="main-nav">
      <ul className="main-nav--items">
        {navLinks.map((link) => (
          <li>
            <Link to={link.link} title={link.name} className="main-nav--item" activeClassName="main-nav--item__active">{link.name}</Link>
          </li>
        ))}
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
