const arr1:number[]=[1,2,3,4]
const arr2:number[]=[3,4,5,6]
const newArr:number[]=[...arr1,...arr2]

console.log(newArr);

const newfun=(...names:unknown[])=>{
    console.log(names)
}

newfun('Ziad','rony',5)