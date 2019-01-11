import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input``

class ProjectSearch extends React.Component {
  state = {
    searchTerm: '',
  }

  onInputChange = e => this.setState({ searchTerm: e.target.value })

  render() {
    const { projects, children } = this.props
    const { searchTerm } = this.state

    const filteredProjects = projects.filter(({ node }) =>
      node.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return children({
      filteredProjects,
      SearchField: (
        <StyledInput onChange={this.onInputChange} value={searchTerm} />
      ),
    })
  }
}

ProjectSearch.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({ title: PropTypes.string.isRequired })
          .isRequired,
      }).isRequired,
    }),
  ).isRequired,
  children: PropTypes.func.isRequired,
}

export default ProjectSearch
