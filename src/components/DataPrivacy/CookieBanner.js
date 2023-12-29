import React, { useState } from 'react'
import { Link } from 'gatsby'
import {
  AcceptDenyButton,
  Banner,
  BannerTitle,
  ButtonWrapper,
  CloseButton,
} from './BannerElements'

// https://developers.google.com/tag-platform/security/guides/privacy#disable-analytics
const googleAnalyticsDisbleString = 'ga-disable-G-VLRRM9C75S'

export function initGoogleAnalyticsTracking() {
  try {
    const disableTracking =
      localStorage.getItem(googleAnalyticsDisbleString) === 'true'
    window[googleAnalyticsDisbleString] = disableTracking
  } catch (error) {
    console.error('Can not access local storage', error)
  }
}

function googleAnalyticsOptIn() {
  window[googleAnalyticsDisbleString] = false
  try {
    localStorage.setItem(googleAnalyticsDisbleString, 'false')
  } catch (error) {
    console.error('Can not access local storage', error)
  }
}
function googleAnalyticsOptOut() {
  window[googleAnalyticsDisbleString] = true
  try {
    localStorage.setItem(googleAnalyticsDisbleString, 'true')
  } catch (error) {
    console.error('Can not access local storage', error)
  }
}

const CookieBanner = () => {
  const [isHidden, setIsHidden] = useState(
    () => localStorage.getItem(googleAnalyticsDisbleString) !== null,
  )

  const optIn = () => {
    googleAnalyticsOptIn()
    setIsHidden(true)
  }

  const optOut = () => {
    googleAnalyticsOptOut()
    setIsHidden(true)
  }

  if (isHidden) {
    return null
  }

  return (
    <Banner>
      <BannerTitle>Cookies verwalten</BannerTitle>
      <CloseButton tabIndex="0" aria-label="Schliessen" onClick={optOut}>
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
