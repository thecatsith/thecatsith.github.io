/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.scss"
import Header from "./header"
import Footer from "./footer"
import MainNav from "./main-nav"
import { connect } from "react-redux"
import { toggleLightMode } from "../state/app"

const Layout = ({ children, lightMode, toggleLightMode }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          navLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <div className={`container${lightMode ? " light-theme" : ""}`}>
      <div className="content-box">
        <MainNav
          navLinks={data.site.siteMetadata?.navLinks || []}
          toggleLightMode={toggleLightMode}
          lightMode={lightMode}
        />
        <Header siteTitle={data.site.siteMetadata?.title || ``} />
        <main id="main">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
