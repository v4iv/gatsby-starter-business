/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Offerings from '../components/Offerings'
import Testimonials from '../components/Testimonials'

export const HomePageTemplate = ({
                                     title,
                                     heading,
                                     description,
                                     offerings,
                                     testimonials,
                                 }) => (
    <div>
        <section className="hero is-primary is-bold">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="section">
                                <h1 className="title">
                                    {title}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section section--gradient">
            <div className="container">

                <div className="section">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="content">
                                <div className="columns">
                                    <div className="column is-7">
                                        <h3 className="has-text-weight-semibold is-size-2">
                                            {heading}
                                        </h3>
                                        <p>{description}</p>
                                    </div>
                                </div>
                                <Offerings gridItems={offerings.blurbs}/>
                                <h2 className="has-text-weight-semibold is-size-2">Testimonials</h2>
                                <Testimonials testimonials={testimonials}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

HomePageTemplate.propTypes = {
    title: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    offerings: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
    testimonials: PropTypes.array,

};

const HomePage = ({data}) => {
    const {frontmatter} = data.markdownRemark;

    return (
        <HomePageTemplate
            title={frontmatter.title}
            heading={frontmatter.heading}
            description={frontmatter.description}
            offerings={frontmatter.offerings}
            testimonials={frontmatter.testimonials}
        />
    )
};

HomePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
        offerings {
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`;