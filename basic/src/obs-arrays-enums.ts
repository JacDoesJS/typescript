// const person: {
//     name: string,
//     age: number,
//     role: [number, string];

// }= {
//     name: 'Jac',
//     age: 30,
//     role: [46572, 'music'],
// }

enum Role { ADMIN, READ_ONLY, AUTHOR};

// const ADMIN =0;
// const READ_ONLY = 1;

const person = {
    name: 'Jac',
    age: 49,
    role: Role.READ_ONLY
}

console.log(person.role);

// person.role.push('admin');

// person.role[1] = 10;

let favouriteActs: string[];
favouriteActs = ['sfdsd', 'drfgad'];

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }
