/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

// You want to use each markdown file name to create the page slug. So pandas.md will become /pandas/.
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images. IMPORTANT for gatsby-image to work.

  if (node.internal.type === 'MarkdownRemark') {
    let slug = createFilePath({ node, getNode, basePath: 'pages' })

    // category page URL shouldn't be /categoryPages/<pageName>
    if (node.frontmatter.templateKey === 'categoryPage') {
      slug = slug.replace('/categoryPages', '')
    }

    if (node.frontmatter.templateKey === 'projectPage') {
      slug = slug.replace('/projectPages', 'projekt')
    }

    if (node.frontmatter.templateKey === 'allTags') {
      slug = slug.replace('/projectPages', 'projekte')
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
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const pages = result.data.allMarkdownRemark.edges

    pages.forEach(({ node }) => {
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

    const tags = pages
      .filter(
        ({ node: { frontmatter } }) =>
          frontmatter.templateKey === 'projectPage' &&
          frontmatter.tags &&
          frontmatter.tags.length,
      )
      .reduce((acc, { node }) => {
        const newTags = node.frontmatter.tags.filter(tag => !acc.includes(tag))
        return [...acc, ...newTags]
      }, [])

    tags.forEach(tag => {
      createPage({
        path: `/projekte/tags/${tag.toLowerCase()}/`,
        component: path.resolve('src/templates/tagPage.js'),
        context: {
          tag,
        },
      })
    })
  })
}
