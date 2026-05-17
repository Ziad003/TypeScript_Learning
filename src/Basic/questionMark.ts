//?: ternary operator: decision making
//??: nullish coalescing operator (Works upon null/undefined)
//? : optional chaining


const eligible=(age:number)=>{
    // if(age>=21){
    //     console.log('Eligible for marriage')
    // }else{
    //     console.log('You are not eligible')
    // }

    const result=age>=21?console.log('Eligible for marriage'):console.log('You are not eligible')
}
eligible(20)


const userTheme=undefined;
const selectedTheme=userTheme??'Light theme';

const userTheme1='DarkTheme'
const selectedTheme1=userTheme1??'Light theme'


console.log(selectedTheme) 
console.log(selectedTheme1) 



//Optional chaining

const user:{
    address:{
        city:string,
        town:string,
        postalCode?:string
    }
}={
    address:{
        city: 'Dhaka',
        town:'Banani'
    }
}

const postalCode=user?.address?.postalCode;
console.log(postalCode);