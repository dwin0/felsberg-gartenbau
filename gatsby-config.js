module.exports = {
  siteMetadata: {
    title: 'Gartenbau Felsberg GmbH',
    siteUrl: 'https://felsberg-gartenbau.netlify.com/', // TODO: change to real URL
    description: 'Homepage der Gartenbau Felsberg GmbH in Neuwilen',
    keywords:
      'Gartenbau Felsberg GmbH, Neuanlagen, Gartenumgestaltung, Grabpflege, Neuwilen',
  },
  plugins: [
    'gatsby-plugin-react-helmet', // lets you control your document head
    'gatsby-transformer-remark', // parses Markdown files using Remark.
    'gatsby-plugin-catch-links', // replaces markdown link behaviour <a> with gatsby link behaviour
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem', // creating file nodes from the file system
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
    'gatsby-plugin-netlify-cms',
    // TODO: this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
