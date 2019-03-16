import React from 'react'
import { Global, css } from '@emotion/core'

import { rhythm } from '../utils/typography'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ title, children }) {
  return (
    <>
      <Global
        styles={css`
          h1, h2, h3, h4, h5, h6 {
            margin-bottom: ${rhythm(1 / 4)};
            color: #000000;
          }
          a {
            color: #1F0593;
            text-decoration: none;
            border-bottom: 1px solid #1F0593;
          }
          a:visited {
            color: #283593;
          }
          a:hover {
            color: #ff0000;
            border-color: #ff0000;
            transition: all 0.3s;
          }
          a:active {
            color: #283593;
          }
          a:focus {
            outline: none;
            border: 1px solid #ff0000;
            padding: 1px 0;
          }
          ::selection {
            background-color: #ff0000;
            color: #fff;
          }
        `}
      />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(20),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Header title={title} />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
