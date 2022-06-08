class Stringer {
    constructor(innerString) {
        this.innerString = innerString;
        this.innerLength = this.innerString.length;
    }

    increase(value){
        this.innerLength += value;
        if (this.innerLength < 0){
            this.innerLength = 0;
        }
    }

    decrease(value){
        if (value > this.innerLength){
            value = this.innerLength
        }
        this.innerLength -= value;
    }

    toString(){
        const truncatedEnd = '...'
        let realLength = this.innerString.length;
        if (realLength > this.innerLength){
            realLength = this.innerLength
            return this.innerString.slice(0, realLength) + truncatedEnd
        }
        return  this.innerString;
    }
}


