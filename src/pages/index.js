import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import '../styles/styles.css'

const IndexPage = () => (
  <>
    <Helmet>
      <title>jayceehex.github.io</title>
      <link href="./assets/fontawesome/css/fontawesome.css" rel="stylesheet" />
      <link href="./assets/fontawesome/css/brands.css" rel="stylesheet" />
    </Helmet>
    <SEO title="jayceehex.github.io" />
    <div className="container">
      <header className="content-box">
        <div>
          <h1 className="header__text">Hello there!</h1>
        </div>
      </header>
      <main id="main">
        <div className="content-box">
          <p><b>Jen Hoskins</b> is a JavaScript developer from the West Country. They have experience in React and Angular frameworks, and are trying to get better at functional programming. CSS styling is their favourite coding hobby, especially when it comes to accessibility. Outside of code, Jen reads too many books and doesn't get enough vitamin D.</p>
        </div>
      </main>
      <footer className="footer">
        <div className="content-box footer__container">
          <Link to="https://www.twitter.com/jayceehex" title="Twitter" target="_blank">
            <div className="footer__icon">
              <i className="fab fa-twitter"></i>
            </div>
          </Link>
          <Link to="https://www.github.com/jayceehex" title="Github" target="_blank">
            <div className="footer__icon">
              <i className="fab fa-github"></i>
            </div>
          </Link>
          <Link to="https://jayceeha.itch.io" title="Itch.io" target="_blank">
            <div className="footer__icon">
              <i className="fab fa-itch-io"></i>
            </div>
          </Link>
        </div>
      </footer>
    </div>
  </>
)

export default IndexPage
