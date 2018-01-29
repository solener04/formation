/*Liste des ingénieurs de la société*/
/*SELECT mle, nom, prenom
FROM ingenieur*/

/*Liste des couples (PDG, DG de tous les départements avec éliminations des doubles*/
/*SELECT DISTINCT PDG, DG
FROM DEPT*/

/*Liste des matricules des ingénieurs 
actuellement dans le département 7,
triée sur les matricules croissants*/
/*SELECT mle
FROM Emploi
WHERE codept='7'
AND datent < CURDATE()
AND (datsor > CURDATE()
OR datsor IS NULL)
ORDER BY mle*/

/*Liste des prénoms rangée par sexe et prénom*/
/*SELECT prenom
FROM Ingenieur
ORDER BY sexe, prenom*/

/*Liste des départements (code département, désignation, PDG)
situés rue de Londres à Paris */
/*SELECT codept, design, PDG
FROM Dept
WHERE ville LIKE 'paris'
AND adresse LIKE '%Londres%'*/

/*Quels sont les salariés dont le nom ne contient pas la lettre E*/
/*SELECT nom
FROM Ingenieur
WHERE nom NOT LIKE '%E%'*/

/* Quels sont les matriccules supérieurs à 1000,
d'ingénieurs ayant la compétence JAVA*/
/*SELECT mle
FROM ing_pro_cpc
WHERE mle > 1000
AND compet ='JAVA'*/

/*Quels sont les ingénieurs dont le nom contient la lettre A 
en deuxième position*/
/*SELECT nom
FROM Ingenieur
WHERE nom LIKE '_A%'*/

/*Liste des ingénieurs n'ayant pas le téléphone*/
/*SELECT nom
FROM Ingenieur
WHERE notel IS NULL*/

/*Matricules des ingénieurs qui ont déjà eur l'occasion
de quitter au moins une fois le projet 17*/
/*SELECT mle
FROM Affect
WHERE codpro ='17'
AND Datfin < CURDATE()*/



