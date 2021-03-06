module.exports = {
    siteMetadata: {
        title: "Learning Gatsby JS", 
        author: "Neil Phillips"
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`
    ]
}