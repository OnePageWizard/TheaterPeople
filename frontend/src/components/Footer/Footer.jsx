import * as React from "react"

import VK from "./../../images/VK.svg"
import INST from "./../../images/INST.svg"

import "./Footer.scss"

const Footer = () => (
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
      <div className="footer__block__info">
        <img className="footer__block__info__img" src={INST} alt="#" />
        <img className="footer__block__info__img" src={VK} alt="#" />
      </div>
    </div>
  </footer>
)

export default Footer
