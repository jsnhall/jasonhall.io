import React from 'react'
import { css } from '@emotion/core'

import { media } from '../styles/theme'
import Logo from './Logo'
import Menu from './Menu'

export default function Header() {
  return (
    <header
      css={css`
        margin-bottom: 70px;
        display: flex;
        justify-content: space-between;
        ${media.sm} {
          align-items: center;
        }
      `}>
      <Logo />
      <Menu />
    </header>
  )
}
