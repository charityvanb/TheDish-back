module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/dishlist'
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
