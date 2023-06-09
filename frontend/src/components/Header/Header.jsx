import * as React from "react"
import { Link } from "gatsby"
import "./Header.scss"

import LOGO from "./../../images/logo.svg"

const Header = ({ HeadActive }) => (
  <header className={HeadActive ? "header__active" : "header"}>
    <div className="header__wrapper">
      <div className="header__logo">
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
      <div className="header__content">
        <ul className="header__content__navbar">
          <li>
            <Link className="Link" to="/">
              ГЛАВНАЯ
            </Link>
          </li>
          <li>
            <Link className="Link" to="/Poster">
              АФИША
            </Link>
          </li>
          <li>
            <Link className="Link" to="/Training">
              ОБУЧЕНИЕ
            </Link>
          </li>
          <li>
            <Link className="Link" to="/Repertoire">
              РЕПЕРТУАР
            </Link>
          </li>
        </ul>

        {/* <div className="header__content__info">
          <img src={INST} alt="#" />
          <img src={VK} alt="#" />
        </div> */}
      </div>
    </div>
  </header>
)

export default Header
