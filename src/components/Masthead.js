import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

import { rhythm } from '../utils/typography'
import { media } from '../styles/theme'

export default function Masthead() {
  return (
    <StaticQuery
      query={mastheadQuery}
      render={data => {
        return (
          <div
            css={css`
              display: grid;
              grid-template-columns: 30% 5% 65%;
              grid-template-rows: 0.3fr 0.3fr .1fr 1fr;
              ${media.sm} {
                grid-template-rows: 0.5fr 0.5fr .1fr 1fr;
              }
            `}
          >
            <div
              css={css`
                grid-row: 1 / 5;
                align-self: center;
              `}
            >
              <Image
                fluid={data.myFace.childImageSharp.fluid}
                alt=""
              />
            </div>
            <h1
              css={css`
                color: #ff0000;
                font-family: 'Kiona';
                font-size: 2em;
                line-height: 1em;
                grid-column: 3 / 5;
                grid-row: 1 / 3;
                align-self: end;
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
                  margin-left: -1em;
                `}
              >
                Front-end
              </span>
              <br />
              <span
                css={css`
                  margin-left: -0.08em; // To align with paragraph tag
                `}
              >
                Developer
              </span>
            </h1>
            <p
              css={css`
                grid-column: 3 / 5;
                grid-row: 4 / 5;
              `}
            >Hello, my name is Jason Hall and I'm a passionate front-end developer located in Scottsdale, Arizona. I enjoy creating aesthetically pleasing websites that are highly performant, accessible and user friendly.</p>
          </div>
        )
      }}
    />
  )
}

const mastheadQuery = graphql`
  query MastheadQuery {
    myFace: file(absolutePath: { regex: "/jason-hall-poly.png/" }) {
      childImageSharp {
        fluid(maxWidth: 375) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
