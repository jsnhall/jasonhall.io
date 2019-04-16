import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

import { rhythm } from '../utils/typography'
import { media } from '../styles/theme'

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
              justify-content: space-around;
              margin-bottom: 100px;
            `}
          >
            <div
              css={css`
                width: 300px;
              `}
            >
              <Image
                fluid={data.myFace.childImageSharp.fluid}
                alt={author}
                css={css`
                  margin-right: ${rhythm(1 / 2)};
                  margin-bottom: 0;
                  margin-top: 4em;
                  max-width: 300px;
                  ${media.xs} {
                    margin-top: 4.5em;
                  }
                  ${media.sm} {
                    margin-top: 5.5em;
                  }
                  ${media.md} {
                    margin-top: 6em;
                  }
                  ${media.lg} {
                    margin-top: 7em;
                  }
                `}
              />
            </div>
            <div>
              <h1
                css={css`
                  color: #ff0000;
                  font-family: 'Kiona';
                  font-size: 2em;
                  position: relative;
                  z-index: 1;
                  line-height: 1em;
                  margin-left: -1.5em;
                  padding-left: 0.5em;
                  ${media.xs} {
                    font-size: 3em;
                  }
                  ${media.sm} {
                    font-size: 3.5em;
                  }
                  ${media.md} {
                    font-size: 5em;
                  }
                  ${media.lg} {
                    font-size: 6em;
                  }
                `}
              >
                <span
                  css={css`
                    font-weight: 400;
                    font-size: 0.7em;
                    margin-left: -1.5em;
                  `}
                >
                  Front-end
                </span>
                <br />
                <span
                  css={css`
                    margin-left: -10px; // To align with paragraph tag
                  `}
                >
                  Developer
                </span>
              </h1>
              {/* <p
                style={{
                  marginBottom: 0,
                  alignSelf: `center`,
                }}
              >
                <em>{author} is a front-end developer in Scottsdale, Arizona.</em>
              </p> */}
            </div>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    myFace: file(absolutePath: { regex: "/jason-hall-poly.png/" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
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
