module.exports = {
  siteMetadata: {
    title: `jayceehex.github.io`,
    description: `Another portfolio site, made with Gatsby.`,
    author: `Jen Hoskins`,
    navLinks: [
      {
        name: "About me",
        link: "/",
      },
      {
        name: "About this site",
        link: "/about-site",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jayceehex.github.io`,
        short_name: `jayceehex`,
        start_url: `/`,
        background_color: `#eceff1`,
        theme_color: `#304ffe`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
