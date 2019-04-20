import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { css } from '@emotion/core'

import { media } from '../styles/theme'

export default function Background() {
  return (
    <StaticQuery
      query={backgroundQuery}
      render={data => {
        return (
          <div
            css={css`
              position: fixed;
              top: 0;
              width: 100%;
              z-index: -1;
              display: grid;
              grid-template-columns: auto auto;
              grid-template-rows: auto auto;
              overflow: hidden;
              left: 0;
              right: 0;
              height: 100vh
            `}
          >
            <div
              css={css`
                transform: rotate(50deg);
                animation: spin 80s linear infinite;
                @keyframes spin { 100% { transform:rotate(360deg); } }
                grid-column: 1 / 3;
                grid-row: 1 / 2;
                justify-self: end;
                margin-top: -50px;
                margin-right: -50px;
                width: 375px;
                ${media.sm} {
                  grid-column: 2 / 3;
                  grid-row: 1 / 2;
                  margin-top: -150px;
                  margin-right: -100px;
                  width: 500px;
                }
                ${media.md} {
                  margin-top: -150px;
                  margin-right: -100px;
                  width: 800px;
                }
              `}
            >
              <Image
                fluid={data.polygon.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div
              css={css`
                width: 600px;
                transform: rotate(14deg);
                animation: spin 60s linear infinite;
                @keyframes spin { 100% { transform:rotate(360deg); } }
                grid-column: 1 / 2;
                grid-row: 2 / 3;
                margin-top: -50px;
                margin-left: -75px;
                width: 300px;
                ${media.sm} {
                  margin-top: -100px;
                  margin-left: -50px;
                  width: 400px;
                }
                ${media.md} {
                  margin-top: -100px;
                  margin-left: -50px;
                  width: 600px;
                }
              `}
            >
              <Image
                fluid={data.polygon.childImageSharp.fluid}
                alt=""
              />
            </div>
          </div>
        )
      }}
    />
  )
}

const backgroundQuery = graphql`
  query backgroundQuery {
    polygon: file(absolutePath: { regex: "/polygon.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
