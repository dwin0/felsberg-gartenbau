import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import { COLORS } from '../styles/styleguide'

const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const CategoryEntry = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 10px solid ${COLORS.GREEN};
  display: flex;
  justify-content: center;
  align-items: center;
`

class IndexPage extends React.Component {
  state = {
    hoveredCategory: null,
  }

  handleOnHover = category =>
    this.setState({
      hoveredCategory: category,
    })

  render() {
    const { data } = this.props
    const { title } = data.markdownRemark.frontmatter
    const { html } = data.markdownRemark
    const categoriesOnHomePage = data.allMarkdownRemark.edges.filter(
      ({ node }) => node.frontmatter.categoryOnHomepage,
    )
    const { hoveredCategory } = this.state

    const displayCategory = hoveredCategory || data.markdownRemark

    return (
      <Layout>
        <h1>{title}</h1>

        <div>
          <p>Seitenvorschau</p>
          <h1>{displayCategory.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: displayCategory.html }} />
        </div>

        <CategoryContainer>
          {categoriesOnHomePage.map(({ node }) => (
            <CategoryEntry
              key={node.frontmatter.title}
              onMouseEnter={() => this.handleOnHover(node)}
              onMouseLeave={() => this.handleOnHover(null)}
            >
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </CategoryEntry>
          ))}
        </CategoryContainer>
      </Layout>
    )
  }
}

// id is provided by the context set in gatsby-node.js
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      html
    }
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            categoryOnHomepage
          }
          html
        }
      }
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }).isRequired,
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              categoryOnHomepage: PropTypes.bool,
            }).isRequired,
            html: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export default IndexPage
