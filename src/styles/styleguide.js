import { css } from 'styled-components'
import { generateMedia } from 'styled-media-query'

const COLORS = {
  GREEN: '#194a19',
  WHITE: '#ffffff',
  BLACK_TRANSPARENT: '#5f5f5f26',
  BLACK_TRANSPARENT_IMAGE: '#2525255e',
  BLACK: '#252525',
  GREY: '#8d8c8c',
  RED: '#B21C0E',
}

const LINE_HEIGHTS = {
  STANDARD_TEXT_LH: 1.4,
  LARGE_LH: 1.2,
  MEDIUM_LH: 1.2,
  SMALL_LH: 1.4,
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
    font: 100 20px sans-serif;
    letter-spacing: 0.2px;
    line-height: ${LINE_HEIGHTS.STANDARD_TEXT_LH};
  `,
  STANDARD_TEXT_BOLD: css`
    font: bold 20px sans-serif;
    letter-spacing: 0.2px;
    line-height: ${LINE_HEIGHTS.STANDARD_TEXT_LH};
  `,
  LARGE: css`
    font: 400 40px Helvetica, sans-serif;
    line-height: ${LINE_HEIGHTS.LARGE_LH};
  `,
  LARGE_BOLD: css`
    font: bold 40px Helvetica, sans-serif;
    line-height: ${LINE_HEIGHTS.LARGE_LH};
  `,
  MEDIUM_BOLD: css`
    font: bold 32px Helvetica, sans-serif;
    line-height: ${LINE_HEIGHTS.MEDIUM_LH};
  `,
  SMALL: css`
    font: 100 16px sans-serif;
    letter-spacing: 0.2px;
    line-height: ${LINE_HEIGHTS.SMALL_LH};
  `,
  SMALL_BOLD: css`
    font: bold 16px sans-serif;
    letter-spacing: 0.2px;
    line-height: ${LINE_HEIGHTS.SMALL_LH};
  `,
}

const BREAKPOINTS = {
  SMALL: '300px',
  MEDIUM_MINUS_ONE: '699px',
  MEDIUM: '700px',
  LARGE_MINUS_ONE: '1199px',
  LARGE: '1200px',
}

const media = generateMedia(BREAKPOINTS)

export { COLORS, FONTS, media, BREAKPOINTS, LINE_HEIGHTS }
