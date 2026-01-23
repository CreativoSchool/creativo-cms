module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 50 * 1024 * 1024, // 50MB
      },
    },
  },
});
