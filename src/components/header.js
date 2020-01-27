import { Link } from "gatsby"

import React from "react"
import logo from "../images/logo-designcode.svg"
import "./Header.css"

const Header = () => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/">
        <img src={logo} width="30" alt="logotext" />
      </Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy">
        <button>Buy</button>
      </Link>
    </div>
  </div>
)

export default Header
