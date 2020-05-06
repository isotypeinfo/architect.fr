console.log("loaded");
// var translations = 
// { 
//     "en" : { 
//         "langdesclogo" : " | Relational network of Paul Otlet",
//         "langdatabase" : "Database",
//         "langabout" : "About",
//         "langamis" : "Friends",
//         "langfamille" : "Family",
//         "langcollaborateurs" : "Contributors",
//         "langcontemporains" : "?Contemporains?",
//         "langinstitution" : "Institution",
//         "langnationalite" : "Nationality",
// 		"langdiscipline" : "Discipline",
// 		"langdatenaissance" : "Born",
// 		"langdatemort" : "Died",
// 		"langinfos" : "About",
// 		"langintro" : "The Otletosphère is a relational network of the various individuals and institutions close to Paul Otlet. The versatility in the work of Paul Otlet allowed him to frequent a large array of scientists, sociologists, artists, with whom he contributed his whole life. Those relationships are known thanks to the Mundaneum archives.",
// 		"langutilisation" : "Use your keyboard or mouse to navigate within the Otletospère. Select a node on the network to display more informations, and filter the network with the filters above.",


//     },
//     "fr" : { 
//         "langdesclogo" : " | Cartographie relationnelle de Paul Otlet",
//         "langdatabase" : "Base de données",
//         "langabout" : "A propos",
//         "langamis" : "Amis",
//         "langfamille" : "Famille",
//         "langcollaborateurs" : "Collaborateurs",
//         "langcontemporains" : "Contemporains",
//         "langinstitution" : "Institution",
//         "langnationalite" : "Nationalité",
// 		"langdiscipline" : "Discipline",
// 		"langdatenaissance" : "Naissance",
// 		"langdatemort" : "Mort",
// 		"langinfos" : "Infos",
// 		"langintro" : "L’Otletosphère est une cartographie relationnelle des personnalités et Insitution liées à Paul Otlet. Ce projet part du constat de l'implication forte de Paul Otlet, au sein des organisations internationales pour la paix ainsi qu'au sein des Insitution bibliographiques et documentaires. Les différentes activités d'Otlet lui ont permis de côtoyer un large nombre de personnalités scientifiques, artistes, sociologues avec lesquels il a pu entretenir des correspondances, se lier d'amitié, ou collaborer sur des projets communs. Ces relations sont connues ou attestées par l'examen des archives du Mundaneum.",
// 		"langutilisation" : "La navigation dans l'Otletosphère est accessible grâce aux touches du clavier, ou avec la souris. Cliquez sur un nœud du réseau pour obtenir plus d'informations, et filtrez le réseau grâce aux filtres ci-dessus.",

//     }
// };


// function writeInLanguage(){


// 	// A faire: simplifier ça
//     $("#welcome").text(translations[language].Welcome);
//     $("#test").text(translations[language].SomeText);
//     $("#langdesclogo").text(translations[language].langdesclogo);
//     $("#langdatabase").text(translations[language].langdatabase);
//     $("#langabout").text(translations[language].langabout);
//     $("#langamis").text(translations[language].langamis);
//     $("#langcollaborateurs").text(translations[language].langcollaborateurs);
//     $("#langcontemporains").text(translations[language].langcontemporains);
//     $("#langfamille").text(translations[language].langfamille);
//     $("#langinstitution").text(translations[language].langinstitution);
//     $("#langnationalite").text(translations[language].langnationalite);
//     $("#langdiscipline").text(translations[language].langdiscipline);
//     $("#langdatenaissance").text(translations[language].langdatenaissance);
//     $("#langdatemort").text(translations[language].langdatemort);
//     $("#langinfos").text(translations[language].langinfos);
//     $("#langintro").text(translations[language].langintro);
//     $("#langutilisation").text(translations[language].langutilisation);
//     // console.log($("#language").val());
// }

// $("#language").on("change", function(nodes, nodeId){
//     language = $("#language").val();
//     console.log(language);
//     if(language == "en"){
//         console.log("goen");
//         listEn();
//     }else{
//         console.log("gofr");
//         listFr();
//     }
//     writeInLanguage();
// });
// writeInLanguage();


// NOUVELLE MANIERE DE GERER LA LANGUE



var fr = document.getElementsByClassName('fr');
var eng = document.getElementsByClassName('en');



function localEng(){

  localStorage.removeItem('langue');
  localStorage.setItem('langue','english');
  language ="en";
  console.log(language);

  for (var i=0;i<eng.length;i+=1){
  eng[i].style.display = "inline";
  }

  for (var i=0;i<fr.length;i+=1){
  fr[i].style.display = "none";
  }
  listEn();
displayPersos(paramSelected, idSelected);

}

function localFr(){



  localStorage.removeItem('langue');
  localStorage.setItem('langue','francais');
  language ="fr";
  console.log(language);

  for (var i=0;i<eng.length;i+=1){
  eng[i].style.display = "none";
  }

  for (var i=0;i<fr.length;i+=1){
  fr[i].style.display = "inline";
  }
  listFr();
  displayPersos(paramSelected, idSelected);

}


function langue(){
  var fr = document.getElementsByClassName('fr');
  var eng = document.getElementsByClassName('en');

  var langue = localStorage.getItem('langue');
  if(langue === 'english'){
    language ="en";
    for (var i=0;i<eng.length;i+=1){
    eng[i].style.display = "inline";
    }
    for (var i=0;i<fr.length;i+=1){
    fr[i].style.display = "none";
    }
  }else{
    language ="fr";
    for (var i=0;i<eng.length;i+=1){
    eng[i].style.display = "none";
    }
    for (var i=0;i<fr.length;i+=1){
    fr[i].style.display = "inline";
    }
  }
}