import React from "react"
import { Link } from "gatsby"
import { FaTwitter, FaGithub, FaItchIo } from "react-icons/fa"
import "./footer.css"

const Footer = () => (
  <footer className="footer">
    <div className="content-box footer__container">
      <Link
        to="https://www.twitter.com/jayceehex"
        title="Twitter"
        target="_blank"
      >
        <div className="footer__icon">
          <FaTwitter />
        </div>
      </Link>
      <Link
        to="https://www.github.com/jayceehex"
        title="Github"
        target="_blank"
      >
        <div className="footer__icon">
          <FaGithub />
        </div>
      </Link>
      <Link to="https://jayceeha.itch.io" title="Itch.io" target="_blank">
        <div className="footer__icon">
          <FaItchIo />
        </div>
      </Link>
    </div>
  </footer>
)

export default Footer
