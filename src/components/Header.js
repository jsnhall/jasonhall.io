import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import { rhythm, scale } from '../utils/typography'
import logo from '../images/hall-logo.svg' 

export default function Header() {
  return (
    <header
      css={css`
        margin: 30px 0;
      `}>
      <Link
        css={css`
          box-shadow: none;
          text-decoration: none;
          color: #000000 !important;
          border: none;
          &focus {
            outline: none;
            border: 1px solid #ff0000;
          }
        `}
        to={`/`}
      >
        <img
          src={logo}
          alt="Jason Hall"
          css={css`
            width: 260px;
          `}
        />
      </Link>
    </header>
  )
}
