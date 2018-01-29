/* Quels sont les ingénieurs ayant 
participé à des projets situés sur Paris*/
/*SELECT A.mle
FROM Projet P INNER JOIN Affect A ON A.codpro=P.codpro
WHERE P.ville='Paris'
AND A.datfin< CURDATE()*/

/* Liste des ingénieurs participant acutellement au projet 22
Nom, prenom, fonction, libellé du projet*/
/*SELECT I.nom, I.prenom, A.fonction, P.libpro
FROM Ingenieur I INNER JOIN Affect A ON I.mle=A.mle
				 INNER JOIN Projet P ON P.codpro=A.codpro
WHERE A.codpro=22
AND A.datdeb<CURDATE()
AND (A.datfin > CURDATE()
OR A.datfin IS NULL)*/

/*Noms et prenoms des ingénieurs mettant en oeuvre leur compétence JAVA
sur projet au 1er janvier 2000*/
/*SELECT I.nom, I.prenom
FROM Ingenieur I INNER JOIN Ing_pro_cpc IPC ON I.mle=IPC.mle
				 INNER JOIN Affect A ON A.mle=I.mle AND IPC.codpro=A.codpro
WHERE IPC.compet='JAVA'
AND A.datdeb<'2000-01-01'
AND (A.datfin > '2000-01-01'
OR A.datfin IS NULL)*/

/*Liste des départements ayant le même