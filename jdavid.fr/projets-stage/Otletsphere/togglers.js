var itemsInstitution = null;
var itemsFamille = null;
var itemsAmis = null;
var itemsCollaborateurs = null;

var showInstitution = true;
var showFamille = true;
var showAmis = true;
var showCollaborateurs = true;
var showContemporains = true;

function toggleInstitution() {
if (showInstitution == true) {
	document.getElementById('buttonInstitution').className += " activebutton";
	itemsInstitution = nodes.get({
		// fields: ['id'],
		filter: function(item) {
			return item.group == "institution";
		}
	});
	nodes.remove(itemsInstitution);
	console.log('filtered itemsInstitution', itemsInstitution);
	showInstitution = false;
	}
	else{
	nodes.add(itemsInstitution);
	showInstitution = true;
	document.getElementById('buttonInstitution').classList.remove("activebutton");
	}
}

function toggleFamille() {
document.getElementById('buttonFamille').className += " activebutton";
if (showFamille == true) {
	itemsFamille = nodes.get({
		// fields: ['id'],
		filter: function(item) {
			return item.group == "famille";
		}
	});
	nodes.remove(itemsFamille);
	console.log('filtered itemsFamille', itemsFamille);
	showFamille = false;
	}
	else{
	nodes.add(itemsFamille);
	showFamille = true;
	document.getElementById('buttonFamille').classList.remove("activebutton");
	}
}

function toggleAmis() {
document.getElementById('buttonAmis').className += " activebutton";
if (showAmis == true) {
	itemsAmis = nodes.get({
		// fields: ['id'],
		filter: function(item) {
			return item.group == "amis";
		}
	});
	nodes.remove(itemsAmis);
	console.log('filtered itemsAmis', itemsAmis);
	showAmis = false;
	}
	else{
	nodes.add(itemsAmis);
	showAmis = true;
	document.getElementById('buttonAmis').classList.remove("activebutton");
	}
}

function toggleCollaborateurs() {
document.getElementById('buttonCollaborateurs').className += " activebutton";
if (showCollaborateurs == true) {
	itemsCollaborateurs = nodes.get({
		// fields: ['id'],
		filter: function(item) {
			return item.group == "collaborateurs";
		}
	});
	nodes.remove(itemsCollaborateurs);
	console.log('filtered itemsCollaborateurs', itemsCollaborateurs);
	showCollaborateurs = false;
	}
	else{
	nodes.add(itemsCollaborateurs);
	showCollaborateurs = true;
	document.getElementById('buttonCollaborateurs').classList.remove("activebutton");
	}
}

function toggleContemporains() {
document.getElementById('buttonContemporains').className += " activebutton";
if (showContemporains == true) {
	itemsContemporains = nodes.get({
		// fields: ['id'],
		filter: function(item) {
			return item.group == "contemporains";
		}
	});
	nodes.remove(itemsContemporains);
	console.log('filtered itemsContemporains', itemsContemporains);
	showContemporains = false;
	}
	else{
	nodes.add(itemsContemporains);
	showContemporains = true;
	document.getElementById('buttonContemporains').classList.remove("activebutton");
	}
}