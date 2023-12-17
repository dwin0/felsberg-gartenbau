import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import Layout from '../components/Layout'
import CMS_HTML from '../components/common/CMS_Html'
import HeaderImage from '../components/common/HeaderImage'
import { GalleryWrapper } from '../components/categoryPage/galleryElements'

const CategoryPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { image, imageAlt, galleryImages, title },
    },
  },
}) => {
  const images = galleryImages.map(({ image, imageDescription }) => ({
    original: image.childImageSharp.gatsbyImageData.images.fallback.src,
    originalAlt: imageDescription,
    srcSet: image.childImageSharp.gatsbyImageData.images.fallback.srcSet,
  }))

  return (
    <Layout pageTitle={title}>
      <HeaderImage
        image={image.childImageSharp.gatsbyImageData}
        alt={imageAlt}
      />

      <Layout.ContentWrapper>
        <CMS_HTML dangerouslySetInnerHTML={{ __html: html }} />
      </Layout.ContentWrapper>

      {images.length > 0 && (
        <GalleryWrapper>
          <ImageGallery
            items={images}
            showThumbnails={false}
            showBullets
            lazyLoad
          />
        </GalleryWrapper>
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              breakpoints: [750, 1080, 1366, 1920, 2400, 3000]
              formats: [AUTO, WEBP]
              placeholder: TRACED_SVG
            )
          }
        }
        imageAlt
        galleryImages {
          imageDescription
          image {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                formats: [AUTO]
                placeholder: TRACED_SVG
                width: 1200
              )
            }
          }
        }
        title
      }
      html
    }
  }
`

CategoryPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        image: PropTypes.object.isRequired,
        imageAlt: PropTypes.string.isRequired,
        galleryImages: PropTypes.arrayOf(
          PropTypes.shape({
            image: PropTypes.shape({
              childImageSharp: PropTypes.shape({
                gatsbyImageData: PropTypes.object.isRequired,
              }).isRequired,
            }).isRequired,
            imageDescription: PropTypes.string.isRequired,
          }),
        ),
        title: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default CategoryPage
