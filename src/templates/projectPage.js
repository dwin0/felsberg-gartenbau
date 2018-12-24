import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

import Layout from '../components/Layout'
import CMS_HTML from '../components/CMS_Html'

class ProjectPage extends React.Component {
  constructor(props) {
    super(props)

    // TODO: image description
    // TODO: srcset
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
      galleryImages: this.props.data.markdownRemark.frontmatter.galleryImages
        .map(galleryImage => galleryImage.image.childImageSharp.fluid)
        .map(({ src, aspectRatio }) => ({
          src,
          width: aspectRatio,
          height: 1,
        })),
    }
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
    const { markdownRemark } = this.props.data
    const { tags } = markdownRemark.frontmatter
    const { html } = markdownRemark

    const { galleryImages, lightboxIsOpen, currentImage } = this.state

    return (
      <Layout>
        <Layout.ContentWrapper>
          <CMS_HTML dangerouslySetInnerHTML={{ __html: html }} />

          <Gallery photos={galleryImages} onClick={this.handleLightBoxOpen} />
          <Lightbox
            images={galleryImages}
            currentImage={currentImage}
            isOpen={lightboxIsOpen}
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
        tags: PropTypes.arrayOf(PropTypes.string),
        galleryImages: PropTypes.arrayOf(
          PropTypes.shape({
            image: PropTypes.shape({
              childImageSharp: PropTypes.shape({
                fluid: PropTypes.object.isRequired,
              }).isRequired,
            }).isRequired,
          }),
        ).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default ProjectPage
