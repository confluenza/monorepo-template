module.exports = {
  siteMetadata: {
    title: 'Confluenza Monorepo Template',
    editBaseUrl: 'https://github.com/confluenza/monorepo-template/blob/master'
  },
  plugins: [
    {
      resolve: '@confluenza/gatsby-theme-confluenza',
      options: {
        mdx: true,
        ignore: []
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-root-import'
  ]
}
