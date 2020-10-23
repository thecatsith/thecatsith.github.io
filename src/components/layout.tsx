/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [lightMode, setLightMode] = useState(false)

  const toggleLightMode = () => {
    setLightMode(!lightMode)
    console.log('lightMode', lightMode)
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={`container${lightMode ? ' light-theme' : ''}`}>
      <Header siteTitle={data.site.siteMetadata?.title || ``} onToggleLightMode={toggleLightMode} lightMode={lightMode} />
      <main id="main">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
