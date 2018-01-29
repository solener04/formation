// TP Part 1.1
console.log("\n\n------------------------------------------------ TP Part 1.1 START ------------------------------------------------");


/*
    => Section S.1.1.1

    Créer deux variables de types "string" et "number" et y stocker respectivement les valeurs "ma chaîne" et 22.22. 
    Puis, afficher ces deux variables sur la console.
*/
// console.log("\n\n==> S.1.1.1");
// var maChaine:string = "Ma chaîne";
// var nombre:number = 22.22;
// console.log(maChaine,nombre);


/*
    => Section S.1.1.2
    
    Créer une variable de type "string" et y stocker la valeur 22. Que se passe-t-il ?
*/
// console.log("\n\n==> S.1.1.2");
// var variable:string = "22"; // Problème car on a déclaré un type string pour un nombre ==> besoin des côtes



/*
    => Section S.1.1.3
    
    Créer une variable de type "string" et y stocker la valeur "22", puis créer une 2e variable de type "number" 
    et y stocker la 1ere variable. Puis, afficher ces deux variables sur la console.
*/
// console.log("\n\n==> S.1.1.3");
// var variable2 : string = "22";
// var variable3 : number = <number> <any> variable2;
// console.log(variable2,variable3); //==> ne fonctionne pas car pas possible de mélanger nombre et chaîne de caractère


/*
    => Section S.1.1.4
    
    Créer une variable sans type et y stocker la valeur "22" dans la même instruction, puis la valeur 22. Que se passe-t-il ? Pourquoi ?
*/
// console.log("\n\n==> S.1.1.4");
// var variable4 = "22" 22;
// console.log(variable4);

/*
    => Section S.1.1.5
    
    Créer deux variables de types "number" et y stocker respectivement les valeurs 33 et 22. Puis, calculer la somme, 
    la différence et le modulo de ces deux nombres et afficher  les résultats sur la console.
*/
// console.log("\n\n==> S.1.1.5");
// var nombre1:number = 33;
// var nombre2:number = 22;
// console.log("somme = ",nombre1+nombre2); 
// console.log("différence = ", nombre1-nombre2);
// console.log("modulo = ",nombre1%nombre2);

/*
    ==> Section S.1.1.6
    
    Créer une variable de type "number" et ayant la valeur 22, incrémenter le nombre puis afficher le dans la même instruction.
*/
// console.log("\n\n==> S.1.1.6");
// var nombre3:number = 22;
// console.log(++nombre3);


/*
    => Section S.1.1.7
    
    Créer une variable de type "number" et ayant la valeur 22, afficher le nombre puis décrémenter le dans la même instruction. 
    Et enfin, afficher le nombre de nouveau.
*/
// console.log("\n\n==> S.1.1.7");
// var nombre4:number = 22;
// console.log(nombre4--);
// console.log(nombre4);


/*
    => Section S.1.1.8
    
    Créer deux variables de types "number" et y stocker respectivement les valeurs 33 et 22, 
    puis comparer les avec les opérateurs ">", "<=" et afficher  les résultats sur la console.
*/
// console.log("\n\n==> S.1.1.8");
// var nombre5:number = 33;
// var nombre6:number = 22;
// if nombre5 > nombre6 {
//     console.log(nombre5 + " est plus grand que "+ nombre6);
// } else {
//     console.log(nombre6 + " est plus grand " + nombre5);
// };
// if nombre5 <= nombre6 {
//     console.log(nombre5 + " est plus petit ou égal que "+ nombre6);
// } else {
//     console.log(nombre6 + " est plus petit ou égal " + nombre5);
// };


/*
    => Section S.1.1.9
    
    Créer une variable de type "number" et ayant la valeur 22, puis utiliser les opérateurs d’assignation "+=" et "/=" 
    avec la valeur "2" et afficher les résultats sur la console.
*/
// console.log("\n\n==> S.1.1.9");
// var nombre7:number = 22;
// var somme:number = nombre7 += 2;
// var division:number = nombre7 /=2;
// console.log(somme,division);


/*
    => Section S.1.1.10
    
    Créer une variable de type "number" et ayant la valeur 22, puis afficher sa valeur négative dans la console.
*/
// console.log("\n\n==> S.1.1.10");
// var nombre8:number = 22;
// console.log(-nombre8);


/*
    => Section S.1.1.11
    
    Créer une variable de type "number" et ayant la valeur "Math.floor(Math.random() * 22) + 1", puis utiliser l'opération modulo 
    pour déterminer s'il s'agit ou non d'un nombre pair, si oui afficher "Value X is Even", sinon afficher "Value X isOdd".
*/
// console.log("\n\n==> S.1.1.11");
// var nombre9:number = Math.floor(Math.random()*22) + 1;
// if (nombre9 % 2 == 0) {
//     console.log(nombre9 + " is Even");
// } else {
//     console.log(nombre9 + " is Odd");
// }


/*
    => Section S.1.1.12
    
    Créer deux variables de type "number" et ayant la valeur "Math.floor(Math.random() * 22) + 1", puis utiliser l'opération ">" 
    pour déterminer si le 1er est plus grand ou égal au 2e, si oui afficher "X is Bigger or Equal than Y", sinon afficher "X is Lower than Y".
*/

//console.log("\n\n==> Section S.1.1.12");
// var nombre10:number = Math.floor(Math.random() * 22) + 1;
// var nombre11:number = Math.floor(Math.random() * 22) + 1;
// if (nombre10 >= nombre11) {
//     console.log(nombre10 + " is Bigger or equal than " + nombre10);
// } else {
//     console.log(nombre10 + " is Lower than " + nombre11);
// }


/*
    => Section S.1.1.13
    
    Créer une variable de type "tableau" contenant les éléments "myString", 22 et [11], puis afficher le type de chaque élément du tableau dans la console.
    Et enfin afficher le type de chaque élément de l'élément 3.
*/
// console.log("\n\n==> Section S.1.1.13");
// var tableau:any[] = ["myString", 22, [11]];
// for (var value of tableau ) {
//     console.log(typeof value);
//      if (typeof value == 'object') {
//          for (var value2 of value){
//              console.log("Dans l'object, j'ai : " + typeof value2);
//          }
//      } 
        
//    }



/*
    => Section S.1.1.14
    
    Créer une variable de type "tableau" contenant les éléments "myString", 22 et [11]. Puis afficher pour chaque élément,
    "Value X is an Array" si l'élément est de type "number" sinon afficher "Value X is NOT an Array".
*/
// console.log("\n\n==> Section S.1.1.14");
// var tableau:any[] = ["myString", 22, [11]];
// for (var value of tableau) {
//     if (typeof value == "number") {
//         console.log(value + " is an Array");
//     } else {
//         console.log (value + " is Not an Array");
//     }
// }



console.log("\n\n------------------------------------------------ TP Part 1.1 END ------------------------------------------------\n\n");

