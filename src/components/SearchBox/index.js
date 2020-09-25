import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Index } from 'elasticlunr'

const SearchBox = props => {
  let index = null

  const { searchIndex } = props

  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [active, setActive] = useState(false)

  const search = evt => {
    const query = evt.target.value

    index = index || Index.load(searchIndex)

    setQuery(query)
    setActive(!!query)
    setResults(
      index
        .search(query, { expand: true }) // Accept partial matches
        // Map over each ID and return the full document
        .map(({ ref }) => index.documentStore.getDoc(ref)),
    )
  }

  return (
    <div className={`navbar-item ${active ? 'is-active' : ''}`}>
      <input
        className='input navbar-link is-rounded is-primary'
        type='text'
        value={query}
        onChange={search}
        placeholder='Search'
      />

      <div className='navbar-dropdown'>
        {active && results.length
          ? results
            .filter(page => page.templateKey === 'article-page')
            .map(page => (
              <Link className='navbar-item' key={page.id} to={page.slug}>
                {page.title}
              </Link>
            ))
          : null}
      </div>
    </div>
  )
}

export default SearchBox
