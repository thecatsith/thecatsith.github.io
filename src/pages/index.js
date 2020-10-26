import React from "react"
import { Helmet } from "react-helmet"
import "../styles/styles.css"
import FrontPageLayout from "../components/front-page-layout"
import { toggleLightMode } from "../state/app"
import { connect } from "react-redux"

const IndexPage = ({ isLightMode, dispatch }) => (
  <>
    <Helmet>
      <title>jayceehex.github.io</title>
    </Helmet>
    <FrontPageLayout
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
    </FrontPageLayout>
  </>
)

export default connect(
  state => ({
    isLightMode: state.app.isLightMode,
  }),
  null
)(IndexPage)
