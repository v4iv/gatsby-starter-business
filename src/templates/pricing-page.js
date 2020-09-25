import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PricingPageTemplate from '../components/PricingPageTemplate'
import Layout from '../components/Layout'

const PricingPage = (props) => {
  const { data: { markdownRemark: { frontmatter: { title, meta_title, meta_description, pricing } } } } = props

  return (
    <Layout>
      <PricingPageTemplate
        title={title}
        meta_title={meta_title}
        meta_description={meta_description}
        pricing={pricing}
      />
    </Layout>
  )
}

PricingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PricingPage

export const pricingPageQuery = graphql`
  query PricingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
