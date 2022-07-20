import axios from "axios";

// // Common JS Syntax / NodeJS
// module.exports = {
//     getOne: function () {
//         return new Promise((resolve, reject) => {
//             fetch('http://api.icndb.com/jokes/random')
//                 .then(res => res.json())
//                 .then(data => {
//                     resolve(data.value.joke);
//                 })
//         });
//     }
// }

// // ES2015 Module Syntax
// export const jokes = {
//     getOne: function () {
//         return new Promise((resolve, reject) => {
//             fetch('http://api.icndb.com/jokes/random')
//                 .then(res => res.json())
//                 .then(data => {
//                     resolve(data.value.joke);
//                 })
//         });
//     }
// }

// Installed with npm Axios and used it here.
export const jokes = {
    getOne: function () {
        return new Promise((resolve, reject) => {
            axios.get('http://api.icndb.com/jokes/random')
                .then(res => {
                    resolve(res.data.value.joke);
                })
        });
    }
}