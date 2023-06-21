require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// /**
//  * @type {import('gatsby').GatsbyConfig}
//  */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "spektakli",
            queryParams: {
              publicationState:
                process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
              populate: {
                Cover: "*",
                Media: "*",
                Description: "*",
              },
            },
          },
        ],
        singleTypes: [
          {
            singularName: "homepage",
            queryParams: {
              populate: {
                Slider: {
                  populate: "*"
                },
                About: {
                  Text: "*",
                  populate: "*"
                },
                News: {
                  Text: "*",
                  populate: "*"
                },
              },
            },
          },
          {
            singularName: "afisha",
            queryParams: {
              populate: {
                Afisha: {
                  populate: "*",
                  Card: {
                    populate: "*",
                  }
                },
              },
            },
          },
          {
            singularName: "training",
            queryParams: {
              populate: {
                Slide: {
                  populate: "*"
                },
                Section: {
                  populate: "*"
                },
              },
            },
          },
        ], 
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    "gatsby-transformer-remark",
  ],
}
