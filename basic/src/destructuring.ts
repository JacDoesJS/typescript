let myName = 'Jac';

let myHome = "Martin's";

function myPrinter(a: string, b: string) {
    console.log("My name is " + a + " and I live at " + b + ".")

};

myPrinter(myName, myHome);

const myFunc = (x: number, y: number) => x * y;

console.log(myFunc(5, 5));

const hobbies = ["weaving", "sewing", "walking"];

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobby2 + " boop");

const personA = {
    firstName: 'Jac',
    age: 49
};

console.log(personA);

const { firstName: userName, age } = personA;
console.log(userName, age);