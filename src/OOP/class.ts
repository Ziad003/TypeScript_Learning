// class Animal{
//     name:string;
//     species:string;
//     sound:string

//     constructor (name:string,species:string, sound: string){
//         this.name=name;
//         this.species=species
//         this.sound=sound
//     }

//     makeSound(){
//         console.log(`The animal is making sound`)
//     }
// }

// const dog=new Animal('dogesh',"dog","Ghew")

// console.log(dog.name)



class Animal{
    // name:string;
    // sound:string;
    
    constructor(public name: string,public sound: string){
        // this.name=name;
        // this.sound=sound;
    }

    makeSound(){
        console.log("It's doing: ",this.sound)
    }
}

const cat=new Animal('Kitty',"Mew")
cat.makeSound()