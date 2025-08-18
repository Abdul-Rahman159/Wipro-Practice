function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

let result1 = pair<number, string>(101, "Abdul");
let result2 = pair<string, boolean>("Java", true);

console.log(result1); 
console.log(result2);  
