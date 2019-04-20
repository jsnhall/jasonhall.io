import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import { radius, shadow } from '../styles/theme'

export default function Button({ children, link, color }) {
  return (
    <Link
      to={link}
      css={css`
        background: red !important;
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        border: none;
        padding: 1.2em 2.5em !important;
        color: #fff;
        border-radius: ${radius.lg};
        box-shadow: ${shadow.sm};
        display: inline-block;
        $:hover {
          color: #000 !important;
        }
        &:visited {
          color: #fff;
        }
      `}
    >
      {children}
    </Link>
  )
}
