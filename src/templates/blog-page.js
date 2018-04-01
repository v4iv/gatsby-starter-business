/**
 * Created by vaibhav on 1/4/18
 */
import React, {Component} from "react";
import Link from "gatsby-link";

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const BlogPage = ({data, pathContext}) => {
    const {group, index, first, last, pageCount} = pathContext;
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    return (
        <div>
            <Helmet>
                <title>Blog | Gatsby Starter Business</title>
            </Helmet>
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
                    {group
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
            <div className="previousLink">
                <NavLink test={first} url={previousUrl} text="Go to Previous Page"/>
            </div>
            <div className="nextLink">
                <NavLink test={last} url={nextUrl} text="Go to Next Page"/>
            </div>
        </div>
    );
};
export default BlogPage;