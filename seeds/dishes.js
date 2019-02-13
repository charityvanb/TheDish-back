
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
      {"url": "https://s3.amazonaws.com/dishcvb/20190208_145344.jpg?response-content-disposition=inline&X-Amz-Security-Token=FQoGZXIvYXdzEHsaDHXNq3Hju3ezavFZYCK4A8aZuzqQvocIj7VTpDEKfi0zqD6Xbgfv3fjsDylj%2FcuUnKfszYWu%2FSzd2tma6thOd3WLrCz4Dji5C9St21uOiZjaBNwZYvoRY9oaCHzzVNlTiaxiIhxP9rCHvWARtX7aoEHxa97kGSALkgz%2B9k1bdPsQiQf%2FGEh8EgaC%2F7A%2BKPmPpK%2BNYQ4EyTLU5QcI5B45BFukTGNBbu62YOzt8AjUYddyhrDKGneWrMmz%2BbDC2enRvrCNFfpSowlPSOq24FfVYRfUoxeRbJKx9OplwsEASlC%2F7DNnmMvD%2B8E7oNEBWRpUJORYKm3Mr3oSKqGz8iGyE7OI4rwb2SFMhLDjJAs0wNXCmRMrY8AfXgsV9bxl462FKlYHKYUwNcDNInWpGrAQ8YXPb7qxIDNouHTkH8Mxl9lgkBkZoyOTTpxS3LPjzn1QHxn8xSfRaAgjqKO00PZol3RfWbQGoTM3Qvkbh%2BgadReSNq%2B8ROpByG6XCqZXq5%2FkopZ3nDBJwh%2B41%2B%2BE4%2BVi%2BD%2F9TlleBZ2t8cM31yUCWMNTbPdfKxFwGUMptsH5J2zcsEI1fd7Qs6HFpJYILke5NnpYMb946ieHKJzRj%2BMF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190213T205204Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAVSGB23XLWZ35NAQ4%2F20190213%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cd201ce6e955af3b4ed877053973cdd6d3b03fe9298c3bf815af8ebd2edbba8c",
      "real": true,
      "uploader": "CA"
      },
      {"url": "https://s3.https://s3.amazonaws.com/dishcvb/20190208_145344.jpg.com/dishcvb/766fe2ffParadis+bleu+dinner+plate-min__14027.https://s3.amazonaws.com/dishcvb/20190208_144116+(1).jpg",
      "real": true,
      "uploader": "CVB"
      }
      ]);
    });
};
