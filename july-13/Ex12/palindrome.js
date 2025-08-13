let str = "madam"; 

let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

if (str.toLowerCase() === reversed.toLowerCase()) {
    console.log(`${str} is a palindrome`);
} else {
    console.log(`${str} is not a palindrome`);
}
