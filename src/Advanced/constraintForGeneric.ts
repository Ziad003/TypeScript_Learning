//constraint: strict rules

type student={
  id:number,
  name:string,
  age:number
}

const addStudentTOCourse = <T extends student>(studentInfo: T) => {
  return {
    course: "next Level",
    ...studentInfo,
  };
};

const student3={
  id:232,
  name:'Hasib',
  age:20,
  hasWatch:true
}

const newStudent=addStudentTOCourse(student3)

console.log(newStudent)