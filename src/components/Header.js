import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import { rhythm, scale } from '../utils/typography'

export default function Header() {
  return (
    <header>
      <h3
        css={css`
          font-family: 'Kiona Regular', sans-serif;
          margin-top: 0;
          margin-bottom: 0;
        `}
      >
        <Link
          css={css`
            box-shadow: none;
            text-decoration: none;
            color: #000000 !important;
            border: none;
          `}
          to={`/`}
        >
          Jason Hall
        </Link>
      </h3>
      <p
        style={{
          marginBottom: rhythm(2),
        }}
      >
        <span
          style={{
            ...scale(-1 / 4),
            color: `rgba(0, 0, 0, 0.6)`,
          }}
        >
          Another web development blog.
        </span>
      </p>
    </header>
  )
}
