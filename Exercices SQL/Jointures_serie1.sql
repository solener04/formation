/*Noms et prénoms des salariés ayant la compétence "Javascript"*/
/*SELECT Ingenieur.nom, Ingenieur.prenom
FROM Ingenieur, Ing_cpc
WHERE Ingenieur.mle=ing_cpc.mle
AND ing_cpc.compet='JAVASCRIPT'*/

/*Quel est le client (code client et nom)
ayant au moins un projet sur lille*/
/*SELECT Client.codcli, Client.design
FROM Projet, Client, Cli_pro
WHERE Cli_pro.CODCLI=Client.codcli
AND Projet.codpro= Cli_pro.codpro
AND Projet.ville='Lille'*/

/*Liste des noms, prénoms et date d'entrée des ingénieurs 
appartenant au département 7*/
/*SELECT Ingenieur.nom, Ingenieur.prenom, Emploi.datent
FROM Ingenieur, Emploi
WHERE emploi.mle=Ingenieur.mle
AND Emploi.codept='7'
AND Emploi.datent < CURDATE()
AND (Emploi.datsor > CURDATE()
OR Emploi.datsor IS NULL)*/

/*Liste des noms, prénoms et date d'entrée des ingénieurs 
appartenant au département 7 par date d'entrée croissante*/
/*SELECT Ingenieur.nom, Ingenieur.prenom, Emploi.datent
FROM Ingenieur, Emploi
WHERE emploi.mle=Ingenieur.mle
AND Emploi.codept='7'
AND Emploi.datent < CURDATE()
AND (Emploi.datsor > CURDATE()
OR Emploi.datsor IS NULL)
ORDER BY emploi.datent*/

/*Liste des noms des salariés actuellement dans le département 7,
Avec les libellés de leurs projets en cours.
Preciser également leur prix de vente 
à chaque fois sur ces projets*/
/*SELECT Ingenieur.nom, Projet.libpro, Affect.pvente
FROM Ingenieur, Affect, Projet, Emploi
WHERE Ingenieur.mle=Affect.mle
AND Affect.codpro=Projet.codpro
AND Ingenieur.mle = Emploi.mle
AND Emploi.codept = '7'
AND Affect.datdeb<CURDATE()
AND (Affect.datfin>CURDATE()
OR Affect.datfin IS NULL)
AND Emploi.datent<CURDATE()
AND (Emploi.datsor>CURDATE()
OR Emploi.datsor IS NULL)*/

/*Liste des noms des salariés actuellement dans le département 7,
Avec les libellés de leurs projets en cours.
Preciser également leur prix de vente 
à chaque fois sur ces projets
Trié par ordre décroissant pour le code projet*/
SELECT Ingenieur.nom, Projet.libpro, Affect.pvente
FROM Ingenieur, Affect, Projet, Emploi
WHERE Ingenieur.mle=Affect.mle
AND Affect.codpro=Projet.codpro
AND Ingenieur.mle = Emploi.mle
AND Emploi.codept = '7'
AND Affect.datdeb<CURDATE()
AND (Affect.datfin>CURDATE()
OR Affect.datfin IS NULL)
AND Emploi.datent<CURDATE()
AND (Emploi.datsor>CURDATE()
OR Emploi.datsor IS NULL)
ORDER BY Affect.codpro DESC



