// const person : {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // Special Array with exactly two elements, first a number and second a string.
// } = {
//     name: 'Bruno',
//     age: 25,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// Start with an upper case letter since its a custom type. Most enums have all uppercase values.
enum Role {ADMIN, READ_ONLY, AUTHOR}; // ADMIN = 0, and so forth, you can change the starting number or make mapped custom types.

const person = {
    name: 'Bruno',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin'); // This is an exception on Tuples.
// person.role[1] = 10;

// person.role [0, 'admin', 'user'];

let favoriteaActivities: string[];
favoriteaActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !! ERROR !! map does work on Arrays but not on Strings.
}

if (person.role === Role.AUTHOR) {
    console.log('is author');
}