import React from "react"
import { Helmet } from "react-helmet"
import "../styles/styles.css"
import Layout from "../components/layout"
import { toggleLightMode } from "../state/app"
import { connect } from "react-redux"

const IndexPage = ({ location, isLightMode, dispatch }) => (
  <>
    <Helmet>
      <title>jayceehex.github.io</title>
    </Helmet>
    <Layout
      location={location}
      lightMode={isLightMode}
      toggleLightMode={() => dispatch(toggleLightMode(!isLightMode))}
    >
      <p>
        <span className="highlight">Hello there!</span> I'm a JavaScript developer
        from the West Country. I've got experience in React and Angular
        frameworks, and I'm trying to get better at functional programming. CSS
        styling is my favourite coding hobby, especially when it comes to
        accessibility. Outside of code, I read too many books and don't get
        enough vitamin D.
      </p>
    </Layout>
  </>
)

export default connect(
  state => ({
    isLightMode: state.app.isLightMode,
  }),
  null
)(IndexPage)
