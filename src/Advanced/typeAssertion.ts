let anything: any;

anything="222";

(anything as string)

const kgToGmConverter=(input: string|number):string|number|undefined=>{
    if(typeof input==='number'){
        return input*100;
    }else if(typeof input==='string'){
        const [value]=input.split(' ')
        return `Output is: ${Number(value)*100}`
    }
}

const result=kgToGmConverter(2) as number;
const result1=kgToGmConverter("2") as string;
console.log(result)
console.log(result1)


type CustomError={
    message:string
}

try{

}catch(err){
    console.log((err as CustomError).message);
}