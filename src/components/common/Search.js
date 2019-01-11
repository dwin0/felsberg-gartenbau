import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput, InputWrapper, SearchIcon } from './SearchElements'

class Search extends React.Component {
  state = {
    searchTerm: '',
  }

  onInputChange = e => this.setState({ searchTerm: e.target.value })

  render() {
    const { collection, filterBy, placeholder, children } = this.props

    const filteredCollection = collection.filter(item =>
      filterBy(item)
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase()),
    )

    return children({
      filteredCollection,
      SearchField: (
        <InputWrapper>
          <StyledInput
            onChange={this.onInputChange}
            value={this.state.searchTerm}
            placeholder={placeholder}
          />
          <SearchIcon />
        </InputWrapper>
      ),
    })
  }
}

Search.propTypes = {
  collection: PropTypes.array.isRequired,
  filterBy: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  children: PropTypes.func.isRequired,
}

export default Search
