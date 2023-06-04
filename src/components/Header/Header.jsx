import * as React from "react"
import { Link } from "gatsby"
import "./Header.scss"

const Header = () => (
  <header classname="header">
    <div classname="header__wrapper">
      <div classname="header__logo">
        <Link>
          <img src="./src/img/logo.svg" alt="#" />
        </Link>
        <div classname="header__logo__block-name">
          <p classname="header__logo__block-name__name">ЛЮДИ</p>
          <p classname="header__logo__block-name__name-info">
            Театральная студия
          </p>
        </div>
      </div>
      <div classname="header__content">
        <ul classname="header__content__navbar">
          <li>
            <Link>ГЛАВНАЯ</Link>
          </li>
          <li>
            <Link>АФИША</Link>
          </li>
          <li>
            <Link>ОБУЧЕНИЕ</Link>
          </li>
          <li>
            <Link>РЕПЕРТУАР</Link>
          </li>
        </ul>

        <div classname="header__content__info">
          <img src="./src/img/INST.svg" alt="#" />
          <img src="./src/img/VK.svg" alt="#" />
        </div>
      </div>
    </div>
  </header>
)

export default Header
