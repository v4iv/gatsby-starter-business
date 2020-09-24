import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import config from '../../config'
import { HTMLContent } from '../components/Content'
import ArticleTemplate from '../components/ArticleTemplate'
import SE0 from '../components/SEO'
import Share from '../components/Share'
import Disqus from '../components/Disqus'
import Layout from '../components/Layout'

const ArticlePage = (props) => {
  const { data: { markdownRemark: { html, fields: { slug }, frontmatter: { title, meta_title, meta_description, cover, date, tags } } } } = props

  return (
    <Layout>
      <section className='section'>
        <SE0
          title={title}
          meta_title={meta_title}
          meta_desc={meta_description}
          cover={cover.publicURL}
          slug={slug}
          date={date}
          siteTitleAlt={config.siteTitleAlt}
          userName={config.userName}
          siteTitle={config.siteTitle}
          siteUrl={config.siteUrl}
          siteFBAppID={config.siteFBAppID}
          userTwitter={config.userTwitter}
          pathPrefix={config.pathPrefix}
        />
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <ArticleTemplate
                content={html}
                contentComponent={HTMLContent}
                cover={cover}
                meta_title={meta_title}
                meta_desc={meta_description}
                tags={tags}
                title={title}
              />
              <Share
                title={title}
                slug={slug}
                excerpt={meta_description}
                siteUrl={config.siteUrl}
                pathPrefix={config.pathPrefix}
              />
              <hr />
              <Disqus
                title={title}
                slug={slug}
                siteUrl={config.siteUrl}
                disqusShortname={config.disqusShortname}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ArticlePage

export const pageQuery = graphql`
  query ArticleByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        cover {
            childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                    ...GatsbyImageSharpFluid
                }
            }
            publicURL
        }
        meta_title
        meta_description
        tags
      }
    }
  }
`
