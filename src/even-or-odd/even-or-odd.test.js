const isOddOrEven = require('./even-or-odd')

test('Returns undefined if the input is not a string', () => {
    const input = 3;

    const result = isOddOrEven(input);

    expect(result).toEqual(undefined)
})

test("Returns 'odd' if the string's length is odd", () => {
    const input = 'a';
    const expected = 'odd';

    const result = isOddOrEven(input);

    expect(result).toEqual(expected);
})

test("Returns 'even' if the string's length is odd", () => {
    const input = 'aa';
    const expected = 'even';

    const result = isOddOrEven(input);

    expect(result).toEqual(expected);
})


test("If input is an object, return undefined", () => {
    const input = {name: 'asd'};
    const expected = undefined;

    const result = isOddOrEven(input);

    expect(result).toEqual(expected);
})