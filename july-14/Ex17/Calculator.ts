class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }
}

const calc = new Calculator();

console.log("Addition:", calc.add(5, 3));        
console.log("Subtraction:", calc.subtract(5, 3)); 
