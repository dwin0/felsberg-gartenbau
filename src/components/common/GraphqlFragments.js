import { graphql } from 'gatsby'

export const FrontmatterProjectInformation = graphql`
  fragment FrontmatterProjectInformation on MarkdownRemark {
    frontmatter {
      title
      tags
      shortDescription
      mainImage {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            formats: [AUTO, WEBP]
            placeholder: TRACED_SVG
            width: 350
            height: 350
          )
        }
      }
    }
  }
`
