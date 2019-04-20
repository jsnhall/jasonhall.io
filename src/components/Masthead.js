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
          <div>
            <div>
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
                `}
              >
                <span
                  css={css`
                    font-weight: 400;
                    font-size: 0.7em;
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
              <p>Hello, my name is Jason Hall and I'm a passionate front-end developer located in Scottsdale, Arizona. I enjoy creating aesthetically pleasing websites that are highly performant, accessible and user friendly.</p>
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
