import { Link } from "gatsby"

import React, { useState, useEffect } from "react"
import logo from "../images/logo-designcode.svg"
import "./Header.css"

const Header = () => {
  const [hasScrolled, setHeader] = useState(false)
  const handleScroll = event => {
    console.log(event)
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  }, [hasScrolled])

  return (
    <div className={hasScrolled ? "Header HeaderScrolled" : "Header"}>
      <div className="HeaderGroup">
        <Link to="/">
          {/* <img src={logo} width="30" alt="logotext" /> */}
          <img src={require("../images/logo-designcode.svg")} width="50" />
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
}

export default Header
