module.exports = {
    async headers() {
      return [
        {
          source: '/public/favicon.ico',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=86400', // Cache por 1 dia
            },
          ],
        },
      ];
    },
  }