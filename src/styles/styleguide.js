import { css } from 'styled-components'

const COLORS = {
  GREEN: '#194a19',
  WHITE: '#ffffff',
  BLACK_TRANSPARENT: '#5f5f5f26',
  BLACK: '#252525',
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
    line-height: 1.4;
  `,
  LARGE: css`
    font: 400 40px Helvetica, sans-serif;
  `,
  LOGO_FONT: css`
    font: 100 20px sans-serif;
    letter-spacing: 0.2px;
    line-height: 1.4;
    font-weight: bold;
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

export { COLORS, FONTS, MEDIA }
