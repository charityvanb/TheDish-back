
exports.seed = function(knex, Promise) {
  return knex.raw("Delete From dishes; alter sequence dishes_id_seq restart with 1;")
    .then(function () {

      return knex('dishes').insert([
      {"url": "https://s3.amazonaws.com/dishcvb/flowers.jpg",
      "real": true,
      "uploader": "CA"
      },
      {"url": "https://s3.amazonaws.com/dishcvb/goldandwhite.jpg",
      "real": true,
      "uploader": "CVB"
      },
      {"url": "https://s3.amazonaws.com/dishcvb/wildrose.jpg",
      "real": true,
      "uploader": "CA"
      },
      {"url": "https://s3.amazonaws.com/dishcvb/766fe2ffParadis+bleu+dinner+plate-min__14027.1528393614.jpg",
      "real": true,
      "uploader": "CVB"
      },
      {"url": "https://s3.https://s3.amazonaws.com/dishcvb/20190208_145344.jpg.com/dishcvb/766fe2ffParadis+bleu+dinner+plate-min__14027.1528393614.jpg",
      "real": true,
      "uploader": "CA"
      },
      {"url": "https://s3.https://s3.amazonaws.com/dishcvb/20190208_145344.jpg.com/dishcvb/766fe2ffParadis+bleu+dinner+plate-min__14027.https://s3.amazonaws.com/dishcvb/20190208_144116+(1).jpg.jpg",
      "real": true,
      "uploader": "CVB"
      }
      ]);
    });
};
