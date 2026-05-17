//array, object

let bazarList = ["eggs", "milk", "sugar"];

// bazarList.push(true); wrong

let mixedArr: (string|number)[]=['egg',12]

let coordinates:[number,number]=[23,32]

let system: [string,number]=['Ziad',26];

//reference type: object

const user:{
    readonly organization: string
    firstName:string;
    middleName?:string;
    lastName:string
}={
    organization: "Moll",
    firstName:'Ziad',
    lastName:"Hossain"
}

console.log(user)