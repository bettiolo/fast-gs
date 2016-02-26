var fetch = require('node-fetch');
var csv = require('csv');

function getUrl(key, gid) {
  // alternative http://spreadsheets.google.com/feeds/cells/{{ SpreadSheetKey }}/1/public/basic?alt=json
  var url = 'https://docs.google.com/spreadsheets/d/';
  url += key;
  url += '/pub?gid='
  url += gid
  url += '&single=true&output=csv'
  return url;
}

function get(key, gid, csvParserOptions, cb) {
  var url = getUrl(key, gid);
  var csvParser = csv.parse(csvParserOptions, cb);

  fetch(url)
    .then(function (res) {
      var csvStream = res.body;
      csvStream.pipe(csvParser);
    })
    .catch(cb);
}

function toArray(key, gid, cb) {
  get(key, gid, {}, cb);
}

function toObject(key, gid, cb) {
  get(key, gid, {columns: true}, cb);
}

module.exports = {
  toArray: toArray,
  toObject: toObject
}
