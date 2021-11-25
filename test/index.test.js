const app = require('../index');
const request = require('supertest');

describe('GET users', function() {
  it('gets all users with a status code of 200', (done) => {
    request(app)
      .get('/api/users')
      .expect(200, done);
  });

  it('gets the admin account via username with a status code of 200,', (done) => {
    request(app)
      .get('/api/users/username/admin')
      .expect(200, done);
  })

  it('gets the admin account via id with a status code of 200,', (done) => {
    request(app)
      .get('/api/users/619ed0fbf212738bb094385f')
      .expect(200, done);
  })
});