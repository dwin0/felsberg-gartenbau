import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import isEmpty from 'lodash/fp/isEmpty'

import Layout from '../components/Layout'
import CMS_HTML from '../components/common/CMS_Html'
import HeaderImage from '../components/common/HeaderImage'
import { GalleryWrapper } from '../components/categoryPage/galleryElements'
// import Projects from '../components/common/Projects'

const CategoryPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { image, galleryImages /* projects */ },
    },
  },
}) => {
  const images = galleryImages.map(({ image, imageDescription }) => ({
    original: image.childImageSharp.fullWidth.src,
    originalAlt: imageDescription,
    srcSet: image.childImageSharp.fullWidth.srcSet,
  }))

  return (
    <Layout>
      <HeaderImage fluid={image.childImageSharp.fluid} />

      <Layout.ContentWrapper>
        <CMS_HTML dangerouslySetInnerHTML={{ __html: html }} />
        {/* {!isEmpty(projects) && <Projects projects={projects} />} */}
      </Layout.ContentWrapper>

      {!isEmpty(images) && (
        <GalleryWrapper>
          <ImageGallery items={images} showThumbnails={false} showBullets />
        </GalleryWrapper>
      )}
    </Layout>
  )
}

// TODO: projekte - add project to query and uncomment rest of the file
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
        galleryImages {
          imageDescription
          image {
            childImageSharp {
              fullWidth: fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
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
        galleryImages: PropTypes.arrayOf(
          PropTypes.shape({
            image: PropTypes.shape({
              childImageSharp: PropTypes.shape({
                fullWidth: PropTypes.object.isRequired,
              }).isRequired,
            }).isRequired,
            imageDescription: PropTypes.string.isRequired,
          }),
        ),
        // projects: PropTypes.arrayOf(PropTypes.string),
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default CategoryPage
