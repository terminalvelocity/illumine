export default {
  development: {
    host: '127.0.0.1',
    pool: { min: 0, max: 8 },
    driver: 'mysql2',
    username: 'root',
    password: 'root',
    database: 'illumine_dev'
  },

  test: {
    host: '127.0.0.1',
    pool: { min: 0, max: 8 },
    driver: 'mysql2',
    username: 'root',
    password: null,
    database: 'illumine_test'
  },

  production: {
    host: '127.0.0.1',
    pool: { min: 0, max: 8 },
    driver: 'mysql2',
    username: 'root',
    password: null,
    database: 'illumine_prod'
  }
};
