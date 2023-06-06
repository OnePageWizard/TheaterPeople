import * as React from "react"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"

import VK from "./../../images/VK.svg"
import INST from "./../../images/INST.svg"

import "./Footer.scss"

const Footer = () => {
  const path = useLocation().pathname

  const onTop = props => {
    if (path === props) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      navigate(props)
    }
  }

  return (
    <footer className="footer">
      <div className="footer__adr-phone">
        <div className="footer__adr-phone__adress">
          <span className="footer__adr-phone__adress__title">АДРЕС</span>
          <span className="footer__adr-phone__adress__text">Г. ТАГАНРОГ</span>
          <span className="footer__adr-phone__adress__text">
            УЛ. АЛЕКСАНДРОВСКАЯ 77
          </span>
        </div>

        <div className="footer__adr-phone__phone">
          <span className="footer__adr-phone__phone__title">ТЕЛЕФОН</span>
          <span className="footer__adr-phone__phone__text">
            +7 (952) 603-68-06
          </span>
        </div>
      </div>

      <div className="footer__block">
        <ul className="footer__block__navbar">
          <li onClick={() => onTop("/")}>
            <p>ГЛАВНАЯ</p>
          </li>
          <li onClick={() => onTop("/Poster")}>
            <p>АФИША</p>
          </li>
          <li onClick={() => onTop("/Training")}>
            <p>ОБУЧЕНИЕ</p>
          </li>
          <li onClick={() => onTop("/Repertoire")}>
            <p>РЕПЕРТУАР</p>
          </li>
        </ul>

        <div className="footer__block__info">
          <img className="footer__block__info__img" src={INST} alt="#" />
          <img className="footer__block__info__img" src={VK} alt="#" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
