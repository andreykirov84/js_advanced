function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

const expect = require('chai').expect;

describe('Test lookupChar function', () => {
    it('param string is not correct', () => {
        const actual = lookupChar({}, 2);
        expect(actual).to.undefined;
    });
    it('param index is not a number', () => {
        const actual = lookupChar('abcd', 'a');
        expect(actual).to.undefined;
    });
    it('params string and index are not correct', () => {
        const actual = lookupChar({}, 'a');
        expect(actual).to.undefined;
    });
    it('incorrect param index out of range', () => {
        const actual = lookupChar('abc', 6);
        const expected = 'Incorrect index';
        expect(actual).to.equal(expected);
    });
    it('incorrect param negative index', () => {
        const actual = lookupChar('abc', -1);
        const expected = 'Incorrect index';
        expect(actual).to.equal(expected);
    });
    it('incorrect param floating point index', () => {
        const actual = lookupChar('abc', 1.5);
        expect(actual).to.undefined;
    });
    it('all params are correct', () => {
        const actual = lookupChar('abc', 0);
        const expected = 'a';
        expect(actual).to.equal(expected);
    });
});

