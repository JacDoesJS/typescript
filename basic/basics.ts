function add(n1: number, n2: number, showResult: boolean, phrase:string) {
    // console.log(typeof n1 !== 'number' && typeof n2 !== 'number');
    // throw new Error("incorrect input");
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}

const num1 = 51;
const num2 = 2.8;
const printResult = true;
const resultPhrase = "Your result is: "

add(num1, num2, printResult, resultPhrase);

const answer = "here you go, aren't I clever: ";
const numA = 10;
const numB = 7;

function multiply(a: number, b: number, ans: String) {
    const res = a * b;
    console.log(answer);
    return res;
}

console.log(multiply(numA, numB, answer))