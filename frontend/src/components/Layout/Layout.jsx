import React from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"

import "./Layout.scss"

export default function Layout({ children, HeadActive }) {
  return (
    <div className="block">
      <Header HeadActive={HeadActive} />
      <div className="wrapper">
        <div className={HeadActive ? "content__active" : "content"}>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}
