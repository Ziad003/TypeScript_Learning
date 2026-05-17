//oop: instance of type guard / type narrowing

class Person{
    name:string;

    constructor(name: string){
        this.name=name;
    }
    getSleep(hrsSleep:number){
        console.log(`${this.name} ${hrsSleep} ghonta ghumay`)
    }
}

class Student extends Person{
    id:number;
    constructor(name:string,id:number){
        super(name); 
        this.id=id;
    }

    doStudy(noOfHrs: number){
        console.log(`${this.name} doinik ${noOfHrs} ghonta pore`)
    }
}

class Teacher extends Person{
    constructor(name:string){
        super(name)
    }

    takeClass(numOfHrs:number){
        console.log(`${this.name} doinik ${numOfHrs} ghonta poray`)
    }

}

//function guard
const isStudent=(user: Person)=>{
    return user instanceof Student;
} 

const isTeacher=(user: Person)=>{
    return user instanceof Teacher
}

//type guard
const getUserInfo=(user:Person)=>{
    if(isStudent(user)){
        user.doStudy(10)
    }else if(user instanceof Teacher){
        user.takeClass(5)
    }else{
        user.getSleep(8);
    }
}



const student1=new Student('Mr. Student',322);

const teacher1=new Teacher('Mr. Teacher');

getUserInfo(student1)