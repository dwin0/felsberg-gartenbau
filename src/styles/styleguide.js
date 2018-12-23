import { css } from 'styled-components'

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

const sizes = {
  // TODO: define
  GIANT: 1170,
  DESKTOP: 992,
  TABLET: 768,
  PHONE: 376,
}

// https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md
const MEDIA = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16 // browser support
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export { COLORS, FONTS, MEDIA, LINE_HEIGHTS }
