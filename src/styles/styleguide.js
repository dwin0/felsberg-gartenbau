import { css } from 'styled-components'

const COLORS = {
  GREEN: '#194a19',
  WHITE: '#ffffff',
  BLACK_TRANSPARENT: '#5f5f5f26',
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
  STANDARD_TEXT: '15px sans-serif',
  LARGE: 'bold 25px Helvetica, sans-serif',
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
