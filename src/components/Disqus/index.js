import React from 'react'
import ReactDisqusComments from 'react-disqus-comments'

const Disqus = (props) => {
  const { title, slug, siteUrl, disqusShortname } = props

  if (!disqusShortname) {
    return null
  }

  const url = siteUrl + slug

  return <div>
    <ReactDisqusComments
      shortname={disqusShortname}
      identifier={title}
      title={title}
      url={url}
      onNewComment={comment => console.log('New Comment Available!:\n', comment.text)}
    />
  </div>
}

export default Disqus
