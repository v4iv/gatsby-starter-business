/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import config from '../../../meta/config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
