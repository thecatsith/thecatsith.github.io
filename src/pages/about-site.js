import React from "react"
import { Helmet } from "react-helmet"
import "../styles/styles.css"
import Layout from "../components/layout"

const AboutSitePage = () => (
  <>
    <Helmet>
      <title>About this site | jayceehex.github.io</title>
    </Helmet>
    <Layout>
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

export default AboutSitePage
