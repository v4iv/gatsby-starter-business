/**
 * Created by vaibhav on 31/3/18
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class BlogPage extends Component {
    render() {
        const {data} = this.props;
        const {edges: posts} = data.allMarkdownRemark;

        return (
            <div>
                <section className="hero is-primary is-bold">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-10 is-offset-1">
                                    <div className="section">
                                        <h1 className="title">
                                            Blog
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        {posts
                            .filter(post => post.node.frontmatter.templateKey === 'article-page')
                            .map(({node: post}) => (
                                <div
                                    className="content"
                                    style={{border: '1px solid #eaecee', padding: '2em 4em'}}
                                    key={post.id}
                                >
                                    <p>
                                        <Link className="has-text-primary" to={post.fields.slug}>
                                            {post.frontmatter.title}
                                        </Link>
                                        <span> &bull; </span>
                                        <small>{post.frontmatter.date}</small>
                                    </p>
                                    <p>
                                        {post.excerpt}
                                        <br/>
                                        <br/>
                                        <Link className="button is-small" to={post.fields.slug}>
                                            Keep Reading →
                                        </Link>
                                    </p>
                                </div>
                            ))}
                    </div>
                </section>
            </div>
        )
    }
}

BlogPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

export const blogPageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;