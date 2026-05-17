type User={
    name: string;
    age: number;
};

type Role={
    role:"admin"|"user";
}

//interface: object type: object, array, function
interface Iuser{
    name:string,
    age:number
}

type userWithRole=User & Role;

interface IUserWithRole extends Iuser{
    name:"hasib";
    role:"admin"|"user";
}

const user1: User&Role={
    name:'Ziad',
    age: 26,
    role:"admin"
}

const user3:IUserWithRole={
    name:'hasib',
    age:27,
    role:"user"
}


const user2: Iuser={
    name:'Rony',
    age:27
}

type IsAdmin=boolean;

const isAdmin:IsAdmin=false;


//function

type Add=(number1:number,number2:number)=>number;
const add:Add=(num1,num2)=>num1+num2;


interface IAdd{
    (num1:number,num2:number):number
}

const newAdd:IAdd=(num1,num2)=>num1+num2;



type Friends=string[];
const friends:Friends=['s',"b"];
console.log(friends)

interface IFriends{
    [index:number]:string
}

const newFriends:IFriends=['A',"B"]
console.log(newFriends)