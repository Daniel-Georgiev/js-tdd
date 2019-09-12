const SortedList = require('./SortedList');

describe('SortedList', () => {
    test('should return an empty array',() => {
        const list = new SortedList();
        const expected = [];
        const result = list.toString();

        expect(result).toEqual(expected);
    })

    test('should return a sorted array',() => {
        const list = new SortedList();
        list.add(2);
        list.add(5);
        const expected = [2, 5];
        const result = list.toString();

        expect(result).toEqual(expected);
    })
    test('Removing the element at the given index', () => {
        const list = new SortedList();
        list.add(2);
        list.add(5);
        list.add(4);
        list.remove(1);
        const expected = [2, 5];
        const result = list.toString();

        expect(result).toEqual(expected);
    })

    test('Throws an error if the index of remove is not valid (outside the length of the collection)', () => {
        const list = new SortedList();
        list.add(2);
        list.add(5);
        list.add(4);

        expect(() => {
            list.remove(4);
        }).toThrow(new Error('Index is outside the collection'));
    })

    test('gets an item on given index when called get(idx)', () => {
        const expected = 5;
        
        const list = new SortedList();
        list.add(2);
        list.add(5);
        list.add(4);

        const result = list.get(2);
        

        expect(result).toEqual(expected);
    })

    test('Throws an error if get(idx) is called with an index that is outside the collection', () => {
        const list = new SortedList();
        list.add(2);
        list.add(5);
        list.add(4);

        expect(() => {
            list.get(3);
        }).toThrow(new Error('Index is outside the collection'));
    })
    test('returns the size of the collection', () => {
        const expected = 1;

        const list = new SortedList();
        list.add(2);
        const result = list.size;

        expect(result).toEqual(expected);


    })
})