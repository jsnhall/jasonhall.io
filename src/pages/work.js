import React from 'react'
import { css } from '@emotion/core'

import Layout from '../components/Layout'
import SectionTitle from '../components/SectionTitle'
import { rhythm } from '../utils/typography'
import underConstruction from '../images/construction.gif'

export default function Work() {
  return (
    <Layout>
      <div 
        css={css`
          max-width: ${rhythm(20)};
          margin: auto;
          margin-bottom: 50px;
        `}
      >
        <SectionTitle>My Work</SectionTitle>
        <p css={css`margin-bottom: 50px;`}>Well, this awkward. If you've landed on this page, then it most likely means you know I'm looking for work and you want to check out some of my recent projects. Honestly, I just need more time to put my rad skills on display. Until then, here's a sweet gif from the 90's to let you know the true status of this page.</p>
        <img
          css={css`
            margin: auto;
            display: block;
          `}
          src={underConstruction}
          alt="Under construction"
        />
      </div>
    </Layout>
  )
}
