// const person : {
//     name: string;
//     age: number;
// } = {
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // Special Array with exactly two elements, first a number and second a string.
} = {
    name: 'Bruno',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
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