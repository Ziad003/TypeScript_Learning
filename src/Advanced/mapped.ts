//map
const arrayOfNumber: number[]=[1,2,3];
const arrayOfString: string[]=['Z',"X"];
const arrayOfStringUsingMap: string[]=
arrayOfNumber.map((num)=>num.toString());

console.log(arrayOfNumber);

type AreaOfNum={
    height:number;
    width:number
}

type height=AreaOfNum["height"]

// type AreaOfString={
//     height: string;
//     width: string;
// }

// type AreaOfString={
//     [key in "height" | 'width']:string
// }
// type AreaOfString={
//     [key in keyof AreaOfNum]:string
// }
type Area<T>={
    [key in keyof T]:T[key]
}

const area1: Area<{height:number;width:string}>={
    height:50,
    width: '30'
}

console.log(area1)