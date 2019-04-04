import React from 'react'
import config from '../../../config'
import Helmet from 'react-helmet'

const SE0 = ({ title, meta_title, meta_desc, cover, slug, date }) => {
  let postURL = config.siteUrl + slug
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
  let image = config.siteUrl + realPrefix + cover

  const breadcrumbSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': config.siteUrl,
          name: 'Home',
          image: config.siteUrl + '/icons/icon-512x512.png',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@id': postURL,
          name: title,
          image,
        },
      },
    ],
  }

  const blogPostingSchemaOrgJSONLD = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    url: postURL,
    name: title,
    alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    headline: title,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postURL,
    },
    'author': {
      '@type': 'Person',
      'name': config.userName,
    },
    image: {
      '@type': 'ImageObject',
      url: image,
    },
    datePublished: date,
    dateModified: date,
    publisher: {
      '@type': 'Organization',
      name: config.siteTitle,
      logo: {
        '@type': 'ImageObject',
        url: config.siteUrl + '/icons/icon-512x512.png',
      },
    },
    description: meta_desc,
  }

  return (
    <Helmet>
      <title>{meta_title}</title>
      {/* General tags */}
      <meta name='description' content={meta_desc} />
      <meta name='image' content={cover} />
      {/* Schema.org tags */}
      <script type='application/ld+json'>
        {JSON.stringify(breadcrumbSchemaOrgJSONLD)}
      </script>
      <script type='application/ld+json'>
        {JSON.stringify(blogPostingSchemaOrgJSONLD)}
      </script>
      {/* OpenGraph tags */}
      <meta property='og:url' content={postURL} />
      <meta property='og:type' content='article' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={meta_desc} />
      <meta property='og:image' content={image} />
      <meta
        property='fb:app_id'
        content={config.siteFBAppID ? config.siteFBAppID : ''}
      />
      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:creator'
        content={config.userTwitter ? config.userTwitter : ''}
      />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={meta_desc} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  )
}

export default SE0
