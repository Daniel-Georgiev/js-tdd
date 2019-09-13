const CheckingAccount = require('./CheckingAccount');

describe('CheckingAccount', () => {
    test('should throw typeError if the clientId is not a 6-digit number', () => {
        const params = { clientId: 'asd' };

        expect(() => {
            new CheckingAccount(params)
        }).toThrow(new TypeError('TypeError: Client ID must be a 6-digit number'));
    })

    test('should throw typeError if the email is not valid', () => {
        const params = { clientId: 'asdasd', email: 'asd.com' };


        expect(() => {
            new CheckingAccount(params)
        }).toThrow(new TypeError('TypeError: Invalid e-mail'));
    })

    test('should throw typeError if the email is not has non-latin', () => {
        const params = { clientId: 'asdasd', email: 'asd@асд.com' };


        expect(() => {
            new CheckingAccount(params)
        }).toThrow(new TypeError('TypeError: Invalid e-mail'));
    })

    test('should throw typeError if firstName is not valid (3-20, Latin)', () => {
        const params = { clientId: 'asdasd', email: 'asd@asd.com', firstName: 'as' };


        expect(() => {
            new CheckingAccount(params)
        }).toThrow(new TypeError('TypeError: First name must be between 3 and 20 characters long'));
    })

    test('should throw typeError if lastName is not valid (3-20, Latin)', () => {
        const params = { clientId: 'asdasd', email: 'asd@asd.com', firstName: 'ass', lastName: 'as' };


        expect(() => {
            new CheckingAccount(params)
        }).toThrow(new TypeError('TypeError: Last name must be between 3 and 20 characters long'));
    })

    test('should throw typeError for the first invalid param if there are multiple', () => {
        const params = { clientId: 'asdas', email: 'asd@asd.com', firstName: 'ass', lastName: 'as' };


        expect(() => {
            new CheckingAccount(params)
        }).toThrow(new TypeError('TypeError: Client ID must be a 6-digit number'));
    })
})