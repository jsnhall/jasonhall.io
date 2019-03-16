import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { rhythm } from '../utils/typography'

export default function Footer() {
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <footer>
            <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
            <span
              style={{ margin: `0 ${rhythm(1 / 3)}` }}
            >&bull;</span>
            <a href={`https://github.com/${social.github}`}>GitHub</a>
          </footer>
        )
      }}
    />
  )
}

const footerQuery = graphql`
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
