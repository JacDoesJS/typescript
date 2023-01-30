function addIt(n1: number, n2: number, n3: number) {
    return n1 + n2 + n3;
};

console.log(addIt(20, 0, 1));

function printR(num: number) {
    console.log('Result: ' + num)
}

printR(addIt(5, 46513, 7984563));

let myFunction: (a: number, b: number, c: number) => number;
myFunction = addIt;

// let combineValues: Function;
// combineValues = printResult;
// console.log(combineValues(5, 5,5));

console.log(myFunction(1, 2, 3));

function addAndHandle(num1: number, num2: number, num3: number, cb: (num:number) => void) {
    const result = num1 + num2 *num3;
    cb(result);
};

// printResult(add(6, 6, 6));

// addAndHandle(5, 20, 10, (result) => {
//     console.log("Here's your answer: " + result);
// });