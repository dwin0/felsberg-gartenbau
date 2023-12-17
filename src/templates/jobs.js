import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

export { Head } from '../components/Layout/Helmet'
import { media, BREAKPOINTS } from '../styles/styleguide'
import Layout from '../components/Layout'
import CMS_HTML from '../components/common/CMS_Html'
import HeaderImage from '../components/common/HeaderImage'

const JobsHeaderImage = styled(HeaderImage)`
  max-height: 400px;
`

const JobsCMS_HTML = styled(CMS_HTML)`
  text-align: left;

  ul {
    position: initial;
    transform: initial;
  }

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    a {
      display: block;
    }
  `}
`

const JobsPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { image },
    },
  },
}) => (
  <Layout>
    <JobsHeaderImage image={image.childImageSharp.gatsbyImageData} alt="" />

    <Layout.ContentWrapper>
      <JobsCMS_HTML dangerouslySetInnerHTML={{ __html: html }} />
    </Layout.ContentWrapper>
  </Layout>
)

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        title
      }
      html
    }
  }
`

JobsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        image: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired, // Used in Head
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default JobsPage
