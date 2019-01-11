import { graphql } from 'gatsby'

export const FrontmatterProjectInformation = graphql`
  fragment FrontmatterProjectInformation on MarkdownRemark {
    frontmatter {
      title
      tags
      shortDescription
      mainImage {
        childImageSharp {
          fixed(width: 350, height: 350) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  }
`
