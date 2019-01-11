import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'

import Layout from '../../components/Layout'

const TagsPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "projectPage" } } }
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
          totalCount
        }
      }
    `}
    render={({ allMarkdownRemark: { group, totalCount: sumOfProjects } }) => (
      <Layout>
        <Layout.ContentWrapper>
          <h1>Projekte nach Stichwort</h1>


          <ul>
            {group.map(({ fieldValue, totalCount }) => (
              <li key={fieldValue}>
                <Link to={`projekte/tags/${fieldValue.toLowerCase()}/`}>
                  {fieldValue} ({totalCount})
                </Link>
              </li>
            ))}
            <li>
              <Link to="projekte">Alle Projekte ({sumOfProjects})</Link>
            </li>
          </ul>
        </Layout.ContentWrapper>
      </Layout>
    )}
  />
)

export default TagsPage
