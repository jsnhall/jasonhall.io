import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { IoLogoTwitter, IoLogoOctocat, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { color, transitionTime } from '../styles/theme'

const SocialLink = styled.a`
  font-size: 1.2em;
  margin-right: 1em;
  padding: 0;
  border: 0;
  color: ${color.red} !important;
  transition: all ${transitionTime.fast};
  &:hover {
    color: ${color.blue1} !important;
    transition: ${transitionTime.fast};
  }
  &:last-of-type {
    margin-right: 0;
  }
`

export default function Footer() {
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        const { social } = data.site.siteMetadata
        return (
          <footer
            css={css`
              display: flex;
              justify-content: center;
            `}
          >
            <SocialLink href={`https://github.com/${social.github}`}>
              <IoLogoOctocat aria-label="GitHub" />
            </SocialLink>
            <SocialLink href={`https://twitter.com/${social.twitter}`}>
              <IoLogoTwitter aria-label="Twitter" />
            </SocialLink>
            <SocialLink href={`https://instagram.com/${social.instagram}`}>
              <IoLogoInstagram aria-label="Instagram" />
            </SocialLink>
            <SocialLink href={`https://linkedin.com/in/${social.linkedin}`}>
              <IoLogoLinkedin aria-label="LinkedIn" />
            </SocialLink>
          </footer>
        )
      }}
    />
  )
}

const footerQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        social {
          twitter
          github
          instagram
          linkedin
        }
      }
    }
  }
`
