import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Gallery from 'react-photo-gallery'
import isEmpty from 'lodash/fp/isEmpty'

import Layout from '../components/Layout'
import CMS_HTML from '../components/common/CMS_Html'

import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

import GalleryWrapper from '../components/projectPage/GalleryWrapper'
import PhotoWithText from '../components/projectPage/PhotoWithTextSlide'
import ImageComponent from '../components/projectPage/ImageComponent'
import { isValidEvent } from '../components/projectPage/helper'

class ProjectPage extends React.Component {
  constructor(props) {
    super(props)

    this.photos = this.props.data.markdownRemark.frontmatter.galleryImages.map(
      ({ image, imageDescription }, index) => ({
        ...image.childImageSharp.fluid,
        imageDescription,
        width: image.childImageSharp.fluid.aspectRatio,
        height: 1,
        index,
      }),
    )

    this.state = {
      currentImage: null,
    }
  }

  handleEvents = (event, { index }) => {
    if (!isValidEvent(event)) return

    this.setState({
      currentImage: index,
    })
  }

  closeGallery = () => this.setState({ currentImage: null })

  galleryClickHandler = e => e.stopPropagation()

  render() {
    const { currentImage } = this.state
    const {
      html,
      frontmatter: { galleryImages },
    } = this.props.data.markdownRemark

    return (
      <Layout>
        <Layout.ContentWrapper>
          {currentImage !== null && (
            <GalleryWrapper onClick={this.closeGallery}>
              <GalleryWrapper.Inner onClick={this.galleryClickHandler}>
                <button onClick={this.closeGallery}>Close</button>
                <ImageGallery
                  items={galleryImages}
                  renderItem={PhotoWithText}
                  startIndex={currentImage}
                  showThumbnails={false}
                  showFullscreenButton={false}
                />
              </GalleryWrapper.Inner>
            </GalleryWrapper>
          )}

          <CMS_HTML dangerouslySetInnerHTML={{ __html: html }} />

          <Gallery
            photos={this.photos}
            ImageComponent={ImageComponent}
            onClick={this.handleEvents}
          />

          {/* {isEmpty(tags) ? (
            <div>
              <p>Keine Stichwörter</p>
            </div>
          ) : (
            <div>
              <p>Stichwörter</p>
              <ul>
                {tags.map(tag => (
                  <li key={tag}>
                    <Link to={`projekte/tags/${tag.toLowerCase()}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )} */}
        </Layout.ContentWrapper>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        tags
        galleryImages {
          imageText
          imageDescription
          image {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
      html
    }
  }
`

ProjectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
        galleryImages: PropTypes.arrayOf(
          PropTypes.shape({
            image: PropTypes.shape({
              childImageSharp: PropTypes.shape({
                fluid: PropTypes.object.isRequired,
              }).isRequired,
            }).isRequired,
            imageText: PropTypes.string,
            imageDescription: PropTypes.string.isRequired,
          }),
        ).isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default ProjectPage
