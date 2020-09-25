import React from 'react'
import PropTypes from 'prop-types'

const Testimonials = (props) => {
  const { testimonials } = props

  return (
    <div>
      {testimonials.map((testimonial, idx) => (
        <article className='message' key={idx}>
          <div className='message-body'>
            {testimonial.quote}
            <br />
            <cite> – {testimonial.author}</cite>
          </div>
        </article>
      ))}
    </div>
  )
}
Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
}

export default Testimonials
