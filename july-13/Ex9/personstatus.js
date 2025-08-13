let persons = [
    { name: "Rahul", age: 25, city: "Mumbai" },
    { name: "Priya", age: 17, city: "Delhi" },
    { name: "Amit", age: 30, city: "Pune" },
    { name: "Sneha", age: 15, city: "Bangalore" }
];

persons.forEach(person => {
    person.status = person.age >= 18 ? "Adult" : "Minor";
});

console.log(persons);
