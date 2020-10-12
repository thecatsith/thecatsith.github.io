import React from "react"
import { Link } from "gatsby"
import "./footer-link.css"

const FooterLink = ({ title, to, icon }) => (
  <Link
    to={to}
    title={title}
    target="_blank"
  >
    <div className="footer__icon">
      {icon}
    </div>
  </Link>
)

export default FooterLink
