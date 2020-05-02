import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Helmet = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={({
      site: {
        siteMetadata: { title, siteUrl, description, keywords },
      },
    }) => (
      <ReactHelmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: keywords },
          { name: 'canonical', content: siteUrl },
        ]}
      >
        <html lang="de" />
      </ReactHelmet>
    )}
  />
)

export default Helmet
