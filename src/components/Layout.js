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
            color: #3949ab;
            text-decoration: none;
            border-bottom: 1px solid #283593;
          }
          a:visited {
            color: #283593;
          }
          a:hover {
            color: #d81b60;
            border-color: #d81b60;
          }
          a:active {
            color: #d81b60;
          }
          a:focus {
            outline: none;
            border: 2px dashed #ff0000;
            padding: 3px 0;
          }
        `}
      />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(23),
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
