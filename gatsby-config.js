const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'HarvestDash',
    description: "Secure Tomorrow's Harvest Today!",
    author: '@HarvestDash',
    email: 'admin@harvestdash.com',
    social: {
      facebook: 'https://web.facebook.com/HarvestDashHQ/',
      messenger: 'https://m.me/HarvestDashHQ',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-axe',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'HarvestDash',
        short_name: 'HarvestDash',
        start_url: '/',
        background_color: '#004d40',
        theme_color: '#004d40',
        display: 'minimal-ui',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
