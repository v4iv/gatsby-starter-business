import React from 'react'

const Footer = (props) => {
  const { copyright } = props

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {copyright}
          </p>
          <p>Powered by <a href='https://www.gatsbyjs.org'>Gatsby</a> and <a href='https://www.netlifycms.org'>Netlify CMS</a> | <a href='https://github.com/v4iv/gatsby-starter-business'>Github Repository</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
