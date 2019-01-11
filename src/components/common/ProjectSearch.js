import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput, InputWrapper, SearchIcon } from './SearchElements'

class ProjectSearch extends React.Component {
  state = {
    searchTerm: '',
  }

  onInputChange = e => this.setState({ searchTerm: e.target.value })

  render() {
    const filteredProjects = this.props.projects.filter(({ node }) =>
      node.frontmatter.title
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase()),
    )

    return this.props.children({
      filteredProjects,
      SearchField: (
        <InputWrapper>
          <StyledInput
            onChange={this.onInputChange}
            value={this.state.searchTerm}
            placeholder="Projektname"
          />
          <SearchIcon />
        </InputWrapper>
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
