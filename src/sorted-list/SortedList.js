class SortedList{
    constructor(){
        this.collection = [];
    }

    sortCollection(){
        this.collection.sort((a, b) => a - b);
    }
    
    add(num){
        this.collection.push(num);
        this.sortCollection();
    }

    remove(idx){
        if(idx < this.collection.length){
            this.collection.splice(idx, 1);
            this.sortCollection();
        }else{
            throw new Error('Index is outside the collection');
        }
    }

    get(idx){
        if(idx < this.collection.length){
            return this.collection[idx];
        }else{
            throw new Error('Index is outside the collection');
        }
    }
    get size(){
        return this.collection.length;
    }

    toString(){
        return this.collection;
    }
}

module.exports = SortedList;