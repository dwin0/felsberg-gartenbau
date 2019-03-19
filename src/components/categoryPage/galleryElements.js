import 'react-image-gallery/styles/css/image-gallery.css'
import styled from 'styled-components'

import { COLORS } from '../../styles/styleguide'

export const GalleryWrapper = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 0 20px;

  .image-gallery-right-nav,
  .image-gallery-left-nav,
  .image-gallery-play-button,
  .image-gallery-fullscreen-button {
    :hover::before {
      color: ${COLORS.YELLOW};
    }
  }
`
