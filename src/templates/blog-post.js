import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'


import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <div
          css={css`
            max-width: ${rhythm(20)};
            margin: auto;
          `}
        >
          <h1>{post.frontmatter.title}</h1>
          <small
            css={css`
              display: block;
              margin-bottom: ${rhythm(1)};
            `}
          >
            {post.frontmatter.date}
          </small>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            css={css`
              margin-bottom: ${rhythm(1)};
            `}
          />
          <ul
            css={css`
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              list-style: none;
              padding: 0;
              margin-left: 0;
            `}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
