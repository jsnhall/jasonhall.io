import React from 'react'
import { css } from '@emotion/core'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import Button from '../components/Button'
import Cards from '../components/Cards'
import SectionTitle from '../components/SectionTitle'

import { media } from '../styles/theme'

export default function Work({ data }) {
  let posts = data.allFile.edges
  let images = data.allImageSharp.edges

  const allFluidObjects = images.map(img => {
    return img.node.fluid
  }) 

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
            ${media.md} {match st
              grid-template-columns: 1fr 1fr 1fr;
            }
          `}
        >
          {posts.map(({ node }) => {
            // Get thumbnail's path
            var thumbnailPath = node.childMarkdownRemark.frontmatter.thumbnail

            // Get thumbnail's file name
            var fileName = thumbnailPath.substr(thumbnailPath.lastIndexOf('/') + 1);

            const filteredFluidObj = allFluidObjects.filter((fluidObj, i) => {
              if (fluidObj.src.includes(fileName)) {
                return fluidObj
              }
            })

            return (
              <Cards
                key={node.id}
                thumbnail={filteredFluidObj[0]}
                title={node.childMarkdownRemark.frontmatter.title}
                description={node.childMarkdownRemark.frontmatter.description}
                link={node.childMarkdownRemark.frontmatter.link}
              />
            )}
          )}
        </div>
      </div>
    </Layout>
  )
}

export const workQuery = graphql`
  query workQuery {
    allFile(filter: {sourceInstanceName: {eq: "work"}}) {
      edges {
        node {
          id
          childMarkdownRemark {
            frontmatter {
              title
              thumbnail
              tags
              link
              description
              date
            }
          }
        }
      }
    }
    allImageSharp {
      edges {
        node {
          fluid(maxWidth: 360, maxHeight: 200) {
            ...GatsbyImageSharpFluid
            src
          }
        }
      }
    }
  }
`
