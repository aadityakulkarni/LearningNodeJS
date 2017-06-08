const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two number', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });

        it('should async add 2 numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });

    describe('#squares', () => {
        it('should square a number', () => {
            var res = utils.squares(3);
            expect(res).toBe(9).toBeA('number');
        });

        it('should square a number async', (done) => {
            utils.asyncSquares(10, (square) => {
                expect(square).toBe(100).toBeA('number');
                done();
            });
        });
    });

});

describe('playground for expect library', () => {

    it('should expect some values', () => {
        // expect(12).toNotBe(13);
        // expect({name: 'Aaditya'}).toEqual({name : 'Aaditya'});
        // expect({name: 'Aaditya'}).toNotEqual({name : 'aaditya'});
        // expect([2,3,5]).toInclude(5);
        // expect([1,3,7]).toExclude(2);
        expect({
            name: 'Aaditya',
            age: 25
        }).toInclude({
            age: 25
        });

    });

    it('should verify that first and last name are set', () => {
        var user = {
            location: 'Arlington',
            age: 25
        };
        var res = utils.setName(user, 'Aaditya Kulkarni');
        expect(res).toInclude({
            firstName: 'Aaditya',
            lastName: 'Kulkarni'
        });
    });
});