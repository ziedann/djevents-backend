module.exports = ({ env }) => ({
  upload: {
    provider: 'local',
    options: {
      sizeLimit: 100 * 1024 * 1024 // 100mb in bytes
    },
  },
});
