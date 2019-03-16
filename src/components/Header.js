import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import { rhythm, scale } from '../utils/typography'

export default function Header({ title }) {
  return (
    <header>
      <h3
        style={{
          ...scale(1.5),
          marginTop: 0,
          marginBottom: 0,
          marginLeft: rhythm(1 / 8),
        }}
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
          {title}
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
