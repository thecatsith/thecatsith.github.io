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

const Layout = ({ location, lightMode, toggleLightMode, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          navLinks {
            name
            link
          }
        }
      }
    }
  `)

  const siteTitle = (
    path: string,
    author: string,
    navLinks: Array<any>
  ): string =>
    path === "/"
      ? author
      : navLinks.find(navLink => navLink.link == path)?.name || ``

  return (
    <div className={`container${lightMode ? " light-theme" : ""}`}>
      <div className="content-box">
        <MainNav
          navLinks={data.site.siteMetadata?.navLinks || []}
          toggleLightMode={toggleLightMode}
          lightMode={lightMode}
        />
        <Header
          siteTitle={siteTitle(
            location.pathname,
            data.site.siteMetadata?.author || ``,
            data.site.siteMetadata?.navLinks || []
          )}
        />
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
