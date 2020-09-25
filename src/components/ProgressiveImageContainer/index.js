import React from 'react'
import _ from 'lodash'
import Img from 'gatsby-image'

const ProgressiveImageContainer = ({ image, alt, className }) => (typeof image === 'string')
  ? <img
    className={className}
    src={image}
    alt={alt}
  />
  : (_.get(image, ['childImageSharp', 'fluid']))
    ? <Img
      className={className}
      fluid={_.get(image, ['childImageSharp', 'fluid'])}
      alt={alt}
    />
    : <img
      className={className}
      src={_.get(image, ['publicURL'], '')}
      alt={alt} />

export default ProgressiveImageContainer
