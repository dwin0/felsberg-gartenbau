import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { InlineGatsbyLink } from '../components/common/Link'

const CenterTextWrapper = styled.div`
  text-align: center;

  > * {
    margin-bottom: 20px;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Layout.ContentWrapper>
      <CenterTextWrapper>
        <h1>404</h1>
        <h1>Diese Seite ist leider nicht verfügbar.</h1>
        <p>
          Haben Sie Anregungen für weitere Seiteninhalte?{' '}
          <InlineGatsbyLink to={`/kontakt/`}>
            Wir freuen uns Ihre Meinung zu hören.
          </InlineGatsbyLink>
        </p>
      </CenterTextWrapper>
    </Layout.ContentWrapper>
  </Layout>
)

export default NotFoundPage
