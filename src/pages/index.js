import React from "react"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import '../styles/styles.css'
import Layout from "../components/layout"

const IndexPage = () => (
  <>
    <Helmet>
      <title>jayceehex.github.io</title>
    </Helmet>
    <SEO title="jayceehex.github.io" />
      <Layout>
        <div className="content-box">
          <p><b>Jen Hoskins</b> is a JavaScript developer from the West Country. They have experience in React and Angular frameworks, and are trying to get better at functional programming. CSS styling is their favourite coding hobby, especially when it comes to accessibility. Outside of code, Jen reads too many books and doesn't get enough vitamin D.</p>
        </div>
      </Layout>
  </>
)

export default IndexPage
