import React from "react"
import { Link } from "gatsby"
import "./footer-link.scss"

const FooterLink = ({ title, to, icon }) => (
  <Link
    to={to}
    title={title}
    target="_blank"
    className="footer__icon"
  >
    <div>
      {icon}
    </div>
  </Link>
)

export default FooterLink
