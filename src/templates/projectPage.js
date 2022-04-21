import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Gallery from 'react-photo-gallery'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { FiPlay, FiPause, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import Layout from '../components/Layout'
import CMS_HTML from '../components/common/CMS_Html'
import {
  GalleryWrapper,
  CloseButton,
  Controls,
  ControlButton,
} from '../components/projectPage/GalleryElements'
import PhotoWithTextSlide from '../components/projectPage/PhotoWithTextSlide'
import ImageComponent from '../components/projectPage/ImageComponent'
import TagList from '../components/projectPage/TagList'
import {
  isGalleryOpenEvent,
  isGalleryCloseEvent,
} from '../components/projectPage/helper'

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

    this.imageGalleryRef = React.createRef()

    this.state = {
      startImage: null,
      isImageGalleryOpen: false,
      isPlaying: false,
    }
  }

  handleOpenEvents = (event, { index }) => {
    if (isGalleryOpenEvent(event)) {
      this.openGallery(index)

      document.addEventListener('keydown', this.handleCloseEvents)
    }
  }

  handleCloseEvents = (event) => {
    if (isGalleryCloseEvent(event)) {
      this.closeGallery()
    }
  }

  openGallery = (index) =>
    this.setState({ isImageGalleryOpen: true, startImage: index })

  closeGallery = () => {
    this.setState({
      isImageGalleryOpen: false,
      startImage: null,
      isPlaying: false,
    })

    document.removeEventListener('keydown', this.handleCloseEvents)
  }

  showNextSlide = () => {
    const gallery = this.imageGalleryRef.current
    gallery.slideToIndex(gallery.getCurrentIndex() + 1)
  }

  showPrevSlide = () => {
    const gallery = this.imageGalleryRef.current
    gallery.slideToIndex(gallery.getCurrentIndex() - 1)
  }

  togglePlay = () => {
    const gallery = this.imageGalleryRef.current

    this.setState((prevState) => {
      prevState.isPlaying ? gallery.pause() : gallery.play()
      return {
        isPlaying: !prevState.isPlaying,
      }
    })
  }

  galleryClickHandler = (e) => e.stopPropagation()

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleCloseEvents)
  }

  render() {
    const { isImageGalleryOpen, startImage, isPlaying } = this.state
    const {
      html,
      frontmatter: { galleryImages, tags },
    } = this.props.data.markdownRemark

    return (
      <Layout>
        <Layout.ContentWrapper>
          {isImageGalleryOpen && (
            <GalleryWrapper onClick={this.closeGallery}>
              <GalleryWrapper.Inner onClick={this.galleryClickHandler}>
                <CloseButton onClick={this.closeGallery} />
                <ImageGallery
                  ref={this.imageGalleryRef}
                  items={galleryImages}
                  renderItem={PhotoWithTextSlide}
                  startIndex={startImage}
                  showThumbnails={false}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  showNav={false}
                />
                <Controls>
                  <ControlButton onClick={this.showPrevSlide}>
                    <FiChevronLeft />
                  </ControlButton>
                  <ControlButton center onClick={this.togglePlay}>
                    {isPlaying ? <FiPause /> : <FiPlay />}
                  </ControlButton>
                  <ControlButton onClick={this.showNextSlide}>
                    <FiChevronRight />
                  </ControlButton>
                </Controls>
              </GalleryWrapper.Inner>
            </GalleryWrapper>
          )}

          <TagList tags={tags} />

          <CMS_HTML dangerouslySetInnerHTML={{ __html: html }} />

          <Gallery
            photos={this.photos}
            ImageComponent={ImageComponent}
            onClick={this.handleOpenEvents}
          />
        </Layout.ContentWrapper>
      </Layout>
    )
  }
}

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

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        tags
        galleryImages {
          imageText
          imageDescription
          image {
            childImageSharp {
              fluid(maxWidth: 1000) {
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

export default ProjectPage
