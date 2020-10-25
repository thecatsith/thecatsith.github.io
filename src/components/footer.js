import React from "react"
import { FaTwitter, FaGithub, FaItchIo } from "react-icons/fa"
import "./footer.css"
import FooterLink from "./footer-link"

const footerLinks = [
  {
    title: "Twitter",
    to: "https://www.twitter.com/jayceehex",
    icon: <FaTwitter />,
  },
  {
    title: "Github",
    to: "https://www.github.com/jayceehex",
    icon: <FaGithub />,
  },
  {
    title: "ItchIo",
    to: "https://jayceeha.itch.io",
    icon: <FaItchIo />,
  },
]

const Footer = () => (
  <footer className="footer">
    <div className="content-box footer__container">
      {footerLinks.map((link, key) => (
        <FooterLink
          title={link.title}
          to={link.to}
          icon={link.icon}
          key={key}
        />
      ))}
    </div>
  </footer>
)

export default Footer
