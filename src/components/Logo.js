import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import { media } from '../styles/theme'
import logo from '../images/hall-logo.svg' 
import stackedLogo from '../images/hall-logo-stacked.svg'

export default function Header() {
  return (
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
          display: none;
          ${media.sm} {
            display: block;
          }
        `}
      />
      <img
        src={stackedLogo}
        alt="Jason Hall"
        css={css`
          width: 150px;
          display: block;
          ${media.sm} {
            display: none;
          }
        `}
      />
    </Link>
  )
}
