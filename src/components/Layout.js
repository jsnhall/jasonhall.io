import React from 'react'
import { Link } from 'gatsby'
import { Global, css } from '@emotion/core'
import { StaticQuery, graphql } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <StaticQuery
        query={layoutQuery}
        render={data => {
          const { social } = data.site.siteMetadata
          return (
            <div>
              <Global
                styles={css`
                  a {
                    color: #3949ab;
                  }
                  a:active {
                    color: #d81b60;
                  }
                  a:visited {
                    color: #283593;
                  }
                  h1, h2, h3, h4, h5, h6 {
                    margin-bottom: ${rhythm(1 / 4)};
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
                    marginBottom: rhythm(1.5),
                    marginTop: 0,
                    color: `#000000`,
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
