function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


const expect = require('chai').expect;

describe('Test isOddOrEven function', () => {
    it('param is string with odd length', () => {
        const actual = isOddOrEven('abc');
        const expected = 'odd';
        expect(actual).to.equal(expected);
    });
    it('param is string with even length', () => {
        const actual = isOddOrEven('abcd');
        const expected = 'even';
        expect(actual).to.equal(expected);
    });

    it('return undefined when param is not a string', () => {
        const actual = isOddOrEven({});
        const expected = undefined;
        expect(actual).to.equal(expected);
    });
});