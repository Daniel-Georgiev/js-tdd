const validate = require('./request-validator');

test('Should return the unchanged request if it is valid', function(){
    const input = {
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }

    const result = validate(input);

    expect(result).toEqual(input);
})

test('Should throw an error if the method is not GET/POST/DELETE/CONNECT', function(){
    const input = {
        method: 'OPTIONS',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }

    expect( () => {
        validate(input)
    }).toThrow(new Error('Invalid request header: Invalid Method'))
})

test('Should throw an error if there are missing properties', function(){
    const input = {
        method: 'GET',
        uri: 'svn.public.catalog',
        message: ''
    }
    expect( () => {
        validate(input)
    }).toThrow(new Error('Invalid request header: Invalid Version'))
})

test('Should throw an error if there is an incorrect version', function(){
    const input = {
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/3.0',
        message: ''
    }
    expect( () => {
        validate(input)
    }).toThrow(new Error('Invalid request header: Invalid Version'))
})

test('uri should throw an error if it contains any special chars', function(){
    const input = {
        method: 'GET',
        uri: '%appdata%',
        version: 'HTTP/2.0',
        message: ''
    }

    const input2 = {
        method: 'GET',
        uri: '<appdata>',
        version: 'HTTP/2.0',
        message: ''
    }

    const input3 = {
        method: 'GET',
        uri: 'apt-get',
        version: 'HTTP/2.0',
        message: ''
    }

    expect(() => {
        validate(input)
    }).toThrow(new Error('Invalid request header: Invalid Uri'));

    expect(() => {
        validate(input2)
    }).toThrow(new Error('Invalid request header: Invalid Uri'));

    expect(() => {
        validate(input3)
    }).toThrow(new Error('Invalid request header: Invalid Uri'));
})

test('uri should count as valid if it is *', function(){
    const input = {
        method: 'GET',
        uri: '*',
        version: 'HTTP/2.0',
        message: ''
    }

    const result = validate(input);

    expect(result).toEqual(input);
})

test('should throw an error if uri is empty', function(){
    const input = {
        method: 'GET',
        uri: '',
        version: 'HTTP/2.0',
        message: ''
    }


    expect(() => {
        validate(input)
    }).toThrow(new Error('Invalid request header: Invalid Uri'));
})

test('shoult throw an error if message property does not exist', function(){
    const input = {
        method: 'GET',
        uri: '*',
        version: 'HTTP/2.0',
    }


    expect(() => {
        validate(input)
    }).toThrow(new Error('Invalid request header: Invalid Message'));
})

test('shoult return the request if message is empty', function(){
    const input = {
        method: 'GET',
        uri: '*',
        version: 'HTTP/2.0',
        message: ''
    }

    const result = validate(input);
    expect(result).toEqual(input);
})

test('shoult throw an error if message property has special chars', function(){
    const input = {
        method: 'GET',
        uri: '*',
        version: 'HTTP/2.0',
        message: '"value"'
    }


    expect(() => {
        validate(input)
    }).toThrow(new Error('Invalid request header: Invalid Message'));
})
