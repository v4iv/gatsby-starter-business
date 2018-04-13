/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({email, description}) => {
  return (
    <div
      className='content'
      style={{border: '1px solid #eaecee', padding: '2em 4em'}}>
      <p><a href={`mailto:${email}`}>{email}</a></p>
      <p>{description}</p>
    </div>
  )
}

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default Contact
