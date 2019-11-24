/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulPage {
        edges {
          node {
            contentful_id
            childContentfulPageContentRichTextNode {
              json
            }
            content {
              json
            }
            slug
            title
            type
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }
  const {
    allContentfulPage
  } = result.data

  const homeTemplate = path.resolve(`./src/templates/home.js`)
  const contactTemplate = path.resolve(`./src/templates/contact.js`)
  const videoTemplate = path.resolve(`./src/templates/video.js`)
  const projectTemplate = path.resolve(`./src/templates/project.js`)

  allContentfulPage.edges.forEach(edge => {
    let template
    switch (edge.node.type) {
      case "home":
        template = homeTemplate
        break
      case "video":
        template = videoTemplate
        break
      case "project":
        template = projectTemplate
        break
      case "contact":
        template = contactTemplate
        break
      default:
        template = homeTemplate
    }

      createPage({
        path: edge.node.slug,
        component: slash(template),
        context: edge.node,
      })
  })

}
process.env.CONTENTFUL_ACCESS_TOKEN =
  "hoFMEgLaYhOPmh5vcE4gASi6CpZ31H4PnWurkYu4F8w"
