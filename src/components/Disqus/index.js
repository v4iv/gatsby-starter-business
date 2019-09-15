import React, { Component } from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import config from '../../../config'

class Disqus extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toasts: [],
    }
    this.notifyAboutComment = this.notifyAboutComment.bind(this)
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this)
  }

  onSnackbarDismiss () {
    const [, ...toasts] = this.state.toasts
    this.setState({ toasts })
  }

  notifyAboutComment () {
    const toasts = this.state.toasts.slice()
    toasts.push({ text: 'New comment available!' })
    this.setState({ toasts })
  }

  render () {
    const { title, slug } = this.props
    if (!config.disqusShortname) {
      return null
    }
    const url = config.siteUrl + config.pathPrefix + slug
    return (
      <ReactDisqusComments
        shortname={config.disqusShortname}
        identifier={title}
        title={title}
        url={url}
        onNewComment={this.notifyAboutComment}
      />
    )
  }
}

export default Disqus
