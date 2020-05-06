// Dataset retrieved from google spreadseet using tabletop.js
var nodesUrl = 'https://docs.google.com/spreadsheets/d/1zu-Hs1fp9Lu5TCGTgzQgwF62BnADHYKesyygZNunDFM/edit?usp=sharing';
var edgesUrl = 'https://docs.google.com/spreadsheets/d/1FSQtgpXpLrG90XYqOubj9qJnEsTkNGeqIy0MLJ78dJg/edit?usp=sharing';

// Hides the sidebar before clicking on anything
var introtext = false;
let nbParsedData = 0;
var edges = null;
var nodes = null;
var network = null;
var visData = null;
var visDataback = null;
// Boolean to trigger graph creation
let isEdgesReady = false;
let isNodesReady = false;
let activeNode = 0;
console.log(activeNode);

function init() {
  a = Tabletop({
    key: edgesUrl,
    callback: showInfoEdges,
    simpleSheet: true
  });
  b = Tabletop({
    key: nodesUrl,
    callback: showInfoNodes,
    simpleSheet: true,
    parseNumbers: true
  });
}

function showInfoNodes(data, tabletop) {
  nodes = new vis.DataSet(data);
  console.log("nodes:", nodes);
  isNodesReady = true;
  createGraphWhenReady(nodes, edges);
}
function showInfoEdges(data, tabletop) {
  edges = new vis.DataSet(data);
  console.log("edges:", edges);
  isEdgesReady = true;
  createGraphWhenReady(nodes, edges);
}

window.addEventListener('DOMContentLoaded', init)




function createGraphWhenReady(nodes, edges) {

  if(isNodesReady === false || isEdgesReady == false){
    return;
  }

  var container = document.getElementById('mynetwork');

  visData = {
    nodes: nodes,
    edges: edges
  };
  visDataback = visData;

  var options = {
    groups: {
      otlet: {color:{background:'#000000', border:'black'}, font: {color:'black'}, borderWidth:5},
      amis: {color:{background:'#ffffff', border:'#0B5D97'}, font: {color:'#0B5D97'}, borderWidth:3},
      famille: {color:{background:'#ffffff', border:'#22a6b3'}, font: {color:'#22a6b3'}, borderWidth:3},
      contemporains: {color:{background:'#ffffff', border:'#388C44'}, font: {color:'#388C44'}, borderWidth:3},
      institution: {color:{background:'#ffff', border:'#f0932b'}, font: {color:'#f0932b'}, borderWidth:3},
      collaborateurs: {color:{background:'#ffff', border:'#DD5E3A'}, font: {color:'#DD5E3A'}, borderWidth:3},     
    },
    nodes: {
      shape: 'box',
      size : 30,
    },
    "edges": {
      "smooth": {
        "forceDirection": "none"
      }
    },
    "physics": {
      "barnesHut": {
        "avoidOverlap": 1
      },
      "minVelocity": 0.75,
      "solver": "forceAtlas2Based"
    },
    interaction:{
      hover:true,
      navigationButtons: true,
      keyboard: true,
    }

  };



  network = new vis.Network(container, visData, options);
    network.on("hoverNode", function(){
// console.log("hover")
});



  network.on("click", function(params, activeNode) {
    displayPersos(params, activeNode);
    idSelected = activeNode;
    paramSelected = params;
  });
  
  network.on("click", function(params, activeNode) {
  introtext = true;
    document.getElementById("description").style.display = "none";
    document.getElementById("rightpanelcontainer").style.visibility = "visible";
    });


function closeWindow(){
  document.getElementById("description").style.display = "inline";
    document.getElementById("rightpanelcontainer").style.visibility = "hidden";
}


}

function displayPersos(params, idperso){

    

    if (params.nodes.length > 0) {
      var nodeId = params.nodes[0];
      idperso = nodeId;
      console.log(idperso);
      var nodeLabel = nodes.get(nodeId).bio;
      console.log();
      document.getElementById('biodescname').innerHTML = nodes.get(nodeId).label;
      document.getElementById('personationalite').innerHTML = nodes.get(nodeId).nationalite;
      if (language == "en"){ document.getElementById('personationalite').innerHTML = nodes.get(nodeId).nationalite_en; }
      document.getElementById('persobio').innerHTML = nodes.get(nodeId).description;
      if (language == "en"){ document.getElementById('persobio').innerHTML = nodes.get(nodeId).description_en; }
      document.getElementById('persopic').src = nodes.get(nodeId).image;
      // document.getElementById('persotype').innerHTML = nodes.get(nodeId).type;
      document.getElementById('persoactivite').innerHTML = nodes.get(nodeId).discipline;
      if (language == "en"){ document.getElementById('persoactivite').innerHTML = nodes.get(nodeId).discipline_en; }
      document.getElementById('datenaissance').innerHTML = nodes.get(nodeId).date_naissance;
      document.getElementById('datemort').innerHTML = nodes.get(nodeId).date_mort;
      document.getElementById('persorelation').innerHTML = nodes.get(nodeId).relation;

      // document.getElementById("wikiLink").href = nodes.get(nodeId).lien_wikipedia;
      if (nodes.get(nodeId).group == "otlet"){ document.getElementById("persorelation").style.color = "black"; };
      if (nodes.get(nodeId).group == "amis"){ document.getElementById("persorelation").style.color = "#0B5D97"; };
      if (nodes.get(nodeId).group == "famille"){ document.getElementById("persorelation").style.color = "#22a6b3"; };
      if (nodes.get(nodeId).group == "contemporains"){ document.getElementById("persorelation").style.color = "#388C44"; };
      if (nodes.get(nodeId).group == "institution"){ document.getElementById("persorelation").style.color = "#f0932b"; };
      if (nodes.get(nodeId).group == "collaborateurs"){ document.getElementById("persorelation").style.color = "#DD5E3A"; };
      if (nodes.get(nodeId).group == "institution"){ document.getElementById("datemorttable").style.display = "none"; } else { document.getElementById("datemorttable").style.display = "table-row"; };
      if (nodes.get(nodeId).group == "institution"){ document.getElementById("datenaissancetable").style.display = "none"; } else { document.getElementById("datenaissancetable").style.display = "table-row"; };
    }

  };

