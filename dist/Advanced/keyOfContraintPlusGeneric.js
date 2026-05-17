"use strict";
//keyof: type operator
Object.defineProperty(exports, "__esModule", { value: true });
const MyVehicle = "car";
const user = {
    id: 221,
    name: "Ziad",
    address: {
        city: "Jamalput"
    }
};
const myName = user.name;
const myId = user["id"];
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
const result = getPropertyFromObj(user, "address");
//Generic
const newProduct = {
    name: 'Valueable',
    price: 223
};
const getProductGeneric = (product, key) => {
    return product[key];
};
const getProduct = getProductGeneric(newProduct, "price");
const getNewProdct = getProductGeneric(user, 'id');
//# sourceMappingURL=keyOfContraintPlusGeneric.js.map