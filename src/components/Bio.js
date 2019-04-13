import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

import { rhythm } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div
            css={css`
              display: flex;
              align-content: center;
              align-items: center;
              margin-bottom: 30px;
            `}
          >
            <div>
              <Image
                fixed={data.myFace.childImageSharp.fixed}
                alt={author}
                css={css`
                  margin-right: ${rhythm(1 / 2)};
                  margin-bottom: 0;
                `}
              />
            </div>
            <p
              style={{
                marginBottom: 0,
                alignSelf: `center`,
              }}
            >
              <em>{author} is a front-end developer in Scottsdale, Arizona.</em>
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    myFace: file(absolutePath: { regex: "/jason-hall-poly.jpg/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default Bio
