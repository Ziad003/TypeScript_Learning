// class Counter{
//     count:number=0;

//     increment(){
//         return (this.count=this.count+1);
//     }

//     decrement(){
//         return (this.count=this.count-1);
//     }
// }

// const instance1=new Counter();

// console.log(instance1.increment());
// console.log(instance1.increment());

// const instance2=new Counter();

// console.log(instance2.increment()); //both are in different memory



//Now if I want same memory for all instance:
// class Counter{
//     static count:number=0;

//     increment(){
//         return (Counter.count=Counter.count+1);
//     }

//     decrement(){
//         return (Counter.count=Counter.count-1);
//     }
// }

// const newInstance=new Counter();
// console.log(newInstance.increment())

// const newInstance2=new Counter();
// console.log(newInstance2.increment())


//We can make mathod static also:
class Counter{
    static count:number=0;

    static increment(){
        return (Counter.count=Counter.count+1);
    }

    static decrement(){
        return (Counter.count=Counter.count-1);
    }
}

console.log(Counter.increment());
console.log(Counter.increment());
console.log(Counter.increment());