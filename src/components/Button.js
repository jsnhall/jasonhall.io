import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
require('focus-visible')

import { radius, shadow, color } from '../styles/theme'

export default function Button({ children, link }) {
  return (
    <Link
      to={link}
      css={css`
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
      `}
    >
      {children}
    </Link>
  )
}
