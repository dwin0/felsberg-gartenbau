# TODO: projekte - uncomment and rename to tags.js

<!-- import React, { Fragment } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { FiTag } from 'react-icons/fi'

import Layout from '../../components/Layout'
import Search from '../../components/common/Search'
import { TagsLink } from '../../components/common/Link'
import { TagsList } from '../../components/Tags'

const TagsPage = () => (
  <StaticQuery
    query={graphql`// query { // allMarkdownRemark( // filter: { frontmatter: { templateKey: { eq: "projectPage" } } } // ) { // group(field: frontmatter___tags) { // fieldValue // totalCount // } // totalCount // } // } //`}
    render={({
      allMarkdownRemark: { group: groups, totalCount: sumOfProjects },
    }) => (
      <Layout>
        <Layout.ContentWrapper>
          <h1>Projekte nach Stichwort</h1>

          <Search
            collection={groups}
            filterBy={group => group.fieldValue}
            placeholder="Stichwort"
          >
            {({ filteredCollection, SearchField }) => (
              <Fragment>
                {SearchField}

                <TagsList>
                  {filteredCollection.map(({ fieldValue, totalCount }) => (
                    <li key={fieldValue}>
                      <TagsLink
                        to={`/projekte/tags/${fieldValue.toLowerCase()}/`}
                      >
                        <FiTag />
                        &nbsp;
                        {fieldValue}&nbsp;({totalCount})
                      </TagsLink>
                    </li>
                  ))}
                  <br />
                  <li>
                    <TagsLink to="/projekte/">
                      Alle Projekte ({sumOfProjects})
                    </TagsLink>
                  </li>
                </TagsList>
              </Fragment>
            )}
          </Search>
        </Layout.ContentWrapper>
      </Layout>
    )}
  />
)

export default TagsPage -->
