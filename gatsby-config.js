const theme = require('./src/settings/theme');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-jss',
      options: { theme }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '中国排位起床社区',
        short_name: 'CNRBW',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'standalone',
        orientation: 'portrait',
        icon: 'src/images/favicon.png'
      }
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/Template`)
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-64916263-1'
      }
    }
  ]
};
