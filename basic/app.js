function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(49, 44, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('49', '44', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Martin', 'Jac', 'as-text');
console.log(combinedNames);
var u2 = { name: 'Max', age: 35 };
u2.age = 65321;
console.log(u2.age + " is your age");
var p1 = { title: 'A Book', price: 12.99 };
p1.price = 15.78;
console.log(p1.price);
var u1 = { name: 'Max' };
u1 = 'Michael';
console.log(u1);
