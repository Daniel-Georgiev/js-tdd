module.exports = function(input){
    const methods = [
        'GET',
        'POST',
        'DELETE',
        'CONNECT'
    ]
    const versions = [
        'HTTP/0.9',
        'HTTP/1.0',
        'HTTP/1.1',
        'HTTP/2.0'
    ]

    const specialChars = [
        '<',
        '>',
        "\\",
        '&',
        "'",
        '"'
    ]

    const validateUri = (uri) => {
        if(uri.match(/([a-z]*\.[a-z]*)|\*/g)){
            return true;
        }
        return false
    }

    const checkForSpecialChars = (message) => {
        const a = specialChars.some(char => {
            return message.includes(char);
         })
       return a;
    }

    if(input){
        const isUriValid = validateUri(input.uri);
        let isMessageValid = input.message && !checkForSpecialChars(input.message);
        if(input.message === ''){
            isMessageValid = true;
        }
        if(!input.method || !methods.includes(input.method)){
            throw new Error('Invalid request header: Invalid Method');
        }
        if(!input.uri || !isUriValid){
            throw new Error('Invalid request header: Invalid Uri');
        }
        if(!input.version || !versions.includes(input.version)){
            throw new Error('Invalid request header: Invalid Version');
        }
        if(input.message === undefined || !isMessageValid){
            throw new Error('Invalid request header: Invalid Message');
        }

        return input;
    }
}