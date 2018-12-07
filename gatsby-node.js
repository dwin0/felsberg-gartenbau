/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// You want to use each markdown file name to create the page slug. So pandas.md will become /pandas/.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    let slug = createFilePath({ node, getNode, basePath: 'pages' })

    // category page URL shouldn't be /categoryPages/<pageName>
    if (node.frontmatter.templateKey === 'categoryPage') {
      slug = slug.replace('/categoryPages', '')
    }

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  // query all markdown pages and create files with their data
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`,
        ),
        // additional data can be passed via context: this.props.pageContext
        context: {
          id: node.id,
          slug: node.fields.slug,
          templateKey: node.frontmatter.templateKey,
        },
      })
    })
  })
}
