class Stringer{
    constructor(initialString, stringLength){
        this.initialString = initialString;
        this.stringLength = stringLength;
    }

    truncateString(){
        if(this.stringLength < this.initialString.length){
            return this.initialString.slice(0, this.stringLength).concat('...');
        }else{
            return this.initialString;
        }
    }

    decrese(length){
        this.stringLength -= length;

        if(this.stringLength < 0){
            this.stringLength = 0;
        }
    }

    increse(length){
        this.stringLength += length;
    }

    toString(){
        const result = this.truncateString();
        return result;
    }
}

module.exports = Stringer;