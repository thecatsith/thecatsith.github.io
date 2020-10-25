import React from "react"
import { Helmet } from "react-helmet"
import "../styles/styles.css"
import Layout from "../components/layout"
import { toggleLightMode } from "../state/app"
import { connect } from "react-redux"

const AboutSitePage = ({ location, dispatch, isLightMode }) => (
  <>
    <Helmet>
      <title>About this site | jayceehex.github.io</title>
    </Helmet>
    <Layout
      location={location}
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
        . Global state is handled using{" "}
        <a
          href="https://react-redux.js.org/"
          title="Redux"
          target="_blank"
          rel="noreferrer"
        >
          Redux
        </a>
        . The icons are served by{" "}
        <a
          href="https://github.com/react-icons/react-icons"
          target="_blank"
          title="react-icons"
          rel="noreferrer"
        >
          react-icons
        </a>
        . Everything is styled using{" "}
        <a
          href="https://sass-lang.com/"
          target="_blank"
          title="Sass"
          rel="noreferrer"
        >
          Sass
        </a>
        .
      </p>
      <p>
        This site is dark mode by default. If you want to toggle between dark and light modes, click the lightbulb in the top right.
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
