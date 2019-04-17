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
              position: relative;
              width: 100%;
            `}
          >
          <div
            css={css`
              margin: 50px 0;
              ${media.sm} {
                display: flex;
                justify-content: space-around;
              }
            `}
          >
            <div
              css={css`
                width: 200px;
                ${media.xs} {
                  width: 250px;
                }
                ${media.sm} {
                  width: 350px;
                }
              `}
            >
              <Image
                fluid={data.myFace.childImageSharp.fluid}
                alt={author}
                css={css`
                  margin-right: ${rhythm(1 / 2)};
                  margin-bottom: 0;
                  margin-top: 7em;
                  max-width: 375px;
                  ${media.xs} {
                    margin-top: 10em;
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
                  position: absolute;
                  top: -2em;
                  right: 0;
                  z-index: 1;
                  line-height: 1em;
                  margin-left: -1.5em;
                  padding-left: 2em;
                  ${media.xs} {
                    font-size: 3em;
                  }
                  ${media.sm} {
                    position: relative;
                    top: 0;
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
              <p
                css={css`
                  margin-top: 2em;
                  padding-left: 0;
                  width: 100%;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  ${media.sm} {
                    position: relative;
                    padding-left: 1.5em;
                    width: 388px;
                  }
                  ${media.md} {
                    padding-left: 2.3em;
                    width: 555px;
                  }
                  ${media.lg} {
                    padding-left: 3em;
                    width: 666px;
                  }
                `}
              >Hello, my name is Jason Hall and I'm a passionate front-end developer located in Scottsdale, Arizona. I enjoy creating aesthetically pleasing websites that are highly performant, accessible, and user friendly.</p>
            </div>
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
        fluid(maxWidth: 375) {
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
