import React from 'react'
import PropTypes from 'prop-types'
import ContactPageTemplate from '../../components/ContactPageTemplate'

const ContactPagePreview = ({ entry, getAsset }) => {
  return (
    <ContactPageTemplate
      title={entry.getIn(['data', 'title'])}
      subtitle={entry.getIn(['data', 'subtitle'])}
      meta_title={entry.getIn(['data', 'meta_title'])}
      meta_description={entry.getIn(['data', 'meta_description'])}
    />
  )
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContactPagePreview
