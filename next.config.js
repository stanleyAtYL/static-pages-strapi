// next.config.js
// const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
// const withLess = require('next-with-less');

module.exports = withImages({
  env: {
    HOST: process.env.HOST,
  },
  trailingSlash: true,
  future: {
    webpack5: true,
  },
  async headers() {
    return [
      {
        source:'/',
        headers:[
          {
            key:'Cache-Control',
            value:'no-cache'
          },
          {
            key:'Access-Control-Allow-Origin',
            value:'*',
          }
        ]
      }
    ]
  }
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/home-page',
  //       permanent: true,
  //     },
  //   ];
  // },
});

// module.exports = withPlugins([
//   withImages,
//   [
//     withLess,
//     {
//       cssModules: true,
//       lessLoaderOptions: {
//         javascriptEnabled: true,
//         importLoaders: 0,
//       },
//       cssLoaderOptions: {
//         importLoaders: 1,
//         localIdentName: '[local]___[hash:base64:5]',
//       },
//     },
//   ],
//   nextConfig,
// ]);
