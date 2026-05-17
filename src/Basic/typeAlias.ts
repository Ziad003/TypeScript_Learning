//object
type user={
    id:number,
    name:{
        firstName:string,
        lastName:string
    },
    gender:'male'|"female",
    contactNo:string,
    address:{
        division:string,
        city:string
    }
}

const user1:user={
    id:123,
    name:{
        firstName:'Mr.',
        lastName:"X"
    },
    gender:'male',
    contactNo:"01231234",
    address:{
        city:"Dhaka",
        division:"Dhaka"
    }
}

console.log(user1)


type name=string;
const myname:name='Ziad';


//function
function add(num1:number,num2:number):number{
    return num1+num2;
}
console.log(add(2,3));

type AddFun=(num1:number,num2:number)=>number;

const add2:AddFun=(num1,num2)=>{
    return num1+num2;
}

console.log(add2)

