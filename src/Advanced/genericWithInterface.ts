
interface Developer <T,X=null>{
    name:string;
    salary: number;
    device:{
        brand:string,
        model:string;
        releasedYear: string
    },
    smartWatch: T;
    bile?:X
}


interface BrandLessWatch{
    heartRate:string;
    stopWatch: boolean
}

type AppleWatch={
    heartRate:string;
    callSuport:boolean;
    calculator:boolean;
}

const poorDeveloper:Developer<BrandLessWatch,{Brand:'Yamaha',engine:'200cc'}>={
    name:"Mr. Poor",
    salary:20,
    device:{
        brand:'lenovo',
        model:"A21",
        releasedYear:'2010'
    },
    smartWatch:{
        heartRate:'100',
        stopWatch:true
    }
}
const richDeveloper:Developer<AppleWatch>={
    name:"Mr. Rich",
    salary:202,
    device:{
        brand:'hp',
        model:"A21",
        releasedYear:'2020'
    },
    smartWatch:{
        heartRate:'100',
        callSuport:true,
        calculator:true
    },
    // bile:null
}