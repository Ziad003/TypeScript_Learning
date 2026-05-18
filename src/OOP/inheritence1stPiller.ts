class Parent{
    name:string;
    age:number;
    address:string;

    constructor(name:string,age:number,address:string){
        this.name=name;
        this.age=age;
        this.address=address;
    }

    getSleep(numOfHrs:number){
        console.log(`${this.name} ${numOfHrs} ghonta ghumay`)
    }
}

class Student extends Parent{
    
}

const student1=new Student('Mr. New', 18,"Bangladesh")

student1.getSleep(15)


class Teacher extends Parent{
    
    designation:string;

    constructor(name:string,age:number,address:string,designation:string){
        super(name,age,address)
        this.designation=designation;
    }

    takeClass(numOfClass:number){
        console.log(`${this.name} ${numOfClass} class nen`)
    }
}

const teacher1=new Teacher('Hasan Sir',45,"BD","AST.Prof")
teacher1.takeClass(3)

console.log(teacher1.age)