// TP Part 1.2
console.log("\n\n------------------------------------------------ TP Part 1.2 START ------------------------------------------------");


/*
    => Section S.1.2.1
    
    Créer une variable de type "tableau" contenant les éléments suivants : ["myString", 22, [11, 13]]
    Puis parcourir le tableau via les boucles "for in" et "for of" et afficher chaque élément.
*/
// console.log("\n\n==> Section S.1.2.1");
// var tableau:any[] = ["myString", 22, [11, 13]];
// for (var key in tableau) {
//     console.log(key);
// }
// for (var value of tableau) {
//     console.log(value);
// }


/*
    => Section S.1.2.2
    
    Créer une variable de type "tableau" contenant 10 éléments via une boucle 'for avec variable' dont les valeurs 
    sont générés comme suit : "Math.floor(Math.random() * 99) + 1". Puis parcourir le tableau via une boucle "while" et pour chaque élément, 
    s'il est modulo de 2 et 3, afficher "X is a modulo of 2 and 3", s'il est modulo de 2 uniquement, afficher "X is a modulo of 2", 
    s'il est modulo de 3 uniquement, afficher "X is a modulo of 3"; sinon afficher "X is an exceptional case".
*/
// console.log("\n\n==> Section S.1.2.2");
// var tableau:number[] = [];
// var pas:number = 0;

// for (var i = 0; i <= 9 ; i++) {

//     tableau[i] = Math.floor(Math.random() * 99) + 1 ;  
// }
// console.log(tableau);

// while ( pas <= 9) {
//     if (tableau[pas] % 2 == 0 && tableau[pas] % 3 == 0) {
//         console.log(tableau[pas] + " is a modulo of 2 and 3");
//     } else if (tableau[pas] % 2 == 0) {
//         console.log(tableau[pas] + " is a modulo of 2");
//     } else if (tableau[pas] % 3 ==0) {
//         console.log (tableau[pas] + " is a modulo of 3");
//     } else {
//         console.log(tableau[pas] + " is an exceptional case");
//     }
//     pas++;
// }


/*
    => Section S.1.2.3
    
    Créer une variable de type "tableau" contenant les éléments suivants : ["myString", 22, [11, 13]]
    Puis parcourir le tableau via une boucle "do while" et pour chaque élément, stocker le type dans une variable de type "string" et de nom "itemType", 
    si le type vaut "string" afficher "X is string", si le type vaut "number" afficher "X is number", sinon afficher "X is unknown".
*/
// console.log("\n\n==> Section S.1.2.3");
// var tableau:any[] = ["myString", 22, [11, 13]];
// var i:number = 0;
// var itemType:string;

// do {
//     itemType = typeof tableau[i];
//     if (itemType == "string") {
//         console.log(tableau[i] + " is string");
//     } else if (itemType == 'number') {
//         console.log(tableau[i] + " is a number")
//     } else {
//         console.log(tableau[i] + " is unknown")
//     }
//     i++;
// } while (i<3);



/*
    => Section S.1.2.4
    
    Créer une variable de type "tableau" contenant les éléments suivants : ["myString", 22, [11, 13]]
    Puis parcourir le tableau via une boucle pour chaque élément, s'il s'agit d'un nombre arrêter la boucle
    et afficher "Number has been found after x round(s) / y, stopping searches", sinon afficher "Looking for the next item".

    x : le nombre d'iteration nécéssaire et y le nombre d'éléments du tableau
*/
// console.log("\n\n==> Section S.1.2.4");
//  var tableau:any[] = ["myString", 22, [11, 13]];


//  for (var i=0; i<3; i++) {
//      if (typeof tableau[i] == "number") {
//          console.log("Number has been found after " + (i +1) + " round(s) / " + tableau.length + " stopping searches");
//          break;
//      } else {
//          console.log("Looking for the next item");
//      }
//  }







/*
    => Section S.1.2.5
    
    Créer une variable de type "tableau" et y ajouter 10 éléments qui sont des modulo de 2 ou 3. Pour cela, générer des nombres comme ci-dessous
    autant que nécéssaire en utilisant le mot clé "continue" puis afficher tous ces éléments via une boucle "for of". 
    Génération de nombre : Math.floor(Math.random() * 99) + 1
*/
// console.log("\n\n==> Section S.1.2.5");
// var nombre:number;
// var tableau:number[]=[];
// var i:number = 0;

// while (i<10) {
//     nombre = Math.floor(Math.random() * 99) + 1;
//     if (nombre % 2 != 0 && nombre % 3 != 0) {
//          continue;
//      }
//     tableau[i] = nombre;
//     i++;
// }

// for (var value of tableau) {
//     console.log(value);
// }



console.log("\n\n------------------------------------------------ TP Part 1.2 END ------------------------------------------------\n\n");

