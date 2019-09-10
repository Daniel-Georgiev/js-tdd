const lookupChar = require('./char-lookup');

test('Returns undefined if the first argument is not a string', () => {
    const result = lookupChar(1, 1);
    const expected = undefined;

    expect(result).toEqual(expected);
})

test('Returns undefined if the second argument is not a number', () => {
    const result = lookupChar(1, 1);
    const expected = undefined;

    expect(result).toEqual(expected);
})

test('Returns Incorrect Index if the index is bigger than the length of the string', () => {
    const result = lookupChar('asd', 4);
    const expected = 'Incorrect Index';

    expect(result).toEqual(expected);
})

test('Returns Incorrect Index if the index is negative', () => {
    const result = lookupChar('asd', -4);
    const expected = 'Incorrect Index';

    expect(result).toEqual(expected);
})

test('Returns Incorrect Index if the index has the same length as the string', () => {
    const result = lookupChar('asd', 3);
    const expected = 'Incorrect Index';

    expect(result).toEqual(expected);
})
test('Returns Incorrect Index if the index is floating point', () => {
    const result = lookupChar('asd', 3.14);
    const expected = undefined;

    expect(result).toEqual(expected);
})


test('Returns the char at the index if the arguments are correct', () => {
    const result = lookupChar('asd', 2);
    const expected = 'd';

    expect(result).toEqual(expected);
})

test('Returns the char at the index if the arguments are correct', () => {
    const result = lookupChar('asd', 0);
    const expected = 'a';

    expect(result).toEqual(expected);
})