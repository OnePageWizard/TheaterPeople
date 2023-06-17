import * as React from "react"
import Layout from "../components/Layout/Layout"
import { navigate } from "gatsby-link"

import "./404.scss"

const FZF = () => {
  return (
    <Layout HeadActive={true}>
      <div className="wrapper__404">
        <p className="error">#404</p>
        <p className="about">Страницы с таким адресом не существует</p>
        <button onClick={() => navigate(-1)}>Назад</button>
      </div>
    </Layout>
  )
}

export default FZF