type GenericThings<T>=T
type GenericArray<T>=Array<T>
type GenericObj<X>={
  name:string,
  age:number,
  bike:X
}



const name:GenericThings<string>="Ziad"

const array:GenericArray<string>=['A',"b"]

const obj:GenericObj<number>={
  name:'Ziad',
  age:25,
  bike:4
}

const addFun=<T,X>(num1:T,num2:X):T=>{
  return num1 
}

addFun(3,'d')