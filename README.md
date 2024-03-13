## How to run the project using Docker

```shell
docker-compose up --build
```

Open GraphiQL in your browser [http://localhost:3010/graphql](http://localhost:3010/graphql)

## How to run the project

Install dependencies:

```shell
yarn

# or using npm

npm install
```

Create `src/config.ts` or rename `src/config.example.js` and update file with your credentials:

```js
export default {
  port: 3010,
  database: {
    type: 'mysql',
    connection: {
      database : '',
      host : '',
      password : '',
      user : '',
    },
    /*
     * Migrations run on every start of the application.
     * If you initialized the database manually (from the database.sql file),
     * you don't need this.
     */
    migrations: {
      directory: __dirname + '/migrations',
    },
  },
};
```

Run the project:

```shell
yarn start

# or using npm

npm start
```

Open GraphiQL in your browser [http://localhost:3010/graphql](http://localhost:3010/graphql)

## Examples

You can find example queries in [EXAMPLES.md](./EXAMPLES.md).

## Old version

Here is a link to an old version, that used `sequelize` and did not use connections:
* [1.4.0](https://github.com/juffalow/express-graphql-sequelize-example/tree/1.4.0)

Here is a link to older version, that did not use typescript, and used `buildSchema` method and graphql schema file:
* [2.0.0](https://github.com/juffalow/express-graphql-example/tree/2.0.0)

Here is a link to older version, that used typescript version `4.x` and `graphql-express` package to handle GrahpQL requests:
* [3.3.0](https://github.com/juffalow/express-graphql-example/tree/3.3.0)

## License

[MIT license](./LICENSE)
