'use strict';

module.exports = {
  siteMetadata: {
    title: 'frontend-recalbox',
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-material-ui-styles',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/assets/`,
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
  ],
};
