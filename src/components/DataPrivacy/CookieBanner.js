import React, { useState } from 'react'
import { posthog } from 'posthog-js'
import { Link } from 'gatsby'
import {
  AcceptDenyButton,
  Banner,
  BannerTitle,
  ButtonWrapper,
  CloseButton,
} from './BannerElements'

posthog.init('phc_4OBzYkXyWTaIvXLRTsoLibGmdOjlUd4gaH5lHyPJtLd', {
  api_host: 'https://eu.posthog.com',
})

const CookieBanner = () => {
  const [hideBanner, setHideBanner] = useState(
    posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing(),
  )

  const optIn = () => {
    posthog.opt_in_capturing()
    setHideBanner(true)
  }

  const optOut = () => {
    posthog.opt_out_capturing()
    setHideBanner(true)
  }

  if (hideBanner) {
    return null
  }

  return (
    <Banner>
      <BannerTitle>Cookies verwalten</BannerTitle>
      <CloseButton
        tabIndex="0"
        aria-label="Ablehnen und Schliessen"
        onClick={optOut}
      >
        x
      </CloseButton>
      <p>
        Wir verwenden Cookies, um die Nutzerfreundlichkeit unserer Seite zu
        analysieren und zu optimieren. Weitere Informationen erhalten Sie in
        unserer <Link to="/datenschutz">Datenschutzerklärung</Link>.
      </p>
      <ButtonWrapper>
        <AcceptDenyButton onClick={optIn}>Einverstanden</AcceptDenyButton>
        <AcceptDenyButton onClick={optOut}>Ablehnen</AcceptDenyButton>
      </ButtonWrapper>
    </Banner>
  )
}

CookieBanner.propTypes = {}

export default CookieBanner
