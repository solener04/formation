// // TP Part 2.1
console.log("\n\n------------------------------------------------ TP Part 2.1 START ------------------------------------------------");


/*
     ==> Section 2.1.1

    L'objectif est de mettre en place les concepts de classe et d'héritage, les étapes à suivre sont :
        - Créer une classe de base "Animal" avec les attributs "name" (string), "age" (number), "race" (string)
            - Créer une méthode displayInfos() qui permet d'afficher tous les attributs
        - Créer une classe fille "Cat" n'ayant rien en plus
        - Créer une classe fille "Dog" ayant en plus les attributs "runSpeed" (number), "nbTeeth" (string)
            - Créer une méthode displayInfos() qui se base sur celle de la classe parent et permet d'afficher tous les attributs en plus
        - Créer une classe fille "Snake" ayant en plus les attributs "biteRisk" (number)
            - Créer une méthode displayInfos() qui permet d'afficher uniquement les attributs en plus

    Puis tester les cas ci-dessous :
        - cat.displayInfos()
        - dog.displayInfos()
        - snake.displayInfos()
*/
// console.log("\n\n==> 2.1.1");
// class Animal {
//     name:string;
//     age:number;
//     race:string;

//     constructor (name:string, age:number, race:string) {
//         this.name = name;
//         this.age = age;
//         this.race = race;
//     }

//     displayInfos() {
//         console.log ("name : " + this.name + " age : " + this.age + " race : " + this.race);
//     }
// }

// class Cat extends Animal {
//    }

// class Dog extends Animal {
//     runSpeed:number;
//     nbTeeth:string;

//     constructor(name:string, age:number, race:string, runSpeed:number, nbTeeth:string) {
//         super(name, age, race);
//         this.runSpeed = runSpeed;
//         this.nbTeeth = nbTeeth;
//     }

//     displayInfos (){
//         super.displayInfos();
//         console.log(" Runspeed : " + this.runSpeed + "  nbTeeth : " + this.nbTeeth);

//     }
// }

// class Snake extends Animal {
//     biteRisk:number;

//     constructor (name:string, age:number, race:string, biteRisk:number) {
//         super(name, age, race);
//         this.biteRisk = biteRisk;
//     }

//     displayInfos() {
//         console.log("bite Risk : " + this.biteRisk);
//     }
// }

// var chat = new Cat("Nala", 7, "Ecaille de Tortue");
// var chien = new Dog("Helka", 7, "Husky", 15, "30");
// var serpent = new Snake ("bouo", 5, "Boa", 12);

// chat.displayInfos();
// chien.displayInfos();
// serpent.displayInfos();

console.log("\n\n------------------------------------------------ TP Part 2.1 END ------------------------------------------------\n\n");

