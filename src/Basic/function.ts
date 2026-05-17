function addFun(num1:number,num2:number):number{
    return num1+num2;
}

const add=(num1:number,num2:number):number=>num1+num2;

add(1,2)


//method

const poorUser={
    name:'mezba',
    balance:0,
    addBalance(value:number){
        const balance=this.balance+value;
        return balance;
    }
}

console.log(poorUser.addBalance(23));

const arr: number[]=[1,2,3,4]

const newArr=arr.map((element:number):number=>element*element)
console.log(newArr)