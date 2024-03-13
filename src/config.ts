export default {
  port: process.env.PORT || 3010,
  database: {
    type: 'postgres',
    connection: {
      host: process.env.DATABASE_HOST || '127.0.0.3',
      port: process.env.DATABASE_PORT || 5432,
      database: process.env.DATABASE_NAME || 'entourage-base',
      user: process.env.DATABASE_USER || 'entourage',
      password: process.env.DATABASE_PASSWORD || '123456',
    },
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    },
  },
  defaultQuery: `

  `,
};
