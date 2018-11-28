import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Index } from 'elasticlunr'

export default class SearchBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      isActive: false,
    }
  }

  render () {
    return (
      <div className={`navbar-item ${this.state.isActive ? 'is-active' : ''}`}>
        <input
          className='input navbar-link is-rounded is-primary'
          type='text'
          value={this.state.query}
          onChange={this.search}
          placeholder='Search'
        />
        <div className='navbar-dropdown'>
          {this.state.results.map(page => (
            <Link className='navbar-item' key={page.id} to={page.slug}>{page.title}</Link>
          ))}
        </div>
      </div>
    )
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : Index.load(this.props.searchIndex);

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true }) // Accept partial matches
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
      isActive: !!query,
    })
  };
}
