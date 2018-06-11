const serverToggle = require('../lib/server-toggle.js');
const server = require('../server.js');

describe('serverToggle', function() {
  describe('server on', () => {
    afterAll(done => serverToggle.serverOff(server, done));
    it('serverOn should not reject', done => {
      serverToggle.serverOn(server, done);
    });
  });
  describe('server off', () => {
    beforeAll(done => serverToggle.serverOn(server, done));
    it('serverOff should not reject', done => {
      serverToggle.serverOff(server, done);
    });
  });
});