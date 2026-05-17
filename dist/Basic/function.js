"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addFun(num1, num2) {
    return num1 + num2;
}
const add = (num1, num2) => num1 + num2;
add(1, 2);
//method
const poorUser = {
    name: 'mezba',
    balance: 0,
    addBalance(value) {
        const balance = this.balance + value;
        return balance;
    }
};
console.log(poorUser.addBalance(23));
const arr = [1, 2, 3, 4];
const newArr = arr.map((element) => element * element);
console.log(newArr);
//# sourceMappingURL=function.js.map