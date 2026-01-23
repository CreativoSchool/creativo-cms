module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: 'database/data.db',
    },
    useNullAsDefault: true,
  },
});
