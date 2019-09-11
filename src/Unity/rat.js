class Rat{
    constructor(name){
        this.name = name;
        this.unitedRats = [];
    }

    unite(rat){
        if(rat instanceof Rat){
            this.unitedRats.push(rat);
        }
    }

    getRats(){
        if(this.unitedRats.length < 1){
            return [];
        }
        let result = this.unitedRats.map(rat => {
            return `Rat { name: '${rat.name}', unitedRats: ${JSON.stringify(rat.unitedRats)} }`
        })
        result = `[ ${result} ]`;
        return result;
    }

    formatGang(){
        let formatted = '' 
        this.unitedRats.forEach(rat => {
            formatted += `\n##${rat.name}`;
        });
        return formatted;
    }

    toString(){
        const gang = this.formatGang();
        return `${this.name}${gang}`;
    }
}

module.exports = Rat;