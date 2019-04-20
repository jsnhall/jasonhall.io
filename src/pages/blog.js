import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'

import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

export default function Blog() {
  return (
    <StaticQuery
      query={postQuery}
      render={data => {
        let posts = data.allMarkdownRemark.edges;
        return (
          <Layout>
            <div
              css={css`
                max-width: ${rhythm(20)};
                margin: auto;
              `}
            >
              <h1
                css={css`
                  margin-bottom: 50px;
                `}
              >
                Blog
              </h1>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div
                    key={node.fields.slug}
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
                          to={node.fields.slug}>
                          {title}
                        </Link>
                      </h2>
                      <small>{node.frontmatter.date}</small>
                    </div>
                    <p
                      css={css`
                        margin: 1em 0 0 0;
                      `}
                      dangerouslySetInnerHTML={{ __html: node.excerpt }}
                    />
                    <hr
                      css={css`
                        margin: ${rhythm(1.5)} 0;
                      `}
                    />
                  </div>
                )
              })}
            </div>
          </Layout>
        )
      }}
    />
  )
}

export const postQuery = graphql`
  query postQuery {
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
