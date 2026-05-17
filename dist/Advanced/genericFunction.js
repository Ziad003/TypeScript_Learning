"use strict";
//Generic Function
Object.defineProperty(exports, "__esModule", { value: true });
// const createArrayWithString=(value:string)=>[value];
// const createArrayWithNumber=(value:number)=>[value];
// const createArrayWithUserObj=(value:{id:number; name:string})=>{
//     return [value]
// }
const createArrayWithGeneric = (value) => [value];
// const arrString=createArrayWithString('Apple')
// const arrObj=createArrayWithUserObj({
//     id:222,
//     name:'Next level'
// })
const arrayString = createArrayWithGeneric("NewAple");
const arrayNumber = createArrayWithGeneric(4);
const arrayObj2 = createArrayWithGeneric({
    id: 342,
    name: "Ziad",
});
//tuple
const createArrayWithTuple = (param1, param2) => [param1, param2];
const createArrayWithTupleGeneric = (param1, param2) => [
    param1,
    param2,
];
const newTupleGeneric = createArrayWithTupleGeneric({
    id: 323,
    name: "Ziad",
}, 4);
console.log(newTupleGeneric);
const addStudentTOCourse = (studentInfo) => {
    return {
        course: "next Level",
        ...studentInfo,
    };
};
const student1 = {
    id: 123,
    name: "Ziad",
    hasPen: true,
};
const student2 = {
    id: 234,
    name: "Nokib",
    hasCar: true,
};
const newStudent1 = addStudentTOCourse(student1);
console.log(newStudent1);
const newStudent2 = addStudentTOCourse(student2);
console.log(newStudent2);
//# sourceMappingURL=genericFunction.js.map