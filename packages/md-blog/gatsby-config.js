module.exports = {
  __experimentalThemes: ['adapter'],
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`
      }
    },
    'gatsby-transformer-remark'
  ]
};
