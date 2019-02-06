
exports.seed = function(knex, Promise) {
  return knex('dishes').del()
    .then(function () {

      return knex('dishes').insert([
      {"url": "https://s3.amazonaws.com/dishcvb/flowers.jpg",
      "real": true,
      "uploader": "CVB"
      },
      {"url": "hhttps://s3.amazonaws.com/dishcvb/goldandwhite.jpg",
      "real": true,
      "uploader": "CVB"
      },
      {"url": "https://s3.amazonaws.com/dishcvb/wildrose.jpg",
      "real": true,
      "uploader": "CVB"
      }
      ]);
    });
};
