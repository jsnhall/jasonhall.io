import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'

import Logo from './Logo'

export default function Header() {
  return (
    <header
      css={css`
        margin: 30px 0;
      `}>
      <Logo />
    </header>
  )
}
