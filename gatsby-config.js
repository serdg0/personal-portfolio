module.exports = {
  pathPrefix: "/personal-portfolio",
  siteMetadata: {
    title: `Sergio Diaz`,
    description: `Hi, my name is Sergio, and I'm a web developer from a remote web development program. Currently looking for opportunities, to prove my skills and develop my potential.`,
    author: `Sergio Diaz`,
    siteUrl: `https://sergiodev.netlify.com`,
    image: `src/images/icons/portfolio.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-160612754-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
