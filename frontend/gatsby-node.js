const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const performancePage = path.resolve("./src/templates/performancePage.js")

  const result = await graphql(`
    {
      allStrapiSpektakli {
        nodes {
            Title
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi performances`,
      result.errors
    )

    return
  }

  const performances = result.data.allStrapiSpektakli.nodes

  if (performances.length > 0) {
    performances.forEach((performance) => {
      createPage({
        path: `/repertoire/${performance.Title}`,
        component: performancePage,
        context: {
            Title: performance.Title,
        },
      })
    })
  }
}
