var itemsInstitution = null;
var itemsFamille = null;
var itemsAmis = null;
var itemsCollaborateurs = null;
var itemsContemporains = null;

var showInstitution = true;
var showFamille = true;
var showAmis = true;
var showCollaborateurs = true;
var showContemporains = true;

function toggleInstitution() {
if (showInstitution == true) {
	document.getElementById('buttonInstitution').className += " activebutton";
	$(".cardList-institution").addClass("cardListHidden");
	showInstitution = false;
	}
	else{
	showInstitution = true;
	document.getElementById('buttonInstitution').classList.remove("activebutton");
	$(".cardList-institution").removeClass("cardListHidden");
	}
}

function toggleFamille() {
document.getElementById('buttonFamille').className += " activebutton";
$(".cardList-famille").addClass("cardListHidden");
if (showFamille == true) {
	showFamille = false;
	}
	else{
	showFamille = true;
	document.getElementById('buttonFamille').classList.remove("activebutton");
		$(".cardList-famille").removeClass("cardListHidden");

	}
}

function toggleAmis() {
document.getElementById('buttonAmis').className += " activebutton";
$(".cardList-amis").addClass("cardListHidden");
if (showAmis == true) {
	showAmis = false;
	}
	else{
	showAmis = true;
	document.getElementById('buttonAmis').classList.remove("activebutton");
	$(".cardList-amis").removeClass("cardListHidden");
	}
}

function toggleCollaborateurs() {
document.getElementById('buttonCollaborateurs').className += " activebutton";
$(".cardList-collaborateurs").addClass("cardListHidden");
if (showCollaborateurs == true) {
	showCollaborateurs = false;
	}
	else{
	showCollaborateurs = true;
	document.getElementById('buttonCollaborateurs').classList.remove("activebutton");
	$(".cardList-collaborateurs").removeClass("cardListHidden");
	}
}

function toggleContemporains() {
document.getElementById('buttonContemporains').className += " activebutton";
$(".cardList-contemporains").addClass("cardListHidden");
if (showContemporains == true) {
	showContemporains = false;
	}
	else{
	showContemporains = true;
	document.getElementById('buttonContemporains').classList.remove("activebutton");
	$(".cardList-contemporains").removeClass("cardListHidden");
	}
}
