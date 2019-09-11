const Rat = require('./rat');

test("Returns a rat name when .toString is called", () => {
    const expected = 'Pesho';

    const result = new Rat('Pesho').toString();

    expect(result).toEqual(expected);
})

test("Returns an empty [] if getRats() is called on a rat that hasn't united", () => {
    const expected = [];

    const result = new Rat('Pesho').getRats();

    expect(result).toEqual(expected);
})

test("Returns an empty [] if getRats() is called on a rat that has united with something that is not a rat", () => {
    //Arrange
    const pesho = new Rat('Pesho');
    const gosho = new String('Gosho');
    const expected = [];

    //Act
    pesho.unite(gosho);
    const result = new Rat('Pesho').getRats();

    //Assert
    expect(result).toEqual(expected);
})

test("Returns an [] if getRats() is called on a rat that has united with other rats", () => {
    //Arrange
    const pesho = new Rat('Pesho');
    const gosho = new Rat('Gosho');
    const expected = `[ Rat { name: 'Gosho', unitedRats: [] } ]`;

    //Act
    pesho.unite(gosho);
    const result = pesho.getRats();

    //Assert
    expect(result).toEqual(expected);
})

test("Returns a formated output if toString() is called on a rat that has united with other rats", () => {
    //Arrange
    const pesho = new Rat('Pesho');
    const gosho = new Rat('Gosho');
    const sasho = new Rat('Sasho');
    const expected = `Pesho\n##Gosho\n##Sasho`;

    //Act
    pesho.unite(gosho);
    pesho.unite(sasho);
    const result = pesho.toString();
    

    //Assert
    expect(result).toEqual(expected);
})