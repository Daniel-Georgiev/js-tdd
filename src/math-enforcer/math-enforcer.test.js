const mathEnforcer = require('./math-enforcer');

test('addFive should return undefined if the argument is not a number', () => {
    const input = 'asd';
    const expected = undefined;

    const result = mathEnforcer.addFive(input);

    expect(result).toEqual(expected);
})

test('addFive should return the number + 5 if the argument is valid', () => {
    const input = 5;
    const expected = 10;

    const result = mathEnforcer.addFive(input);

    expect(result).toEqual(expected);
})

test('addFive should return the number + 5 if the argument is valid (negative argument)', () => {
    const input = -5;
    const expected = 0;

    const result = mathEnforcer.addFive(input);

    expect(result).toEqual(expected);
})

test('addFive should return the number + 5 if the argument is valid (float)', () => {
    const input = 1.5;
    const expected = 6.5;

    const result = mathEnforcer.addFive(input);

    expect(result).toEqual(expected);
})

test('subtractTen should return undefined if the argument is not a number', () => {
    const input = 'asd';
    const expected = undefined;

    const result = mathEnforcer.subtractTen(input);

    expect(result).toEqual(expected);
})

test('subtractTen should return the number - 10 if the argument is valid', () => {
    const input = 11;
    const expected = 1;

    const result = mathEnforcer.subtractTen(input);

    expect(result).toEqual(expected);
})

test('sum should return undefined if any of the arguments is not a number', () => {
    const expected = undefined;
    const result = mathEnforcer.sum(1, 'asd');
    const result2 = mathEnforcer.sum('asd', 1);

    expect(result).toEqual(expected);
    expect(result2).toEqual(expected);
})

test('returns sum of the arguments if they are valid', () => {
    const num1 = 5;
    const num2 = 5;
    const expected = 10;

    const result = mathEnforcer.sum(num1, num2);

    expect(result).toEqual(expected);
    
})

test('returns sum of the arguments if they are valid (negative, positive)', () => {
    const num1 = -5;
    const num2 = 5;
    const expected = 0;

    const result = mathEnforcer.sum(num1, num2);

    expect(result).toEqual(expected);
    
})

test('returns sum of the arguments if they are valid (negative, negative)', () => {
    const num1 = -5;
    const num2 = -5;
    const expected = -10;

    const result = mathEnforcer.sum(num1, num2);

    expect(result).toEqual(expected);
    
})