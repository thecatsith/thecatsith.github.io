import PropTypes from "prop-types"
import React from "react"
import "./front-page-header.scss"

const FrontPageHeader = () => (
  <header className="front-page-header"></header>
)

FrontPageHeader.propTypes = {
  siteTitle: PropTypes.string,
}

FrontPageHeader.defaultProps = {
  siteTitle: ``,
}

export default FrontPageHeader
