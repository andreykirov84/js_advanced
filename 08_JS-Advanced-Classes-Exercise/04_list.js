class List {
    constructor() {
        this.ll = []
    }

    add(element){
        this.ll.push(element)
        this.ll.sort((a, b) => a - b)
    }

    checkIndex(index){
        return (typeof index !== 'number' && index < 0 && index >= this.ll.length);

    }

    remove(index){
        if(this.checkIndex(index)){
            throw new Error('incorrect index')
        }
        this.ll.splice(index, 1);
    }

    get(index){
        if(this.checkIndex(index)){
            throw new Error('incorrect index')
        }
        return this.ll.at(index);
    }

    get size(){
        return this.ll.length;
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
