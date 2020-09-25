import React from 'react'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  LinkedinIcon,
  RedditIcon,
} from 'react-share'
import './styles.sass'

const Share = (props) => {
  const { title, slug, excerpt, mobile, siteUrl, pathPrefix } = props
  const realPrefix = pathPrefix === '/' ? '' : pathPrefix
  const url = siteUrl + realPrefix + slug

  const iconSize = mobile ? 36 : 48
  const filter = count => (count > 0 ? count : '')

  return (
    <div className='social-links'>
      <RedditShareButton url={url} title={title}>
        <RedditIcon round size={iconSize} />
        <RedditShareCount url={url}>
          {count => <div className='share-count'>{filter(count)}</div>}
        </RedditShareCount>
      </RedditShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon round size={iconSize} />
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={excerpt}>
        <FacebookIcon round size={iconSize} />
        <FacebookShareCount url={url}>
          {count => <div className='share-count'>{filter(count)}</div>}
        </FacebookShareCount>
      </FacebookShareButton>
      <LinkedinShareButton
        url={url}
        title={title}
        description={excerpt}
      >
        <LinkedinIcon round size={iconSize} />
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <TelegramIcon round size={iconSize} />
      </TelegramShareButton>
    </div>
  )
}

export default Share
