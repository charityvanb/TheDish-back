exports.seed = function(knex, Promise) {
    return knex('dish').del()
      .then(function () {
        return knex('dish').insert([
          {
            "url": "https://imgur.com/a/3mtnd35",
            "real": true,
            "uploader": CVB
          },
          {"url": "https://imgur.com/a/3mtnd35",
          "real": true,
          "uploader": CVB

          }

        ]);
      });
  };