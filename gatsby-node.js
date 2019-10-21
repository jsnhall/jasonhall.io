const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allFile(
          filter: {sourceInstanceName: {eq: "blog"}}
          sort: {fields: [childMarkdownRemark___frontmatter___date], order:DESC}
          limit: 1000
        ) {
          nodes {
            childMarkdownRemark {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allFile.nodes

    posts.forEach((post, index) => {
      console.log(posts.childMarkdownRemark)
      const previous = index === posts.length - 1 ? null : posts[index + 1].childMarkdownRemark
      const next = index === 0 ? null : posts[index - 1].childMarkdownRemark

      createPage({
        path: post.childMarkdownRemark.fields.slug,
        component: blogPost,
        context: {
          slug: post.childMarkdownRemark.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
