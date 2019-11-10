import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Image = ({
  alt,
  src,
}) => {
  if (!!src && src.childImageSharp) {
    const { childImageSharp: { fluid, fixed } } = src
    return <Img fluid={fluid} fixed={fixed} alt={alt} />
  }

  if (!!src && typeof src === 'string') return <img src={src} alt={alt} />

  return null
}

Image.defaultProps = {
  alt: '',
}

Image.propTypes = {
  alt: PropTypes.string,
  childImageSharp: PropTypes.shape({
    fluid: PropTypes.object,
    fixed: PropTypes.object,
  }),
  src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default Image
