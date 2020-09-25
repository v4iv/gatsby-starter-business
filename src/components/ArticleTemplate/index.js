import React from 'react'
import Content from '../Content'
import { kebabCase } from 'lodash'
import { Link } from 'gatsby'
import ProgressiveImageContainer from '../ProgressiveImageContainer'

const ArticleTemplate = (props) => {
  const { content, contentComponent, cover, tags, title } = props
  const PostContent = contentComponent || Content

  return (
    <div>
      <h1 className='title is-size-2 has-text-weight-bold is-bold-light'>
        {title}
      </h1>
      <ProgressiveImageContainer
        image={cover}
        alt={title}
      />
      <PostContent content={content} />
      <div style={{ marginTop: `4rem` }}>
        <h4>Tags</h4>
        <ul className='taglist'>
          {(tags && tags.length)
            ? tags.map(tag => (
              <li key={tag + `tag`}>
                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
              </li>
            ))
            : null}
        </ul>
      </div>
      <hr />
    </div>
  )
}

export default ArticleTemplate
