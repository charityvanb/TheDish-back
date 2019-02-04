
exports.seed = function(knex, Promise) {
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
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
