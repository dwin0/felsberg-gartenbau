import React from 'react'
import PropTypes from 'prop-types'
import { Helmet as ReactHelmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Helmet = ({ pageTitle }) => {
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
    <ReactHelmet
      title={headTitle}
      meta={[
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { name: 'canonical', content: siteUrl },
      ]}
    >
      <html lang="de" />
    </ReactHelmet>
  )
}

Helmet.propTypes = {
  pageTitle: PropTypes.string,
}

export default Helmet
