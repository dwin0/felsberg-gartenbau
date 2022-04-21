import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput, InputWrapper, SearchIcon } from './SearchElements'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.inputFieldRef = React.createRef()

    this.state = {
      searchTerm: '',
    }
  }

  onInputChange = (e) => this.setState({ searchTerm: e.target.value })

  onSubmit = (e) => {
    e.preventDefault()
    this.inputFieldRef.current.blur()
  }

  render() {
    const { collection, filterBy, placeholder, children } = this.props

    const filteredCollection = collection.filter((item) =>
      filterBy(item)
        .toLowerCase()
        .includes(this.state.searchTerm.toLowerCase()),
    )

    return children({
      filteredCollection,
      SearchField: (
        <form onSubmit={this.onSubmit}>
          <noscript>
            Die Suche funktioniert nur, wenn JavaScript aktiviert ist.
          </noscript>
          <InputWrapper>
            <StyledInput
              onChange={this.onInputChange}
              value={this.state.searchTerm}
              placeholder={placeholder}
              ref={this.inputFieldRef}
            />
            <SearchIcon />
          </InputWrapper>
        </form>
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
