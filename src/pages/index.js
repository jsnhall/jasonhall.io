import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'

import Masthead from '../components/Masthead'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import SectionTitle from '../components/SectionTitle'
import Section from '../components/Section'
import Button from '../components/Button'
import { rhythm } from '../utils/typography'
import { media } from '../styles/theme'

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
        <Masthead />
        <SectionTitle
          level="h2"
          id="recent-posts"
        >
          Recent Posts
        </SectionTitle>
        <div
          css={css`
            display: grid;
            grid-template-rows: auto auto auto;
            grid-gap: 1.5em;
            margin-bottom: 50px;
            ${media.md} {
              grid-template-rows: 1fr;
              grid-template-columns: 1fr 1fr 1fr;
            }
          `}
        >
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Section>
                <div
                  key={node.fields.slug}
                  css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    height: 100%;
                    justify-content: space-between;
                  `}
                >
                  <div>
                    <h3
                      id={title}
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
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                      css={css`
                        margin: 1em 0 2em 0;
                      `}
                      dangerouslySetInnerHTML={{ __html: node.excerpt }}
                    />
                  </div>
                  <Button link={node.fields.slug}>Read More</Button>
                </div>
              </Section>
            )
          })}
        </div>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3) {
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
