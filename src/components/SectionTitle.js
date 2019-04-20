import React from 'react'
import { css } from '@emotion/core'

import { typeface } from '../styles/theme'

export default function SectionTitle({ children }) {
  return (
    <h2
      css={css`
        font-family: ${typeface.kiona};
        padding-bottom: 25px;
        color: rgba(0,0,0,0.8);
        position: relative;
        text-align: center;
        margin-bottom: 50px;
        &:after {
          content:"";
          background: rgba(0,0,0,0.8);
          position: absolute; 
          bottom: 0; 
          right: 0;
          left: 0; 
          height: 1px; 
          width: 75px;
          margin: auto;
        }
      `}
    >
      {children}
    </h2>
  )
}
