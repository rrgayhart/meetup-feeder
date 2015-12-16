var Meetup = require('../lib/meetup');

describe('When fetching', function () {
  var meetup;

  before(function () {
    meetup = new Meetup();
  });

  it('should result in three using the return style approach', function () {
    var fetch = meetup.fetch();
    assert.equal(fetch, 'I fetched.');
  });
});
