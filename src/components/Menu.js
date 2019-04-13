import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import { media, transitionTime } from '../styles/theme'

const LI = styled.li`
  display: block;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: right;
  ${media.sm} {
    display: inline-block;
    margin-right: 50px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  > a {
    position: relative;
    color: #000000;
    cursor: pointer;
    padding-bottom: 5px;
    border: none;
    &:after {
      content:""; 
      background: #ff0000; 
      position: absolute; 
      bottom: 0; 
      right: 0; 
      height: 1px; 
      width: 15px;
    }
    &:hover {
      color: #ff0000;
      &:after { 
        width: 100%;
        transition: all ${transitionTime.fast};
      }
    }
  }
`

export default function Menu() {
  return (
    <nav>
      <ul
        css={css`
          display: inline-block;
          margin: 0;
        `}
      >
        <LI><Link to={'/'}>Home</Link></LI>
        <LI><Link to={'/work'}>Work</Link></LI>
        <LI><Link to={'/blog'}>Blog</Link></LI>
        <LI><Link to={'/contact'}>Contact</Link></LI>
      </ul>
    </nav>
  )
}
