import React from 'react'
import { css } from '@emotion/core'

import Button from '../components/Button'
import { rhythm } from '../utils/typography'
import { shadow, radius } from '../styles/theme'

export default function Cards({ children }) {
  return (
    <div
      css={css`
        box-shadow: ${shadow.md};
        border-radius: ${radius.md};
        background: #fff;
      `}
    >
      <img
        css={css`
          border-radius: ${radius.md} ${radius.md} 0 0;
          width: 100%;
        `}
        src="https://via.placeholder.com/360x203" 
        alt=""
      />
      <div
        css={css`
          padding: 2em 1.5em;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            height: 100%;
            justify-content: space-between;
          `}
        >
          <div css={css`
            align-self: flex-start;
          `}>
            <h3
              css={css`
                font-size: ${rhythm(0.7)};
                line-height: ${rhythm(1)};
              `}
            >
              Test
            </h3>
            <p
              css={css`
                margin: 1em 0 2em 0;
              `}
            >
              Lorem ipsum 
            </p>
          </div>
          <Button>Read More</Button>
        </div>
      </div>
    </div>
  )
}
