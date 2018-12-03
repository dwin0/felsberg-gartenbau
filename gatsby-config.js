module.exports = {
  siteMetadata: {
    title: 'Felsberg Gartenbau',
    siteUrl: 'https://felsberg-gartenbau.netlify.com/', // TODO: change to real URL
    description: 'Homepage der Gartenbau Felsberg GmbH in Neuwilen',
    keywords:
      'Gartenbau Felsberg GmbH, Neuanlagen, Gartenumgestaltung, Grabpflege, Neuwilen',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem', // creating file nodes from the file system
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Felsberg Gartenbau Tägerwilen',
        short_name: 'Felsberg',
        start_url: '/',
        background_color: '#165f26',
        theme_color: '#165f26',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site. TODO: Change icon
      },
    },
    // TODO: this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
