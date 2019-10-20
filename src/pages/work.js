import React from 'react'
import { css } from '@emotion/core'

import Layout from '../components/Layout'
import Button from '../components/Button'
import Cards from '../components/Cards'
import SectionTitle from '../components/SectionTitle'

import { media } from '../styles/theme'

export default function Work() {
  return (
    <Layout>
      <div 
        css={css`
          margin-bottom: 50px;
        `}
      >
        <SectionTitle>My Work</SectionTitle>

        <div
          css={css`
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
          `}
        >
          <div css={css`margin-right: 10px;`}>
            <Button>Sites</Button>
          </div>
          <div css={css`margin-left: 10px;`}>
            <Button>Emails</Button>
          </div>
        </div>
        
        <div
          css={css`
            display: grid;
            grid-template-rows: auto auto auto;
            grid-gap: 1.5em;
            grid-template-rows: 1fr;
            ${media.xs} {
              grid-template-columns: 1fr 1fr;
            }
            ${media.sm} {
              grid-template-columns: 1fr 1fr 1fr;
            }
            ${media.md} {
              grid-template-columns: 1fr 1fr 1fr;
            }
          `}
        >
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </Layout>
  )
}
