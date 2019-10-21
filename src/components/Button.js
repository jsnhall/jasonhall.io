import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
require('focus-visible')

export default function Button({ children, link }) {
  const internal = /^\/(?!\/)/.test(link)

  if (internal) {
    return (
      <GatsbyLink
        to={link}
        className="button"
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a
      href={link}
      className="button"
      target="_blank"
    >
      {children}
    </a>
  )
}
