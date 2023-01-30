var bag = {
    colour: 'red',
    material: 'card'
};
function adding(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(adding(2, 5));
