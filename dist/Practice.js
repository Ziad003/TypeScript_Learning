"use strict";
// type CartItem = {
// name: string;
// price: number;
// quantity?: number;
// };
Object.defineProperty(exports, "__esModule", { value: true });
// const calculateTotal=<T extends CartItem>(obj:T):number=>{
//   const{name,price,quantity=1}=obj;
//   return price*quantity
// }
// const item={
//   name:'Mouse',
//   price: 200,
//   quantity: 10
// }
// console.log(calculateTotal(item))
// type Person = { name: string; age: number };
// type JobDetails = { role: string; salary: number };
// type Employee=Person & JobDetails;
// function getProfile <T extends Employee>(employee:T){
//   return (`
//       'Name': ${employee.name},
//       "Role": ${employee.role}
//     `)
// }
// const emp={
//   name: 'Ziad',
//   age: 26,
//   role: "developer",
//   salary:80000
// }
// console.log(getProfile(emp))
// type UserResponse = {
//   info?: {
//   address?: {
//   zipCode?: string;
//   }
//  }
// };
// const getZipCode=(userRes:UserResponse):string=>{
//   const zipCode=userRes.info?.address?.zipCode??"00000";
//   return zipCode
// }
// const passRes={
//   info:{
//     address:{
//       zipCode:'3322'
//     }
//   }
// }
// console.log(getZipCode(passRes))
// let secretValue: unknown = "typescript is awesome";
// const upperValue=(secretValue as string).toUpperCase();
// console.log(upperValue)
// const returnLength=<T extends {length:number}>(input:T)=>{
//     return input.length;
// }
// console.log(returnLength([2,3,4]));
// console.log(returnLength({name:"Ziad",
//   length:30
// }))
// type Product={
//   id:number;
//   name:string;
//   price: number;
// }
// const product = { id: 101, name: "Keyboard", price: 50 } as const;
// function getProductProp<T extends Product ,K extends keyof T>(obj:T, key:K){
//   return obj[key]
// }
// const Colors = {
// Primary: "RED",
// Secondary: "BLUE"
// } as const;
// type ValidColor=(typeof Colors)[keyof typeof Colors];
// function setColor(c: ValidColor){
//   if(c===Colors.Primary || c===Colors.Secondary){
//     return c;
//   }else{
//     return ("Nothing")
//   }
// }
// console.log(setColor(Colors.Primary))
// interface MyDocument {
// title: string;
// content: string;
// author: string;
// }
// type Draft<T>={
//     readonly [p in keyof T]?:T[p]
// }
// const myDraft:Draft<MyDocument>={
//     title:'safd',
//     content: 'dsf',
//     author: "asdf"
// }
// console.log(myDraft)
// type DataType<T>=T extends any[]?"Large":"Small";
// type A=DataType<string[]>
// interface UserAccount {
// id: number;
// username: string;
// password: string;
// }
// type PublicUser=Omit<UserAccount,"password">
//# sourceMappingURL=Practice.js.map