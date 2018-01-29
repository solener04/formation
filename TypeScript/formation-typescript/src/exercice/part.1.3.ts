// TP Part 1.3
console.log("\n\n------------------------------------------------ TP Part 1.3 START ------------------------------------------------");


/*
    => Section S.1.3.1
    
    Créer la fonction ci-dessous :
        - Nom de fonction : sendNotification
        - Paramètre(s) : string (fullName) / string (email)
        - Valeur de retour : un message est généré avec le format "Hello [FULLE_NAME], you have received an notification from email : [EMAIL]"
        - Règles métiers
            - RM 1 : le paramètre 2 est optionnel, si non fourni utiliser la valeur "administrator@formation.fr" et la valeur "John Doe" 
            pour le paramètre 1 si non fourni non plus.
            - RM 2 : le paramètre 1 est requis, null ou undefini et le paramètre 2 est fourni, rechercher la valeur dans la Map des utilisateurs, 
            si non trouvé, utiliser  la valeur "John Doe"

    Puis tester les cas ci-dessous :
        - sendNotification(null) ==> : Hello John Doe, you have received an notification from email : administrator@formation.fr
        - sendNotification('Louis Legrand', 'louis.legrand@formation.fr') ==> : Hello Louis Legrand, you have received an notification from email : louis.legrand@formation.fr
        - sendNotification(undefined, 'louis.legrand@formation.fr') ==> : Hello Louis Legrand, you have received an notification from email : louis.legrand@formation.fr
        - sendNotification(undefined, 'louis.legrand.fake@formation.fr') ==> : Hello John Doe, you have received an notification from email : administrator@formation.fr
        - sendNotification('Louis Legrand') ==> : Hello Louis Legrand, you have received an notification from email : administrator@formation.fr
*/
console.log("\n\n==> Section S.1.3.1");
    var myUserMap:Map<string, string> = new Map([
        ["louis.legrand@formation.fr", "Louis Legrand"], 
        ["louis.legrand.junior@formation.fr", "Louis Legrand"], 
        ["michel.dupont@formation.fr", "Michel Dupont"]
    ]);

    function sendNotification(fullName:string, email:string){
        if ((fullName != null || fullName != undefined) && (email != null || email != undefined)) {
        console.log("Hello " + fullName + " , you have received an notification from email : " + email);
        } else if ((fullName != null || fullName != undefined) && (email == null || email == undefined)) {
            email = "administrator@formation.fr";
            console.log("Hello " + fullName + " , you have received an notification from email : " + email);                    
        }
    }
sendNotification(null , null);
/*
    => Section S.1.3.2
    
    Créer la fonction ci-dessous :
        - Nom de fonction : sendMultipleNotifications
        - Paramètre(s) : pluiseurs chaînes de caractère
        - Valeur de retour : aucun
        - Règles métiers
            - RM 1 : Si 1 paramètre, appeler la méthode sendNotification(parameter).
            - RM 2 : Si un nombre pair de paramètre, faire des couples de 2 selon l'ordre des chaînes pour appeler la méthode 
            sendNotification(parameter)(paramOrderOdd, paramOrderEven)
            - RM 3 : Si un nombre imppair de paramètre, faire des couples de 2 selon l'ordre des chaînes pour appeler la méthode 
            sendNotification(parameter)(paramOrderOdd, paramOrderEven) et pour ler dernier élément, appeler la méthode sendNotification(parameterLast).

    Puis tester les cas ci-dessous :
        - sendMultipleNotifications(
            'Louis Legrand', 'louis.legrand@formation.fr', 
            'Michel Dupont', 'michel.dupont@formation.fr', 
            'Louis Legrand'
        );
        - sendMultipleNotifications(
            'Louis Legrand', 'louis.legrand@formation.fr', 
            'Michel Dupont', 'michel.dupont@formation.fr'
        );
*/
// console.log("\n\n==> Section S.1.3.2");


/*
    => Section S.1.3.3
    
    Créer la fonction ci-dessous :
        - Nom de fonction : processModulo
        - Paramètre(s) : number / number
        - Valeur de retour : le modulo du paramètre 1 par le paramètre 2
        - Règles métiers
            - RM 1 : le paramètre 1 est null ou indéfini, afficher "Parameter 1 is required".
            - RM 2 : le paramètre 2 n'est pas fourni, utiliser la valeur par défaut 2 (à ajouter dans la signature de la fonction).
            - RM 3 : le paramètres 1 ou 2 ne sont pas des entiers positifs, transformer en une valeur positive et conserver uniquement la partie entière.

    Puis tester les cas ci-dessous :
        - processModulo(-223, 2) ==> : 1
        - processModulo(213, 7/2.2) ==> : 0
        - processModulo(219, 7.2) ==> : 2
*/
// console.log("\n\n==> Section S.1.3.3");


/*
    => Section S.1.3.4
    
    Créer la fonction ci-dessous :
        - Nom de fonction : findWordStartingBy
        - Paramètre(s) : string / string
        - Valeur de retour : tableau des mots du paramètre 2 commençant par la lettre passée en paramètre 1
        - Règles métiers
            - RM 1 : le paramètre 1 est null ou indéfini, afficher "Parameter is required".
            - RM 2 : le paramètre 1 n'est pas un caractère, afficher "Parameter must have lenght 1".
            - RM 3 : ignorer la casse

    Puis tester les cas ci-dessous :
        - findWordStartingBy("", "Alan is a good boy.") ==> : [Alan, a]
        - findWordStartingBy("A", "Alan is a good boy.") ==> : [Alan, a]
        - findWordStartingBy("N", "Alan is a good boy.") ==> : []
        - findWordStartingBy("G", "Alan is a good boy.") ==> : [good]
*/


/*
    => Section S.1.3.5
    
    Créer la fonction ci-dessous :
        - Nom de fonction : factorial
        - Paramètre(s) : nombre
        - Valeur de retour : factorielle
        - Règles métiers
            - RM 1 : En mathématiques, la factorielle (n!) d'un entier naturel n est le produit des nombres entiers strictement positifs inférieurs ou égaux à n.
            - RM 2 : Factorielle de 0 ou 1 vaut 1

    Puis tester via une boucle les factorielles de 0 à 10 y compris.

    Enfin, tester l'intégration de votre fonction dans la page "factorial.html"
*/
// console.log("\n\n==> Section S.1.3.5");


console.log("\n\n------------------------------------------------ TP Part 1.3 END ------------------------------------------------\n\n");

