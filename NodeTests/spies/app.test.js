const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);
    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Aaditya', 25);
        expect(spy).toHaveBeenCalledWith('Aaditya', 25);
    });
    it('should call save user with user obj', () => {
        var email = 'aadikulkarni91@gmail.com';
        var password = '123456';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({ email, password });
    });
});