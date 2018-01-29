/*Fonction zone obligatoire*/
function verifObligatoire (oZone) {
	if (oZone.value == ""){
		return false;
	} else {
		return true;
	}
}

/*Fonction 5 caractères*/
function verifSupCinq (oZone){
	if (oZone.value.length < 5){
		return false;
	} else {
		return true;
	}
}

/*Fonction champ numerique*/
function verifNumerique (oZone){
	if (isNaN(oZone.value)){
		return false;
	} else {
		return true;
	}
}

/*Fonction vérification connexion*/
function checkConnexion(oForm) {
	var oTxIdentifiant = document.getElementById("txIdentifiant");
	var oTxMotDePasse = document.getElementById ("txMotDePasse");
	var sMessage ="";
	var oDivMsgErreur = document.getElementById("msgErreur");

	if (! verifObligatoire(oTxIdentifiant)) {
		sMessage += "L'identifiant est obligatoire <br />";
	}
	if (! verifSupCinq(oTxIdentifiant)){
		sMessage += "L'identifiant doit contenir au moins 5 caractères <br />";
	}
	if (! verifObligatoire(oTxMotDePasse)){
	sMessage += "Le mot de passe est obligatoire <br />";
	}
	if (! verifSupCinq(oTxMotDePasse)){
		sMessage += "Le mot de passe doit contenir au moins 5 caractères <br />";
	}
	if (sMessage != "") {
		oDivMsgErreur.innerHTML = sMessage;
		return false;
	} else {
		return true;
	}
}

/*Fonction vérification enregistrement joueur*/
function checkJoueur (oForm) {
	var oTxNomJoueur = document.getElementById("txNomJoueur");
	var oTxPrenomJoueur = document.getElementById("txPrenomJoueur");
	var sMessage ="";
	var oDivMsgErreur = document.getElementById("msgErreur");
	
	if (! verifObligatoire(oTxNomJoueur)) {
		sMessage += "Le nom est obligatoire <br />";
	}
	if (! verifObligatoire(oTxPrenomJoueur)) {
		sMessage += "Le prénom est obligatoire <br />";
	} 
	if (sMessage != "") {
		oDivMsgErreur.innerHTML = sMessage;
		return false;
	} else {
		confirm("Le joueur a bien été enregistré");
		return true;
	}
}

/*Fonction vérification enregistrement arbitre*/
function checkArbitre (oForm) {
	var oTxNomArbitre = document.getElementById("txNomArbitre");
	var oTxPrenomArbitre = document.getElementById("txPrenomArbitre");
	var sMessage ="";
	var oDivMsgErreur = document.getElementById("msgErreur");
	
	if (! verifObligatoire(oTxNomArbitre)) {
		sMessage += "Le nom est obligatoire <br />";
	}
	if (! verifObligatoire(oTxPrenomArbitre)) {
		sMessage += "Le prénom est obligatoire <br />";
	} 
	if (sMessage != "") {
		oDivMsgErreur.innerHTML = sMessage;
		return false;
	} else {
		confirm("L'arbitre a bien été enregistré");
		return true;
	}
}

/*Fonction vérification enregistrement court*/
function checkCourt (oForm) {
	var oTxNomCourt = document.getElementById("txNomCourt");
	var sMessage ="";
	var oDivMsgErreur = document.getElementById("msgErreur");
	
	if (! verifObligatoire(oTxNomCourt)) {
		sMessage += "Le nom est obligatoire <br />";
	}
	if (sMessage != "") {
		oDivMsgErreur.innerHTML = sMessage;
		return false;
	} else {
		confirm("Le court a bien été enregistré");
		return true;
	}
}

/*Fonction vérification enregistrement Match
 * Vérification juste de chiffres et pas s'il s'agit de vraies années !!*/

function checkMatch (oForm) {
	var oTxJour = document.getElementById("txJour");
	var oTxMois = document.getElementById("txMois");
	var oTxAnnee = document.getElementById("txAnnee");
	var sMessage ="";
	var oDivMsgErreur = document.getElementById("msgErreur");
	
	if (! verifObligatoire(oTxJour)) {
		sMessage += "Le jour est obligatoire <br />";
	}
	if (! verifNumerique (oTxJour)){
		sMessage += "Le jour doit être numérique <br />";
	}
	if (! verifObligatoire(oTxMois)) {
		sMessage += "Le mois est obligatoire <br />";
	}
	if (! verifNumerique (oTxMois)){
		sMessage += "Le mois doit être numérique <br />";
	}
	if (! verifObligatoire(oTxAnnee)) {
		sMessage += "L'année est obligatoire <br />";
	}
	if (! verifNumerique (oTxAnnee)){
		sMessage += "L'année doit être numérique <br />";
	}
	if (sMessage != "") {
		oDivMsgErreur.innerHTML = sMessage;
		return false;
	} else {
		confirm("Le match a bien été enregistré");
		return true;
	}
}