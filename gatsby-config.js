module.exports = {
  siteMetadata: {
    title: 'Gartenbau Felsberg GmbH',
    siteUrl: 'https://www.felsberg-gartenbau.ch/',
    description: 'Homepage der Gartenbau Felsberg GmbH in Neuwilen',
    keywords:
      'Gartenbau Felsberg GmbH, Neuanlagen, Gartenumgestaltung, Grabpflege, Kreuzlingen, Neuwilen',
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark', // parses Markdown files using Remark.,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images-v2`,
          },
        ],
      },
    },
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
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          placeholder: 'blurred',
          breakpoints: [750, 1080, 1366, 1920],
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-VLRRM9C75S'],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: false,
        },
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
  ],
}
