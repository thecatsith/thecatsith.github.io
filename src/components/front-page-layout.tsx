/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.scss"
import Header from "./header"
import Footer from "./footer"
import MainNav from "./main-nav"

const FrontPageLayout = ({ lightMode, toggleLightMode, children }) => {
  const data = useStaticQuery(graphql`
    query AuthorNavLinksQuery {
      site {
        siteMetadata {
          author
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
      <MainNav
        navLinks={data.site.siteMetadata?.navLinks || []}
        toggleLightMode={toggleLightMode}
        lightMode={lightMode}
      />
      <div className="content-box">
        <main id="main">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

FrontPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FrontPageLayout
