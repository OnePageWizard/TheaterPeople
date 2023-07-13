import React, {useState} from "react"
import { Link } from "gatsby"
import "./Header.scss"
import VK from "./../../images/VK.svg"
import INST from "./../../images/INST.svg"

import LOGO from "./../../images/logo.svg"

function Header({ HeadActive=false }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <nav className="menu_inner">
        <div className={show ? "menu__content-active" : "menu__content-disactive"}>
          <ul className="menu__navbars">
            <li>
              <Link className="Link" to="/">
                ГЛАВНАЯ
              </Link>
            </li>
            <li>
              <Link className="Link" to="/poster">
                АФИША
              </Link>
            </li>
            <li>
              <Link className="Link" to="/training">
                ОБУЧЕНИЕ
              </Link>
            </li>
            <li>
              <Link className="Link" to="/repertoire">
                РЕПЕРТУАР
              </Link>
            </li>
            <div className="header__link-social">
              <img src={INST} alt="#" />
              <img src={VK} alt="#" />
            </div> 
          </ul>
        </div>  
      </nav>
      <header 
        className={HeadActive ? "header__active" : "header"} 
        style={HeadActive ? show ? {filter: "none"} : {filter: "drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.25))"} : {}}
      >
        <div className="header__wrapper">
          <div 
            className="header__logo"
            style={show ? {position: "fixed", left: "calc(100% / 13)"} : {}}
          >
            <Link to="/">
              <img src={LOGO} alt="#" className="header__logo__img" />
            </Link>
            <div className="header__logo__block-name">
              <p className="header__logo__block-name__name">ЛЮДИ</p>
              <p className="header__logo__block-name__name-info">
                Театральная студия
              </p>
            </div>
          </div>
          
          <button 
            className={show ? "menu__btn menu__btn--active" : "menu__btn"}
            onClick={() => setShow(!show)} 
            style={show ? {position: "fixed", right: "calc(100% / 13)"} : {}} 
          >
            <span></span>
          </button>
          
          

          <div className="header__content">
            <ul className="header__content-navbars">
              <li>
                <Link className="Link" to="/">
                  ГЛАВНАЯ
                </Link>
              </li>
              <li>
                <Link className="Link" to="/poster">
                  АФИША
                </Link>
              </li>
              <li>
                <Link className="Link" to="/training">
                  ОБУЧЕНИЕ
                </Link>
              </li>
              <li>
                <Link className="Link" to="/repertoire">
                  РЕПЕРТУАР
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
