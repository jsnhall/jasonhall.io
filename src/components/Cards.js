import React from 'react'
import { css } from '@emotion/core'
import Image from 'gatsby-image'

import Button from '../components/Button'
import { rhythm } from '../utils/typography'
import { shadow, radius } from '../styles/theme'

export default function Cards(props) {
  return (
    <div
      css={css`
        box-shadow: ${shadow.md};
        border-radius: ${radius.md};
        background: #fff;
      `}
    >
      <Image
        css={css`
          border-radius: ${radius.md} ${radius.md} 0 0;
          width: 100%;
        `}
        fluid={props.thumbnail} 
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
              {props.title}
            </h3>
            <p
              css={css`
                margin: 1em 0 2em 0;
              `}
            >
              {props.description}
            </p>
          </div>
          <Button link={props.link}>View Project</Button>
        </div>
      </div>
    </div>
  )
}
