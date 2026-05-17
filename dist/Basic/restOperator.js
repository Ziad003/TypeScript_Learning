"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const newArr = [...arr1, ...arr2];
console.log(newArr);
const newfun = (...names) => {
    console.log(names);
};
newfun('Ziad', 'rony', 5);
//# sourceMappingURL=restOperator.js.map