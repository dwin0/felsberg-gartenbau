import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

import Layout from '../components/Layout'
import CMS_HTML from '../components/CMS_Html'

class ProjectPage extends React.Component {
  state = {
    currentImage: 0,
    lightboxIsOpen: false,
  }

  handleLightBoxOpen = (event, obj) =>
    this.setState({
      lightboxIsOpen: true,
      currentImage: obj.index,
    })
  handleLightBoxClose = () =>
    this.setState({
      lightboxIsOpen: false,
    })
  handleLightBoxPrev = () =>
    this.setState(prevState => ({ currentImage: --prevState.currentImage }))
  handleLightBoxNext = () =>
    this.setState(prevState => ({ currentImage: ++prevState.currentImage }))

  render() {
    const {
      data: { markdownRemark },
    } = this.props
    const { tags, galleryImages } = markdownRemark.frontmatter
    const { html } = markdownRemark

    // TODO: not on every render
    // TODO: image description
    // TODO: srcset
    let galleryPhotos = galleryImages
      .map(galleryImage => galleryImage.image.childImageSharp.fluid)
      .map(({ src, aspectRatio }) => ({
        src,
        width: aspectRatio,
        height: 1,
      }))

    return (
      <Layout>
        <Layout.ContentWrapper>
          <CMS_HTML dangerouslySetInnerHTML={{ __html: html }} />

          <Gallery photos={galleryPhotos} onClick={this.handleLightBoxOpen} />
          <Lightbox
            images={galleryPhotos}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            onClose={this.handleLightBoxClose}
            onClickPrev={this.handleLightBoxPrev}
            onClickNext={this.handleLightBoxNext}
          />

          {tags.map(tag => (
            <Link key={tag} to={`projekte/tags/${tag.toLowerCase()}`}>
              {tag}
            </Link>
          ))}
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
          description
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
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default ProjectPage
