// // TP Part 2.1
console.log("\n\n------------------------------------------------ TP Part 2.2 START ------------------------------------------------");


/*
     ==> Section 2.2.1

    L'objectif est de mettre en place les concepts de généricité :
        - Créer une classe générique "GenericTypeHandler" ayant les méthodes suivantes :
            - display(param1:T, param2:T):void
            - addition(param1:T, param2:T):T
            - substract(param1:T, b:T):T
        - Créer une classe spécifique "NumberHandler" apportant les comportements suivants
            - display(param1:T, param2:T):void ==> affiche les 2 paramètres
            - addition(param1:T, param2:T) ==> affiche la somme des 2 paramètres
            - substract(param1:T, param2:T):T ==> affiche la différence des 2 paramètres
        - Créer une classe spécifique "StringHandler" apportant les comportements suivants
            - display(param1:T, param2:T):void ==> affiche les 2 paramètres
            - addition(param1:T, param2:T):T ==> affiche la concaténation des 2 paramètres
            - substract(param1:T, b:T):T ==> affiche le paramètre 1 en n'ayant supprimer toutes les occurences du paramètre 2

    Puis tester les cas ci-dessous :
        - Pour NumberHandler : toutes les méthodes
        - Pour StringHandler : toutes les méthodes
*/
// console.log("\n\n==> 2.2.1");
// class GenericTypeHandler <T extends string|number> {

//     param1:string|number;
//     param2:string|number;

//     constructor (param1, param2) {
//         this.param1 = param1;
//         this.param2 = param2;
//     }

//     display(param1:T, param2:T) : void {
//         console.log(param1, param2);
//     }

//     addition (param1:T, param2:T) {
//         console.log(""+param1+param2);
//     }

//     substract (param1:T, b:T) {
        
//     }
// }

// class NumberHandler extends GenericTypeHandler<number> {

//     addition (param1:number, param2:number) {
//         console.log(param1+param2);
//     }

//     substract (param1:number, param2:number) {
//         console.log(param1-param2);
//     }
// }

//  class StringHandler extends GenericTypeHandler<string> {
//      substract (param1:string, b:string){
//          console.log(param1.replace(new RegExp(b, 'g'), "");
//      }
//  }
//  var nombre = new NumberHandler();
//  nombre.display(6, 2);
//  nombre.addition(6, 2);
//  nombre.substract(6, 2);
//  var maChaine = new StringHandler();
//  maChaine.display("hello", "world");
//  maChaine.addition("hello", "world");
//  maChaine.substract("bonjour","b");
//  maChaine.substract("bonjour bibou", "b");



console.log("\n\n------------------------------------------------ TP Part 2.2 END ------------------------------------------------\n\n");

