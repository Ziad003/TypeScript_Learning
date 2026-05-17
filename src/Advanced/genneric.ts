//Generic Array

//dynamically generalize
// type GenericArray=Array<boolean>
type GenericArray<T>=Array<T>

// const friends: string[]=['Ziad','X','Rony'];
const friends: GenericArray<string>=['Ziad','X','Rony'];

// const rollNumber:number[]=[2,3,4,5];
const rollNumber:Array<number>=[2,3,4,5];

// const isEligibleList:boolean[]=[true,false,true]
const isEligibleList:Array<boolean>=[true,false,true]

const newEligible: GenericArray<boolean>=[false, true];

const sqrFunc=(value:number)=>{
    return value*value;
}
sqrFunc(4)


type Coordinates=[number,number];
const coordinates:Coordinates=[20,30];


//Generic coordinates
type GenericCoordinates<x,y>=[x,y]

const coordinates2:GenericCoordinates<string,number>=['Ziad',26];
console.log(coordinates2)


//Generic Array of object

type user={name:string,age:number}

const userList:GenericArray<{name:string,age:number}>=[
    {
        name:'Ziad',
        age:26
    },{
        name:'Rony',
        age:27
    }
]