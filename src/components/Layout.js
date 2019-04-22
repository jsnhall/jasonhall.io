import React from 'react'
import { Global, css } from '@emotion/core'

import fonts from '../styles/fonts'
import { transitionTime } from '../styles/theme'
import { rhythm } from '../utils/typography'
import Header from './Header'
import Footer from './Footer'
// import Background from './Background'

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
            color: #1F0593;
            text-decoration: none;
            border-bottom: 1px solid #1F0593;
            vertical-align: top;
            transition: all ${transitionTime.fast};
          }
          a:visited {
            color: #283593;
          }
          a:hover {
            color: #ff0000;
            border-color: #ff0000;
            transition: all ${transitionTime.fast};
          }
          a:active {
            color: #283593;
          }
          ::selection {
            background-color: #ff0000;
            color: #fff;
          }
          img {
            margin: 0;
            padding: 0;
          }
          .gatsby-highlight {
            margin-bottom: 1.666rem;
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
        {/* <Background /> */}
      </div>
    </>
  )
}
