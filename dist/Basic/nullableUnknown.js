"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//nullable type
const fun = (input) => {
    if (input) {
        console.log('Data from:', input);
    }
    else {
        console.log("Data from all");
    }
};
fun(null);
//unknown
const discount = (input) => {
    if (typeof input === 'number') {
        const discountPrice = input * 0.1;
        console.log(discountPrice);
    }
    else if (typeof input === "string") {
        const splitInput = input.split(" ");
        const [price] = splitInput;
        console.log(Number(price) * 0.1);
    }
    else {
        console.log('Wrong input');
    }
};
discount(100);
discount('100 Tk');
//void
const throwError = (msg) => {
    throw new Error(msg);
};
throwError('Error...');
//# sourceMappingURL=nullableUnknown.js.map