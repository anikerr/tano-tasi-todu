require('dotenv').config({
  path: '.env',
});

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.API_URL || 'http://localhost:1337',
        collectionTypes: ['page', 'people', 'project'],
        singleTypes: ['homepage', 'global', 'about', 'footer'],
        queryLimit: 1000
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-material-ui'
  ]
};
