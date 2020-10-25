import React from "react"
import { Helmet } from "react-helmet"
import "../styles/styles.css"
import Layout from "../components/layout"
import { toggleLightMode } from "../state/app"
import { connect } from 'react-redux'

const IndexPage = ({ isLightMode, dispatch }) => (
  <>
    <Helmet>
      <title>jayceehex.github.io</title>
    </Helmet>
    <Layout lightMode={isLightMode} toggleLightMode={() => dispatch(toggleLightMode(!isLightMode))} />
  </>
)

export default connect(state => ({
  isLightMode: state.app.isLightMode
}), null)(IndexPage)
