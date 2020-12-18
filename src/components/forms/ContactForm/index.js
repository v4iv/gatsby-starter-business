import React from 'react'
import { Formik, Field } from 'formik'
import { navigate } from 'gatsby'
import validationSchema from './validationSchema'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        fetch("/?no-cache=1", {                                 //eslint-disable-line
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': 'contact',
            ...values,
          }),
        })
          .then(() => {
            navigate('/contact/success')
            setSubmitting(false)
          })
          .catch(error => {
            console.log(error)
            alert("Error: Please Try Again!");                            //eslint-disable-line
            setSubmitting(false)
          })
      }}
      render={({
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleReset,
      }) => (<form
        name='contact'
        onSubmit={handleSubmit}
        onReset={handleReset}
        data-netlify='true'
        data-netlify-honeypot='bot-field'
      >
        <div className='field'>
          <label className='label'>Name</label>
          <div className='control'>
            <Field className='input' type='text' placeholder='Full Name' name='name' id='name' />
          </div>
          {touched.name && errors.name && <small className='has-text-danger'>{errors.name}</small>}
        </div>

        <div className='field'>
          <label className='label'>Email</label>
          <div className='control'>
            <Field className='input' type='email' placeholder='Email' name='email' id='email' />
          </div>
          {touched.email && errors.email && <small className='has-text-danger'>{errors.email}</small>}
        </div>

        <div className='field'>
          <label className='label'>Message</label>
          <div className='control'>
            <Field className='textarea' component='textarea' placeholder='Message' name='message' id='message' rows='6' />
          </div>
          {touched.message && errors.message && <small className='has-text-danger'>{errors.message}</small>}
        </div>

        <div className='field is-grouped is-pulled-right'>
          <div className='control'>
            <button className='button' type='reset'>Clear</button>
          </div>
          <div className='control'>
            <button className='button is-primary' type='submit' disabled={isSubmitting}>Submit</button>
          </div>
        </div>
      </form>)}
    />
  )
}

export { ContactForm }
