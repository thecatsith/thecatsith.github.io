import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa"

const Header = ({ siteTitle, lightMode, onToggleLightMode }) => {
  const lightModeToggleIcon = () => lightMode ? <FaRegLightbulb /> : <FaLightbulb />

  return (
    <header className="header content-box">
      <h1 className="header__text">
        <Link to="/">{siteTitle}</Link>
      </h1>
    <button className="icon-button" onClick={onToggleLightMode} aria-label="Toggle light mode">
      {lightModeToggleIcon()}
    </button>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
