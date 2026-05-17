//keyof: type operator

type RichPeoplVehicle={
    car:string;
    bike:string;
    cng:string;
}

type MyVehicle1="bike"|'car'|'cng';
type MyVehicle2=keyof RichPeoplVehicle;

const MyVehicle: MyVehicle2="car";


type User={
    id:number;
    name:string;
    address:{
        city:string
    }
}

const user:User={
    id:221,
    name:"Ziad",
    address:{
        city: "Jamalput"
    }
}

const myName=user.name;
const myId=user["id"];

const getPropertyFromObj=(obj:User, key: keyof User)=>{
    return obj[key];
}

const result=getPropertyFromObj(user,"address")

//Generic
const newProduct={
    name:'Valueable',
    price:223
}
const getProductGeneric=<X>(product:X,key:keyof X)=>{
    return product[key]
}

const getProduct=getProductGeneric(newProduct,"price");
const getNewProdct=getProductGeneric(user,'id');