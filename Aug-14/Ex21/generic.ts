class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const numberBox = new Box<number>(100);
console.log(numberBox.getValue()); 

const stringBox = new Box<string>("Hello Abdul");
console.log(stringBox.getValue());  
