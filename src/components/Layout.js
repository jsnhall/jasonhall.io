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
            <>
              <Global
                styles={css`
                  h1, h2, h3, h4, h5, h6 {
                    margin-bottom: ${rhythm(1 / 4)};
                    color: #000000;
                  }
                  a {
                    color: #3949ab;
                    text-decoration: none;
                    border-bottom: 1px solid #283593;
                  }
                  a:visited {
                    color: #283593;
                  }
                  a:hover {
                    color: #d81b60;
                    border-color: #d81b60;
                  }
                  a:active {
                    color: #d81b60;
                  }
                  a:focus {
                    outline: none;
                    border: 2px dashed #ff0000;
                    padding: 3px 0;
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
                <header>
                  <h3
                    style={{
                      ...scale(1.5),
                      marginTop: 0,
                      marginBottom: 0,
                      marginLeft: rhythm(1 / 8),
                    }}
                  >
                    <Link
                      css={css`
                        box-shadow: none;
                        text-decoration: none;
                        color: #000000 !important;
                        border: none;
                      `}
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
                </header>
                <main>
                  {children}
                </main>
                <footer>
                  <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
                  <span
                    style={{ margin: `0 ${rhythm(1 / 3)}` }}
                  >&bull;</span>
                  <a href={`https://github.com/${social.github}`}>GitHub</a>
                </footer>
              </div>
            </>
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
