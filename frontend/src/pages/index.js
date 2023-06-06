import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout/Layout"

import "./index.scss"

const IndexPage = () => {
  const strapiMainpage = useStaticQuery(graphql`
    query {
      strapiMainpage {
        Header
        Text {
          data {
            Text
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="block">
        <h1>{strapiMainpage.strapiMainpage.Header}</h1>
        <p>{strapiMainpage.strapiMainpage.Text.data.Text}</p>
      </div>
    </Layout>
  )
}

export default IndexPage

