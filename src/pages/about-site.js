import React from "react"
import { Helmet } from "react-helmet"
import "../styles/styles.css"
import Layout from "../components/layout"
import { toggleLightMode } from "../state/app"
import { connect } from "react-redux"

const AboutSitePage = ({ dispatch, isLightMode }) => (
  <>
    <Helmet>
      <title>About this site | jayceehex.github.io</title>
    </Helmet>
    <Layout
      lightMode={isLightMode}
      toggleLightMode={() => dispatch(toggleLightMode(!isLightMode))}
    >
      <p>
        This site is built using{" "}
        <a
          href="https://github.com/gatsbyjs/gatsby"
          target="_blank"
          title="Gatsby"
          rel="noreferrer"
        >
          Gatsby
        </a>
        , and the icons are served by{" "}
        <a
          href="https://github.com/react-icons/react-icons"
          target="_blank"
          title="react-icons"
          rel="noreferrer"
        >
          react-icons
        </a>
        .
      </p>
    </Layout>
  </>
)

export default connect(
  state => ({
    isLightMode: state.app.isLightMode,
  }),
  null
)(AboutSitePage)
