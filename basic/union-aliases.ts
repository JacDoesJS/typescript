type Jac = number | string;
type ConvertJacDescription = 'as-number' | 'as-text';

function combine(
    input1: Jac,
    input2: Jac,
    resultConversion: ConvertJacDescription) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(49, 44, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('49', '44', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Martin', 'Jac', 'as-text');
console.log(combinedNames);

type UserA = { name: string; age: number };
let u2: UserA = { name: 'Max', age: 35 };
u2.age = 65321;
console.log(u2.age + " is your age");


type Product = {title: string; price: number;};
const p1: Product = { title: 'A Book', price: 12.99 }
    p1.price = 15.78;

console.log(p1.price);

type User = { name: string } | string;
let u1: User = {name: 'Max'};
u1 = 'Michael';

console.log(u1);