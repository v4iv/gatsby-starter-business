import React from 'react'
import PropTypes from 'prop-types'
import ProgressiveImageContainer from '../ProgressiveImageContainer'

const Offerings = (props) => {
  const { gridItems } = props
  return (
    <div className='columns is-multiline'>
      {gridItems.map((item, idx) => (
        <div key={idx} className='column is-6' style={{ borderRadius: '5px' }}>
          <section className='section'>
            <p className='has-text-centered'>
              <ProgressiveImageContainer
                image={item.image}
                alt={`gatsby-business-starter-${idx}`}
              />
            </p>
            <p>{item.text}</p>
          </section>
        </div>
      ))}
    </div>
  )
}
Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
}

export default Offerings
