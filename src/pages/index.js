import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Fade from 'react-reveal/Fade'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          // title="Web Development Blog"
          // keywords={[`blog`, `jason hall`, `web development blog`, `html blog`, `css blog`, `javascript blog`]}
        />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Fade bottom>
              <div key={node.fields.slug}>
                <h2
                  css={css`
                    font-size: ${rhythm(0.8)};
                    line-height: ${rhythm(1)};
                  `}
                >
                  <Link
                    css={css`
                      box-shadow: none;
                      border-bottom: none;
                    `}
                    to={node.fields.slug}>
                    {title}
                  </Link>
                </h2>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </Fade>
          )
        })}
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
