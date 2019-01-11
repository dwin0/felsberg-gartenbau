import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid grey;
  padding: 0 20px;
  box-sizing: border-box;
`

const InputWrapper = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  margin-top: 40px;
`

const SearchIcon = styled(FiSearch)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`

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
        <InputWrapper>
          <StyledInput
            onChange={this.onInputChange}
            value={searchTerm}
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
