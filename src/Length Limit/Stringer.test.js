const Stringer = require('./Stringer');

describe('Stringer', () => {
    test('should return a string if the second param is >= the length of the first', () => {
        const firstParam = 'Test';
        const secondParam = 5;
        const expected = 'Test';

        const result = new Stringer(firstParam, secondParam).toString();

        expect(result).toBe(expected);
    })

    test('should return a truncated string if the second param is < the length of the first', () => {
        const firstParam = 'Test';
        const secondParam = 3;
        const expected = 'Tes...';

        const result = new Stringer(firstParam, secondParam).toString();

        expect(result).toBe(expected);
    })

    test('should return "..." string if the second param 0', () => {
        const firstParam = 'Test';
        const secondParam = 0;
        const expected = '...';

        const result = new Stringer(firstParam, secondParam).toString();

        expect(result).toBe(expected);
    })

    test('should return "..." string if the decrese sets the length to a negative value (min value should be 0 always)', () => {
        const firstParam = 'Test';
        const secondParam = 5;
        const decreseParam = 6;
        const expected = '...';

        const stringer = new Stringer(firstParam, secondParam);
        stringer.decrese(decreseParam);
        const result = stringer.toString();


        expect(result).toBe(expected);
    })

    test('should return "..." string if the decreseis called multiple times and sets the length to a negative value (min value should be 0 always)', () => {
        const firstParam = 'Test';
        const secondParam = 5;
        const decreseParam = 2;
        const expected = '...';

        const stringer = new Stringer(firstParam, secondParam);
        stringer.decrese(decreseParam);
        stringer.decrese(decreseParam);
        stringer.decrese(decreseParam);

        const result = stringer.toString();
        expect(result).toBe(expected);
        
    })

    test('should return and extended string if the increase is called', () => {
        const firstParam = 'Test';
        const secondParam = 3;
        const increseParam = 2;
        const expected = 'Test';

        const stringer = new Stringer(firstParam, secondParam);
        stringer.increse(increseParam);
        const result = stringer.toString();
        expect(result).toBe(expected);
        
    })
    
    }
)