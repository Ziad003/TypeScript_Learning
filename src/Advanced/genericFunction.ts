//Generic Function

// const createArrayWithString=(value:string)=>[value];

// const createArrayWithNumber=(value:number)=>[value];

// const createArrayWithUserObj=(value:{id:number; name:string})=>{
//     return [value]
// }

const createArrayWithGeneric = <T>(value: T) => [value];

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

const createArrayWithTuple = (
  param1: { id: number; name: string },
  param2: string,
) => [param1, param2];

const createArrayWithTupleGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const newTupleGeneric = createArrayWithTupleGeneric(
  {
    id: 323,
    name: "Ziad",
  },
  4,
);
console.log(newTupleGeneric);

const addStudentTOCourse = <T>(studentInfo: T) => {
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
