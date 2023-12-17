import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

export const Head = ({
  data: {
    markdownRemark: {
      frontmatter: { title: pageTitle },
    },
  },
}) => {
  const {
    site: {
      siteMetadata: { title: mainTitle, siteUrl, description, keywords },
    },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteUrl
          description
          keywords
        }
      }
    }
  `)

  const headTitle = pageTitle ? `${pageTitle} | ${mainTitle}` : mainTitle

  return (
    <>
      <html lang="de" />
      <title>{headTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="canonical" content={siteUrl} />
    </>
  )
}

Head.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
