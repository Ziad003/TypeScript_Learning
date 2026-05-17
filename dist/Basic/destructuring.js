"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//object
const user = {
    id: 123,
    name: {
        firstName: 'Ziad',
        lastName: 'Hossain'
    },
    gender: 'male'
};
const { gender: gd, name: { firstName: fn } } = user;
console.log(gd, fn);
//Array
const friends = ['Karim', 'rohim', "Halim"];
const [, bestFriend,] = friends;
console.log(bestFriend);
//# sourceMappingURL=destructuring.js.map