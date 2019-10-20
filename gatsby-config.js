module.exports = {
  siteMetadata: {
    title: `Front-end Web Developer`,
    author: `Jason Hall`,
    description: `Jason Hall is a professional front-end web developer located in Scottsdale, Arizona. He's a strong advocate of great user experiences, design systems, and accessibility.`,
    keywords: `Jason Hall, web developer, front-end web developer, ui/ux developer, web development blog, web development portfolio`,
    siteUrl: `https://jasonhall.io/`,
    social: {
      twitter: `jsonhall`,
      github: `jsnhall`,
      instagram: `jsnhall`,
      linkedin: `jsnhall`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/work`,
        name: `work`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jason Hall`,
        short_name: `Jason Hall`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff0000`,
        display: `minimal-ui`,
        icon: `src/images/hall-icon.svg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-99111567-3",
        head: false,
      },
    },
  ],
}
