import React from 'react'
import { Link } from 'gatsby'
import { Global, css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <StaticQuery
        query={layoutQuery}
        render={data => {
          const { social } = data.site.siteMetadata
          return (
            <div>
              <Global
                styles={css`
                  h1, h2, h3, h4, h5, h6 {
                    margin-bottom: ${rhythm(1 / 4)};
                    color: #000000;
                  }
                  a {
                    color: #3949ab;
                    text-decoration: none;
                  }
                  a:active {
                    color: #d81b60;
                  }
                  a:visited {
                    color: #283593;
                  }
                `}
              />
              <div
                style={{
                  marginLeft: `auto`,
                  marginRight: `auto`,
                  maxWidth: rhythm(20),
                  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }}
              >
                <h3
                  style={{
                    ...scale(1.5),
                    marginTop: 0,
                    marginBottom: 0,
                    marginLeft: rhythm(1 / 8),
                  }}
                >
                  <Link
                    style={{
                      boxShadow: `none`,
                      textDecoration: `none`,
                      color: `inherit`,
                    }}
                    to={`/`}
                  >
                    {title}
                  </Link>
                </h3>
                <p
                  style={{
                    marginBottom: rhythm(2),
                  }}
                >
                  <span
                    style={{
                      ...scale(-1 / 4),
                      color: `rgba(0, 0, 0, 0.6)`,
                    }}
                  >
                    Another web development blog.
                  </span>
                </p>
                {children}
                <footer>
                  <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
                  <span
                    style={{ margin: `0 ${rhythm(1 / 3)}` }}
                  >&bull;</span>
                  <a href={`https://github.com/${social.github}`}>GitHub</a>
                </footer>
              </div>
            </div>
          )
        }}
      />
    )
  }
}

const layoutQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        social {
          twitter
          github
        }
      }
    }
  }
`

export default Layout
