import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { toggleLightMode } from "../state/app"
import { connect } from "react-redux"

const NotFoundPage = ({ location, dispatch, isLightMode }) => (
  <Layout
    location={location}
    toggleLightMode={() => dispatch(toggleLightMode(!isLightMode))}
    lightMode={lightMode}
  >
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default connect(
  state => ({
    isLightMode: state.app.isLightMode,
  }),
  null
)(NotFoundPage)
