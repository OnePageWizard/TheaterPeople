import React from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import "./Layout.scss"

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper__child">{children}</div>
      <Footer />
    </div>
  )
}
