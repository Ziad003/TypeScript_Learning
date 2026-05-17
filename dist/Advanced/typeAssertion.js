"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let anything;
anything = "222";
anything;
const kgToGmConverter = (input) => {
    if (typeof input === 'number') {
        return input * 100;
    }
    else if (typeof input === 'string') {
        const [value] = input.split(' ');
        return `Output is: ${Number(value) * 100}`;
    }
};
const result = kgToGmConverter(2);
const result1 = kgToGmConverter("2");
console.log(result);
console.log(result1);
try {
}
catch (err) {
    console.log(err.message);
}
//# sourceMappingURL=typeAssertion.js.map