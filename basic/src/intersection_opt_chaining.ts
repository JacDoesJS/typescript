interface box {
    [prop: string]: string;
}

const bag: box = {
    colour: 'red',
    material: 'card'
} 


type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function adding(a: string, b: string): string;
function adding(a: number, b: number): number;
function adding(a: string, b: number): string;

function adding(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const res = adding('Jac', 'Martin');

res.split(' ');

console.log(adding(10, 349872985));
console.log(adding("Jac", 10));


const fetchedData = {
    id: 'u1',
    name: 'Jac',
    // job: {title: 'newby', descrip: 'kjdsksa'}
}
console.log("lkb");
// console.log(fetchedData?.job?.title);

console.log("will this work?");