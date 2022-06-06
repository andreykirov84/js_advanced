let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


const expect = require('chai').expect;

describe('Test mathEnforcer function', () => {
    it('test addFive method, param is not a number', () => {
        const actual = mathEnforcer.addFive('a');
        expect(actual).to.undefined;
    });
    it('test addFive method, param is 5, expect 10', () => {
        const actual = mathEnforcer.addFive(5)
        const expected = 10;
        expect(actual).to.equal(expected);
    });
    it('test addFive method, param is -5, expect 0', () => {
        const actual = mathEnforcer.addFive(-5)
        const expected = 0;
        expect(actual).to.equal(expected);
    });
    it('test subtractTen method, param is not a number', () => {
        const actual = mathEnforcer.subtractTen('a');
        expect(actual).to.undefined;
    });
    it('test subtractTen method, param is 10, expect 0', () => {
        const actual = mathEnforcer.subtractTen(10)
        const expected = 0;
        expect(actual).to.equal(expected);
    });
    it('test subtractTen method, param is -10, expect -20', () => {
        const actual = mathEnforcer.subtractTen(10)
        const expected = 0;
        expect(actual).to.equal(expected);
    });
    it('test sum method, when first param is not a number', () => {
        const actual = mathEnforcer.sum('a', 5);
        expect(actual).to.undefined;
    });
    it('test sum method, when second param is not a number', () => {
        const actual = mathEnforcer.sum(5, 'a');
        expect(actual).to.undefined;
    });
    it('test sum method, when both params are not a number', () => {
        const actual = mathEnforcer.sum({}, 'a');
        expect(actual).to.undefined;
    });
    it('test sum method, params are 1 and 2, expect 3', () => {
        const actual = mathEnforcer.sum(1, 2)
        const expected = 3;
        expect(actual).to.equal(expected);
    });
});