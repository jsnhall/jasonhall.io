import React from 'react'
import { css } from '@emotion/core'

import { shadow, radius } from '../styles/theme'

export default function Section({ children }) {
  return (
    <div
      css={css`
        background: #fff;
        box-shadow: ${shadow.md};
        border-radius: ${radius.md};
        padding: 2em 1.5em;
      `}
    >
      {children}
    </div>
  )
}
