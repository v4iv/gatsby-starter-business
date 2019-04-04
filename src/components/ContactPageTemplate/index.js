import React, {Component} from 'react'
import { navigate } from 'gatsby-link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactPageTemplate extends Component {
  constructor (props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    // eslint-disable-next-line
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      // eslint-disable-next-line
      .catch(error => alert(error))
  }

  render () {
    const {title, subtitle, meta_title, meta_description} = this.props
    return (
      <div>
        <Helmet>
          <title>{meta_title}</title>
          <meta name='description' content={meta_description} />
        </Helmet>
        <section className='hero is-primary is-bold is-medium'>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='section'>
                    <h1 className='title'>
                      {title}
                    </h1>
                    <h2 className='subtitle'>
                      {subtitle}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <form
              name='contact'
              method='post'
              action='/contact/success'
              encType='application/x-www-form-urlencoded'
              data-netlify='true'
              data-netlify-honeypot='bot-field'
              onSubmit={this.handleSubmit}
            >
              <input type='hidden' name='form-name' value='contact' />
              <div hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name='bot-field' onChange={this.handleChange} />
                </label>
              </div>
              <div className='field'>
                <label className='label'>Name</label>
                <div className='control'>
                  <input className='input' type='text' placeholder='Full Name' name='name' id='name' onChange={this.handleChange} />
                </div>
              </div>

              <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                  <input className='input' type='email' placeholder='Email' name='email' id='email' onChange={this.handleChange} />
                </div>
              </div>

              <div className='field'>
                <label className='label'>Message</label>
                <div className='control'>
                  <textarea className='textarea' placeholder='Message' name='message' id='message' rows='6' onChange={this.handleChange} />
                </div>
              </div>

              <div className='field is-grouped is-pulled-right'>
                <div className='control'>
                  <button className='button is-text' type='reset'>Cancel</button>
                </div>
                <div className='control'>
                  <button className='button is-primary' type='submit' disabled={(!this.state.name) || (!this.state.email) || (!this.state.message)}>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    )
  }
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
}

export default ContactPageTemplate
