var xhr = require('xhr');

function search(endpoint, source, accessToken, proximity, bbox, query, callback) {
  var searchTime = new Date();
  var uri = endpoint + '/geocoding/v5/' +
    source + '/' + encodeURIComponent(query) + '.json' +
    '?access_token=' + accessToken +
    (proximity ? '&proximity=' + proximity : '') +
    (bbox ? '&bbox=' + bbox : '');
  xhr({
    uri: uri,
    json: true
  }, function(err, res, body) {
    callback(err, res, body, searchTime);
  });
}

module.exports = search;
