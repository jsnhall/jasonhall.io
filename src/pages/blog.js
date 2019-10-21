import React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/core'

import Layout from '../components/Layout'
import SectionTitle from '../components/SectionTitle'
import { rhythm } from '../utils/typography'

export default function Blog({ data }) {
  let posts = data.allFile.nodes
  
  return (
    <Layout>
      <div
        css={css`
          max-width: ${rhythm(20)};
          margin: auto;
        `}
      >
        <SectionTitle>All Posts</SectionTitle>
        {posts.map(post => {
          const title = post.childMarkdownRemark.frontmatter.title || post.childMarkdownRemark.fields.slug
          return (
            <div
              key={post.childMarkdownRemark.fields.slug}
            >
              <div>
                <h2
                  css={css`
                    font-size: ${rhythm(0.7)};
                    line-height: ${rhythm(1)};
                  `}
                >
                  <Link
                    css={css`
                      box-shadow: none;
                      border-bottom: none;
                    `}
                    to={post.childMarkdownRemark.fields.slug}>
                    {title}
                  </Link>
                </h2>
                <small>{post.childMarkdownRemark.frontmatter.date}</small>
              </div>
              <p
                css={css`
                  margin: 1em 0 0 0;
                `}
                dangerouslySetInnerHTML={{ __html: post.childMarkdownRemark.excerpt }}
              />
              <hr
                css={css`
                  margin: ${rhythm(1.5)} 0;
                `}
              />
            </div>
          )}
        )}
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query postQuery {
    allFile(
      filter: {sourceInstanceName: {eq: "blog"}}
      sort: {fields: [childMarkdownRemark___frontmatter___date], order:DESC}
    ) {
      nodes {
        childMarkdownRemark {
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
