module.exports = {
  siteMetadata: {
    title: 'Gartenbau Felsberg GmbH',
    siteUrl: 'https://www.felsberg-gartenbau.ch/',
    description: 'Homepage der Gartenbau Felsberg GmbH in Neuwilen',
    keywords:
      'Gartenbau Felsberg GmbH, Neuanlagen, Gartenumgestaltung, Grabpflege, Kreuzlingen, Neuwilen',
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
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-165353089-1',
        head: false,
        anonymize: true,
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
        icon: 'src/images/felsberg-icon-round.png',
      },
    },
    'gatsby-plugin-netlify-cms',
  ],
}
