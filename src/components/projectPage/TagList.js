import React from 'react'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/fp/isEmpty'
import { FiTag } from 'react-icons/fi'
import styled from 'styled-components'

import { media, BREAKPOINTS } from '../../styles/styleguide'
import { GatsbyLink } from '../common/Link'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 40px;

  ${media.lessThan(BREAKPOINTS.MEDIUM_MINUS_ONE)`
    flex-direction: column;
  `}
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  padding: 10px 15px;
`

const TagList = ({ tags }) =>
  !isEmpty(tags) && (
    <Wrapper>
      <p>{tags.length === 1 ? 'Stichwort' : 'Stichwörter'}:&nbsp;</p>
      <List>
        {tags.map(tag => (
          <ListItem key={tag}>
            <GatsbyLink to={`/projekte/tags/${tag.toLowerCase()}/`}>
              <FiTag />
              &nbsp;{tag}
            </GatsbyLink>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default TagList
