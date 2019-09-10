lookupChar = (string, index) => {
    if(typeof string !== 'string' || !Number.isInteger(index)){
        return undefined;
    }
    if(index >= string.length || index < 0){
        return 'Incorrect Index';
    }
    return string[index];
}

module.exports = lookupChar;