import * as React from "react"
import { graphql } from "gatsby"

const performancePage = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>

export const pageQuery = graphql`
  query ($Title: String) {
    strapiSpektakli(Title: { eq: $Title }) {
      Title
      Premiere
      ShortDesc
      Description {
        data {
          Description
        }
      }
      Director
      Age
      Cover {
        localFile {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              breakpoints: [750, 1000, 1366, 1920]
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`

export default performancePage
