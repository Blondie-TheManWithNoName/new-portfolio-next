module.exports = {
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/:all*(svg)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=600, must-revalidate", // Cache for 10 minutes
          },
        ],
      },
    ];
  },
};

// module.exports = {
//     async headers() {
//       return [
//         {
//           source: '/:all*(svg)',
//           locale: false,
//           headers: [
//             {
//               key: 'Cache-Control',
//               value: 'public, max-age=31536000, immutable', // Cache for a year
//             },
//           ],
//         },
//       ];
//     },
//   };
