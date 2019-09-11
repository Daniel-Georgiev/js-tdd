const Ticket = require('./ticket');

test('Should return tickets sorted by destination print() is called', () => {
    const inputParam1 = 
        [
            'Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed'
        ]
    const inputParam2 = "destination";
    const expected = `[
        Ticket {
            destination: 'Boston',
            price: 126.20,
            status: 'departed' },
        Ticket {
            destination: 'New York City',
            price: 95.99,
            status: 'available' },
        Ticket {
            destination: 'New York City',
            price: 95.99,
            status: 'sold' },
        Ticket {
            destination: 'Philadelphia',
            price: 94.20,
            status: 'available' } ]`

    const result = new Ticket(inputParam1, inputParam2).print();

    expect(result).toEqual(expected);
})

test('Should return tickets sorted by status print() is called', () => {
    const inputParam1 = 
        [
            'Philadelphia|94.20|available',
            'New York City|95.99|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed'
        ]
    const inputParam2 = "status";
    const expected = `[
        Ticket {
            destination: 'Philadelphia',
            price: 94.20,
            status: 'available' },
        Ticket {
            destination: 'New York City',
            price: 95.99,
            status: 'available' },
        Ticket {
            destination: 'Boston',
            price: 126.20,
            status: 'departed' },
        Ticket {
            destination: 'New York City',
            price: 95.99,
            status: 'sold' } ]`

    const result = new Ticket(inputParam1, inputParam2).print();

    expect(result).toEqual(expected);
})

test('Should return tickets sorted by status when print() is called', () => {
    const inputParam1 = 
        [
            'New York City|95.99|available',
            'Philadelphia|94.20|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed'
        ]
    const inputParam2 = "status";
    const expected = `[
        Ticket {
            destination: 'New York City',
            price: 95.99,
            status: 'available' },
        Ticket {
            destination: 'Philadelphia',
            price: 94.20,
            status: 'available' },
        Ticket {
            destination: 'Boston',
            price: 126.20,
            status: 'departed' },
        Ticket {
            destination: 'New York City',
            price: 95.99,
            status: 'sold' } ]`

    const result = new Ticket(inputParam1, inputParam2).print();

    expect(result).toEqual(expected);
})

test('Should return tickets sorted by price when print() is called', () => {
    const inputParam1 = 
        [
            'New York City|95.99|available',
            'Philadelphia|94.20|available',
            'New York City|95.99|sold',
            'Boston|126.20|departed'
        ]
    const inputParam2 = "price";
    const expected = `[
        Ticket {
            destination: 'Philadelphia',
            price: 94.20,
            status: 'available' },
        Ticket {
            destination: 'New York City',
            price: 95.99,
            status: 'available' },
        Ticket {
            destination: 'New York City',
            price: 95.99,
            status: 'sold' },
        Ticket {
            destination: 'Boston',
            price: 126.20,
            status: 'departed' } ]`

    const result = new Ticket(inputParam1, inputParam2).print();

    expect(result).toEqual(expected);
})

test('should return an array of ticket objects when extractDescriptions() is called', () => {
    //Arrange
    const inputParam1 = 
    [
        'New York City|95.99|available',
        'Philadelphia|94.20|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ]
    const inputParam2 = "status";

    const expected = [
        { destination: 'New York City', price: '95.99', status: 'available' },
        { destination: 'Philadelphia', price: '94.20', status: 'available' },
        { destination: 'New York City', price: '95.99', status: 'sold' },
        { destination: 'Boston', price: '126.20', status: 'departed' }
    ]
    
    //Act
    const result = new Ticket(inputParam1, inputParam2).extractDescriptions(inputParam1);
    
    //Assert
    expect(result).toEqual(expected);

})