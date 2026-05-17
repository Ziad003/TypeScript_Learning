"use strict";
//constraint: strict rules
Object.defineProperty(exports, "__esModule", { value: true });
const addStudentTOCourse = (studentInfo) => {
    return {
        course: "next Level",
        ...studentInfo,
    };
};
const student3 = {
    id: 232,
    name: 'Hasib',
    age: 20,
    hasWatch: true
};
const newStudent = addStudentTOCourse(student3);
console.log(newStudent);
//# sourceMappingURL=constraintForGeneric.js.map