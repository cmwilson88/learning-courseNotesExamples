module.exports = {
  development: {
    client: 'postgres',
    connection: 'postgres://ovptjvaefnloki:edae25b46e99960e95c466538e9107cdb7e1062a424b6591cc6ca99488b9340b@ec2-107-22-167-179.compute-1.amazonaws.com:5432/d1kessujfpr4ru?ssl=true',
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    },
  },
  production: {
    client: 'postgres',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
  }
}