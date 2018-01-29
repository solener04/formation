/*Liste des libellés de types de projets*/
/*SELECT LIBTYPE
FROM Type;*/ 

/*Liste des nils et villes des clients*/
/*SELECT design, ville
FROM Client;*/

/*Contenu integral de la table ing_pro_cpc*/
/*SELECT *
FROM ing_pro_cpc;*/

/*Liste des villes des implantations de la société*/
/*SELECT DISTINCT ville
FROM Dept;*/

/*Liste des noms, villes de clients triés par ville, nom*/
/*SELECT design, ville
FROM Client
ORDER BY ville, design;*/

/*Liste des codes et libellés de projets du plus cher au moins cher*/
/*SELECT codpro, libpro
FROM Projet
ORDER BY cout DESC;*/

/*Liste des codes et libellés de projet dont le cout est sup à 10 millions*/
/*SELECT codpro, libpro
FROM Projet
WHERE cout>10000000;*/

/*projet dont le nom de la voie dans l'adresse fait référence à brokleen*/
/*SELECT libpro
FROM Projet
WHERE adresse LIKE '%Brokleen%';*/

/*Salariés dont le nom commence par S*/
/*SELECT nom
FROM Ingenieur
WHERE nom LIKE 'S%';*/

/*Liste des matricules de salariés compris entre 501 et 1000, 
intervenant actuellement au moins sur l'un des projets suivants : 17 22 ou 120. 
Donner également le code projet à chaque fois*/
/*SELECT mle, codpro
FROM Affect
WHERE mle BETWEEN '501' AND '1000'
AND codpro IN('17','22','120')
AND datdeb < CURDATE()
AND (datfin > CURDATE()
OR datfin IS NULL)*/

/*en admettant que le cout des projets est en hors taxe, 
donner pour chaque projet compris entre 11 et 20  sont cout en TTC.
Nommer la nouvelle colonne cout_TTC */
/*SELECT DISTINCT cout*1.196 as 'COUT_TTC'
FROM Projet
WHERE codpro BETWEEN 11 AND 20*/

/*Quel est le client dont le libellé de ce secteur n'est pas renseigné*/
/*SELECT design
FROM Client
WHERE libsect IS NULL*/









