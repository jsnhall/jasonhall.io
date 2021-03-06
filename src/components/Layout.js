import React from 'react'
import { Global, css } from '@emotion/core'

import fonts from '../styles/fonts'
import { color, radius, shadow, transitionTime } from '../styles/theme'
import { rhythm } from '../utils/typography'
import Header from './Header'
import Footer from './Footer'
import Background from './Background'

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: 'Kiona';
            font-weight: 400;
            font-display: swap;
            src: url(${fonts.Kiona})
          }
          @font-face {
            font-family: 'Kiona';
            font-weight: bold;
            font-display: swap;
            src: url(${fonts.KionaBold});
          }
          @font-face {
            font-family: 'Montserrat';
            font-weight: 300;
            font-style: normal;
            font-display: swap;
            src: url(${fonts.MontserratLight});
          }
          @font-face {
            font-family: 'Montserrat';
            font-weight: 300;
            font-style: italic;
            font-display: swap;
            src: url(${fonts.MontserratLightItalic});
          }
          @font-face {
            font-family: 'Montserrat';
            font-weight: 600;
            font-style: normal;
            font-display: swap;
            src: url(${fonts.MontserratSemiBold});
          }
          @font-face {
            font-family: 'Montserrat';
            font-weight: 600;
            font-style: italic;
            font-display: swap;
            src: url(${fonts.MontserratSemiBoldItalic});
          }
          // @font-face {
          //   font-family: 'Montserrat';
          //   font-weight: 700;
          //   font-style: normal;
          //   font-display: swap;
          //   src: url(${fonts.MontserratBold});
          // }
          // @font-face {
          //   font-family: 'Montserrat';
          //   font-weight: 700;
          //   font-style: italic;
          //   font-display: swap;
          //   src: url(${fonts.MontserratBoldItalic});
          // }      
          h1, h2, h3, h4, h5, h6 {
            margin-bottom: ${rhythm(1 / 4)};
          }
          a {
            color: ${color.blue1};
            text-decoration: none;
            border-bottom: 1px solid ${color.blue1};
            vertical-align: top;
            transition: all ${transitionTime.fast};
          }
          a:hover {
            color: ${color.red};
            border-color: ${color.red};
            transition: all ${transitionTime.fast};
          }
          a:active {
            color: ${color.blue2};
          }
          ::selection {
            background-color: ${color.red};
            color: #fff;
          }
          img {
            margin: 0;
            padding: 0;
          }
          .gatsby-highlight {
            margin-bottom: 1.666rem;
          }
          .button {
            background: #fff;
            font-size: 12px;
            font-weight: bold;
            text-transform: uppercase;
            border: none;
            padding: 1.2em 2.5em !important;
            color: ${color.red};
            border-radius: ${radius.lg};
            box-shadow: ${shadow.md};
            display: inline-block;
            &:visited {
              color: ${color.red};
            }
            &:hover {
              background: ${color.red};
              color: #fff !important;
            }
          }
        `}
      />
      <div
        css={css`
          margin: auto;
          max-width: 1200px;
          padding: 30px 30px;
          position: relative;
        `}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Background />
      </div>
    </>
  )
}
