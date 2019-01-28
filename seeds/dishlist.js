exports.seed = function(knex, Promise) {
    return knex('dish').del()
      .then(function () {
        return knex('dish').insert([
          {
            "imageurl": "",
            "year": "1890",
            "real": true
          },

        ]);
      });
  };