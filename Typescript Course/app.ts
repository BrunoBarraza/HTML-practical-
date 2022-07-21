// const person : {
//     name: string;
//     age: number;
// } = {
const person = {
    name: 'Bruno',
    age: 25,
    hobbies: ['Sports', 'Cooking']
};

let favoriteaActivities: string[];
favoriteaActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !! ERROR !! map does work on Arrays but not on Strings.
}