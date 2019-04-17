import React from 'react'
import { Global, css } from '@emotion/core'

import { transitionTime } from '../styles/theme'
import { rhythm } from '../utils/typography'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          h1, h2, h3, h4, h5, h6 {
            margin-bottom: ${rhythm(1 / 4)};
          }
          a {
            color: #1F0593;
            text-decoration: none;
            border-bottom: 1px solid #1F0593;
            vertical-align: top;
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
          a:focus {
            outline: none;
            outline: 1px solid #ff0000;
            padding: 1px 0;
          }
          ::selection {
            background-color: #ff0000;
            color: #fff;
          }
          img {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <div
        css={css`
          margin: auto;
          max-width: 1200px;
          padding: 30px 30px;
        `}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
