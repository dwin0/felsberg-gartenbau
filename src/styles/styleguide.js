import { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

const COLORS = {
  GREEN: '#245d24',
  GREEN_LIGHT: '#cfdecf',
  WHITE: '#ffffff',
  BLACK_TRANSPARENT: '#5f5f5f26',
  BLACK_TRANSPARENT_IMAGE: '#2525255e',
  BLACK_TRANSPARENT_SLIDESHOW: '#00000091',
  BLACK: '#252525',
  GREY: '#8d8c8c',
  RED: '#B21C0E',
  YELLOW: '#ffe900',
}

const BREAKPOINTS = {
  SMALL_MINUS_ONE: '349px',
  SMALL: '350px',
  MEDIUM_MINUS_ONE: '699px',
  MEDIUM: '700px',
  LARGE_MINUS_ONE: '1199px',
  LARGE: '1200px',
}

const media = generateMedia(BREAKPOINTS)

const LINE_HEIGHTS = {
  STANDARD_TEXT_LH: 1.2,
  LARGE_LH: 1.2,
  MEDIUM_LH: 1.2,
  SMALL_LH: 1.5,
}

/**
 * The font property is a shorthand property for:
 *
 * font-style
 * font-variant
 * font-weight
 * font-size/line-height
 * font-family
 */
const FONTS = {
  STANDARD_TEXT: css`
    font-family: sans-serif;
    letter-spacing: 0.2px;
    line-height: ${LINE_HEIGHTS.STANDARD_TEXT_LH};

    ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
      font-weight: 400;
      font-size: 18px;
    `}

    ${media.greaterThan(BREAKPOINTS.MEDIUM)`
      font-weight: 100;
      font-size: 20px;
    `}
  `,
  STANDARD_TEXT_BOLD: css`
    font-family: sans-serif;
    font-weight: bold;
    font-size: 20px;
    line-height: ${LINE_HEIGHTS.STANDARD_TEXT_LH};
  `,
  LARGE: css`
    font-family: Helvetica, sans-serif;
    font-weight: 400;
    line-height: ${LINE_HEIGHTS.LARGE_LH};

    ${media.lessThan(BREAKPOINTS.SMALL_MINUS_ONE)`
      font-size: 32px;
    `}

    ${media.between(BREAKPOINTS.SMALL, BREAKPOINTS.MEDIUM_MINUS_ONE)`
      font-size: 36px;
    `}

    ${media.greaterThan(BREAKPOINTS.MEDIUM)`
      font-size: 40px;
    `}
  `,
  LARGE_BOLD: css`
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    line-height: ${LINE_HEIGHTS.LARGE_LH};

    ${media.lessThan(BREAKPOINTS.SMALL_MINUS_ONE)`
      font-size: 7vw;
    `}

    ${media.between(BREAKPOINTS.SMALL, BREAKPOINTS.MEDIUM_MINUS_ONE)`
      font-size: 6vw;
    `}

    ${media.greaterThan(BREAKPOINTS.MEDIUM)`
      font-size: 40px;
    `}
  `,
  MEDIUM: css`
    font-family: Helvetica, sans-serif;
    font-weight: 400;
    line-height: ${LINE_HEIGHTS.MEDIUM_LH};

    ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
      font-size: 24px;
    `}

    ${media.greaterThan(BREAKPOINTS.MEDIUM)`
      font-size: 28px;
    `}
  `,
  MEDIUM_BOLD: css`
    font-family: Helvetica, sans-serif;
    font-weight: bold;
    line-height: ${LINE_HEIGHTS.MEDIUM_LH};

    ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
      font-size: 24px;
    `}

    ${media.greaterThan(BREAKPOINTS.MEDIUM)`
      font-size: 28px;
    `}
  `,
  SMALL: css`
    font-family: sans-serif;
    letter-spacing: 0.2px;

    ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
      font-weight: 400;
      font-size: 16px;
      line-height: 1.5;
    `}

    ${media.greaterThan(BREAKPOINTS.MEDIUM)`
      font-weight: 100;
      font-size: 16px;
      line-height: 1.4;
    `}
  `,
  SMALL_BOLD: css`
    font-family: sans-serif;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.2px;
    line-height: 1.5;
  `,
  FOOTER: css`
    font-family: sans-serif;
    letter-spacing: 0.2px;
    line-height: 1.4;

    ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
      font-weight: 400;
      font-size: 16px;
    `}

    ${media.greaterThan(BREAKPOINTS.MEDIUM)`
      font-weight: 100;
      font-size: 18px;
    `}
  `,
  NAVIGATION: css`
    font-family: sans-serif;
    letter-spacing: 0.2px;
    line-height: ${LINE_HEIGHTS.STANDARD_TEXT_LH};

    ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
      font-weight: 400;
      font-size: 18px;
    `}

    ${media.greaterThan(BREAKPOINTS.MEDIUM)`
      font-weight: 100;
      font-size: 16px;
    `}

    ${media.greaterThan('960px')`
      font-weight: 100;
      font-size: 20px;
    `}
  `,
}

export { COLORS, FONTS, media, BREAKPOINTS, LINE_HEIGHTS }
