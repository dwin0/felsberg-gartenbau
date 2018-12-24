import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Gallery from 'react-photo-gallery'
import isEmpty from 'lodash/fp/isEmpty'
import Image from 'gatsby-image'

import Layout from '../components/Layout'
import CMS_HTML from '../components/CMS_Html'

// https://github.com/neptunian/react-photo-gallery
// http://neptunian.github.io/react-photo-gallery/
const ImageComponent = ({ index, onClick, photo, margin, top, left }) => (
  <div style={{ margin, top, left, height: photo.height, width: photo.width }}>
    <Image
      fluid={photo}
      alt={photo.alt}
      title={photo.alt}
      onClick={() => onClick({ index, photo })}
    />
  </div>
)

ImageComponent.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  photo: PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    sizes: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    srcWebp: PropTypes.string.isRequired,
    srcSetWebp: PropTypes.string.isRequired,
    tracedSVG: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  margin: PropTypes.number,
  top: PropTypes.number,
  left: PropTypes.number,
}

class ProjectPage extends React.Component {
  constructor(props) {
    super(props)

    const { galleryImages } = this.props.data.markdownRemark.frontmatter

    this.state = {
      photos: galleryImages.map(galleryImage => {
        const image = galleryImage.image.childImageSharp.fluid

        return {
          aspectRatio: image.aspectRatio,
          sizes: image.sizes,
          src: image.src,
          srcSet: image.srcSet,
          srcWebp: image.srcWebp,
          srcSetWebp: image.srcSetWebp,
          tracedSVG: image.tracedSVG,
          width: image.aspectRatio,
          height: 1,
          alt: galleryImage.imageDescription,
        }
      }),
    }
  }

  render() {
    const {
      html,
      frontmatter: { tags },
    } = this.props.data.markdownRemark

    const { photos } = this.state

    return (
      <Layout>
        <Layout.ContentWrapper>
          {isEmpty(tags) ? (
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
          )}

          <CMS_HTML dangerouslySetInnerHTML={{ __html: html }} />

          <Gallery
            photos={photos}
            ImageComponent={ImageComponent}
            onClick={() => {}}
          />
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
