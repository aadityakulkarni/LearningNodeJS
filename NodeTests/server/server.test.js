const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('GET /', () => {
    it('should return Hello World! response', (done) => {

        request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not found.'
                });
            })
            .end(done);
    });
});

describe('GET /users', () => {
    it('should return a list of all users', (done) => {

        request(app)
            .get('/users')
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'Aaditya',
                    age: 25
                });
            })
            .end(done);
    });
});