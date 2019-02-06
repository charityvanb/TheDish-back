module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/dishes'
  },
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
