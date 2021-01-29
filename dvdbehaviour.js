var player;
var steps = [];
var filteredMoves = [];
var usedMovesList = [];
var parts = [];
var rows = [];
var tabletrs = [];
//var selectedFamily;
var input;
var popupInfoWindow;
var infoWindowOn = false;

var myJson = [
  {
    name: "posture",
    dvd: "1",
    location: " part1",
  },
  {
    name: "taxeem",
    dvd: "1",
    location: " part1",
  },
  {
    name: "zils standard pattern",
    dvd: "1",
    location: " part2",
  },
  {
    name: "shimmy",
    dvd: "1",
    location: " part2",
  },
  {
    name: "arm undulations",
    dvd: "1",
    location: " part2",
  },
  {
    name: "egyptian basic",
    dvd: "1",
    location: " part2",
  },
  {
    name: "bodywave and bellyroll",
    dvd: "1",
    location: " part2",
  },
  {
    name: "bellyroll",
    dvd: "1",
    location: " part3",
  },
  {
    name: "arabic",
    dvd: "1",
    location: " part3",
  },
  {
    name: "ribcage and torso rotation",
    dvd: "1",
    location: " part3",
  },
  {
    name: "pivot bump and choochoo",
    dvd: "1",
    location: " part3",
  },

  {
    name: "puja",
    dvd: "4",
    location: " part1",
  },
  {
    name: "floreo",
    dvd: "4",
    location: " part1",
  },
  {
    name: "flutter",
    dvd: "4",
    location: " part1",
  },
  {
    name: "head slide",
    dvd: "4",
    location: " part1",
  },
  {
    name: "reverse taxeem",
    dvd: "4",
    location: " part1",
  },
  {
    name: "level",
    dvd: "4",
    location: " part1",
  },
  {
    name: "layering",
    dvd: "4",
    location: " part2",
  },
  {
    name: "bodywave",
    dvd: "4",
    location: " part2",
  },
  {
    name: "egyptian half turn",
    dvd: "4",
    location: " part2",
  },
  {
    name: "turkish shimmy",
    dvd: "4",
    location: " part2",
  },
  {
    name: "shoulder shimmy",
    dvd: "4",
    location: " part2",
  },
  {
    name: "arabic shimmy",
    dvd: "4",
    location: " part2",
  },
  {
    name: "arabic 1-2-3",
    dvd: "4",
    location: " part3",
  },
  {
    name: "arabic hip twist with half turn",
    dvd: "4",
    location: " part3",
  },
  {
    name: "up 2 down 3",
    dvd: "4",
    location: " part3",
  },
  {
    name: "reach and sit",
    dvd: "4",
    location: " part3",
  },
  {
    name: "single bump",
    dvd: "4",
    location: " part3",
  },
  {
    name: "double bump",
    dvd: "4",
    location: " part3",
  },
  {
    name: "arc arms",
    dvd: "4",
    location: " part3",
  },
  {
    name: "camel walk",
    dvd: "4",
    location: " part4",
  },
  {
    name: "circle step",
    dvd: "4",
    location: " part4",
  },
  {
    name: "torso twist",
    dvd: "4",
    location: " part4",
  },
  {
    name: "propellor turn",
    dvd: "4",
    location: " part5",
  },
  {
    name: "corkscrew turn",
    dvd: "4",
    location: " part5",
  },
  {
    name: "posture",
    dvd: "7",
    location: " part1",
  },
  {
    name: "walking taxeem",
    dvd: "7",
    location: " part1",
  },
  {
    name: "single bump",
    dvd: "7",
    location: " part1",
  },
  {
    name: "sunanda",
    dvd: "7",
    location: " part2",
  },
  {
    name: "wrap around turn",
    dvd: "7",
    location: " part2",
  },
  {
    name: "egyptian full turn",
    dvd: "7",
    location: " part2",
  },
  {
    name: "wet dog",
    dvd: "7",
    location: " part2",
  },
  {
    name: "barrel turn",
    dvd: "7",
    location: " part3",
  },
  {
    name: "reshamka",
    dvd: "7",
    location: " part3",
  },
  {
    name: "sahra turn",
    dvd: "7",
    location: " part3",
  },
  {
    name: "chico",
    dvd: "7",
    location: " part3",
  },
  {
    name: "barrel turn",
    dvd: "7",
    location: " part3",
  },
  {
    name: "arabic hip twist",
    dvd: "7",
    location: " part4",
  },
  {
    name: "water pot",
    dvd: "7",
    location: " part4",
  },
  {
    name: "layback",
    dvd: "7",
    location: " part4",
  },
  {
    name: "double back",
    dvd: "7",
    location: " part4",
  },
  {
    name: "spins",
    dvd: "7",
    location: " part5",
  },
  {
    name: "partner spins",
    dvd: "7",
    location: " part5",
  },
  {
    name: "reverse turn",
    dvd: "7",
    location: " part5",
  },
  {
    name: "turkish shimmy with arms and turn",
    dvd: "7",
    location: " part5",
  },
  {
    name: "arabic shimmy with arms and turn",
    dvd: "7",
    location: " part6",
  },
  {
    name: "aswat fade and circle",
    dvd: "7",
    location: " part6",
  },
  {
    name: "ghawazee shimmy combo",
    dvd: "7",
    location: " part6",
  },
  {
    name: "arabic orbit",
    dvd: "7",
    location: " part6",
  },

  {
    name: "turkish shimmy quarter turn",
    dvd: "9",
    location: "devyani p1",
  },
  {
    name: "chico circle",
    dvd: "9",
    location: "devyani p1",
  },
  {
    name: "chico circle diagonal",
    dvd: "9",
    location: "devyani p1",
  },
  {
    name: "choochoo arc",
    dvd: "9",
    location: "devyani p1",
  },
  {
    name: "sunanda duet",
    dvd: "9",
    location: "devyani p1",
  },
  {
    name: "aswat duet",
    dvd: "9",
    location: "devyani p2",
  },
  {
    name: "turkish shimmy cross-over",
    dvd: "9",
    location: "devyani p2",
  },
  {
    name: "wrap around drop",
    dvd: "9",
    location: "devyani p2",
  },
  {
    name: "alabama twister",
    dvd: "9",
    location: "devyani p2",
  },
  {
    name: "duelling duet",
    dvd: "9",
    location: "FCBD part1",
  },
  {
    name: "rush hour",
    dvd: "9",
    location: "FCBD part1",
  },
  {
    name: "reshamka spin",
    dvd: "9",
    location: "FCBD part1",
  },
  {
    name: "level drop",
    dvd: "9",
    location: "FCBD part1",
  },
  {
    name: "duelling duet",
    dvd: "9",
    location: "FCBD part1",
  },
  {
    name: "passing",
    dvd: "9",
    location: "FCBD part2",
  },
  {
    name: "turkish passing",
    dvd: "9",
    location: "FCBD part2",
  },
  {
    name: "camel walk passing",
    dvd: "9",
    location: "FCBD part2",
  },
  {
    name: "camel walk trio",
    dvd: "9",
    location: "FCBD part2",
  },
  {
    name: "chico passing",
    dvd: "9",
    location: "FCBD part2",
  },
  {
    name: "sahra turn passing",
    dvd: "9",
    location: "FCBD part2",
  },
  {
    name: "wrap around turn passing",
    dvd: "9",
    location: "FCBD part2",
  },
  {
    name: "barrel turn passing",
    dvd: "9",
    location: "FCBD part3",
  },
  {
    name: "barrel turn circle",
    dvd: "9",
    location: "FCBD part3",
  },
  {
    name: "turkish duet passing",
    dvd: "9",
    location: "FCBD part3",
  },
  {
    name: "torso twist passing",
    dvd: "9",
    location: "FCBD part3",
  },
  {
    name: "arabic flourish with fade",
    dvd: "9",
    location: "FCBD part3",
  },
  {
    name: "arabic do-si-do",
    dvd: "9",
    location: "FCBD part3",
  },
  {
    name: "box step",
    dvd: "9",
    location: "ghawazi part1",
  },
  {
    name: "push forward and back",
    dvd: "9",
    location: "ghawazi part1",
  },
  {
    name: "push forward and back duet",
    dvd: "9",
    location: "ghawazi part1",
  },
  {
    name: "egyptian sevillana",
    dvd: "9",
    location: "ghawazi part2",
  },
  {
    name: "egyptian sevillana circle",
    dvd: "9",
    location: "ghawazi part2",
  },
  {
    name: "egyptian sevillana duet",
    dvd: "9",
    location: "ghawazi part2",
  },
  {
    name: "triangle step",
    dvd: "9",
    location: "ghawazi part2",
  },
  {
    name: "arabic double spin",
    dvd: "9",
    location: "ghawazi part3",
  },
  {
    name: "pulse turn",
    dvd: "9",
    location: "ghawazi part3",
  },
  {
    name: "rainbow",
    dvd: "9",
    location: "ghawazi part3",
  },
  {
    name: "loco camel",
    dvd: "9",
    location: "ghawazi part4",
  },
  {
    name: "meduza ATS",
    dvd: "9",
    location: "ghawazi part4",
  },
  {
    name: "meduza indian",
    dvd: "9",
    location: "ghawazi part4",
  },
  {
    name: "strong arm1",
    dvd: "9",
    location: "tamarind part1",
  },
  {
    name: "strong arm2",
    dvd: "9",
    location: "tamarind part1",
  },
  {
    name: "strong arm3",
    dvd: "9",
    location: "tamarind part1",
  },
  {
    name: "diagonal",
    dvd: "9",
    location: "tamarind part1",
  },
  {
    name: "roundhouse",
    dvd: "9",
    location: "tamarind part1",
  },
  {
    name: "dragonfly",
    dvd: "9",
    location: "tamarind part2",
  },
  {
    name: "triple egyptian",
    dvd: "9",
    location: "tamarind part2",
  },
];

var listview;
function dvdsinitialize() {
  document.getElementById("promptRefresh").style.visibility = "hidden";

  listview = document.getElementById("listview");
  console.log("initialize");
  input = document.getElementById("input");

  var copys = document.getElementsByClassName("copy");

  var now = new Date();
  var year = addZero(now.getFullYear(), 2);
  var i = 0;

  for (i; i < copys.length; i++) {
    copys[i].innerHTML = "Copyright: " + year;
  }
  myFunction(myJson);
}

function addZero(x, n) {
  if (x.toString().length < n) {
    x = "0" + x;
  }
  return x;
}

/*
var request = new XMLHttpRequest();
request.open("GET", "source.json", true);
request.send(null);
request.onreadystatechange = function() {
  if ( request.readyState === 4 && request.status === 200 ) {
    var myArr = JSON.parse(request.responseText);
    console.log(myArr);
    
    myFunction(myArr);
  }
};
var xmlhttp = new XMLHttpRequest();
*/



// xmlhttp.onreadystatechange = function() {
// 	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
// 		var myArr = JSON.parse(xmlhttp.responseText);

// 		myFunction(myArr);

// 	}
// };

//xmlhttp.open("GET", "dvds.json", true);
//xmlhttp.send();

function closeInfoIfOpen() {
  if (infoWindowOn) {
    hideInfoDiv();
    console.log("closing");
  }
}
function myFunction(arr) {
  var out = "";
  var i;
  for (i = 0; i < arr.length - 1; i++) {
    //var url = arr[i].url;
    //var id = arr[i].id;
    var name = arr[i].name;
    var dvdStr = arr[i].dvd;
    var locationStr = arr[i].location;
    var videoStr = arr[i].video;
    steps.push(new Step(name, dvdStr, locationStr, videoStr));
  }

  input.onkeyup = function () {
    filterByString(input.value.toLowerCase());
  };

  displayList(steps);
}

function displayList(arr) {
  if (listview.childNodes.length != 0) {
    removeChildrenFromNode(listview);
  }
  rows = [];
  console.log(listview.childNodes.length);
  if (arr.length > 0) {
    //document.getElementById("promptRefresh").style.visibility = "hidden";
    document.getElementById("promptRefresh").innerHTML = "";
  } else {
    document.getElementById("promptRefresh").innerHTML =
      "If the list does not appear refresh the page :)";
    //document.getElementById("promptRefresh").style.visibility = "visible";
  }
  for (move in arr) {
    listmove2(arr[move]);
  }
  usedMovesList = arr;
}

function removeChildrenFromNode(element) {
  while (element.firstChild) element.removeChild(element.firstChild);
}

function checkIfAlreadyInArray(element, array) {
  for (index in array) {
    var result = false;
    if (element == array[index].name) {
      result = true;
      break;
    }
  }
  return result;
}

function Step(mName, mDvd, mLocation, mVideo) {
  this.name = mName;
  if (mDvd != null) this.dvd = mDvd;
  this.location = mLocation;
  if (mVideo != null) this.video = mVideo;
}

function DVD(dvdStr) {
  this.name = dvdStr;
  this.option = document.createElement("option");

  this.option.value = this.name;
  this.option.text = dvdStr;
  this.option.id = dvdStr;
}

function sortByAlphabeticalOrderOfStringProperty(array, stringProperty) {
  for (index in array) {
  }

  return array;
}

function listmove2(move) {
  var li = document.createElement("li");
  var moveNameLink = "";
  if (move.dvd)
    moveNameLink = document.createTextNode(
      move.name + " - DVD: " + move.dvd + "  " + move.location
    );
  else
    moveNameLink = document.createTextNode(
      move.name + " - PowHow video: " + move.video + "  "
    );
  li.appendChild(moveNameLink);

  listview.appendChild(li);
  rows.push(li);

  li.setAttribute("class", "movesTabletr");
  if (rows.length % 2 == 0) li.setAttribute("class", "evenTabletr");
  else li.setAttribute("class", "oddTabletr");

  tabletrs.push(li);
}

function listmove(move) {
  // var tr= document.createElement("tr");
  var tds = [];
  var moveNameNode = document.createTextNode(move.name);
  var moveCategoryNode = document.createTextNode(move.category);
  var moveFamilyNode = document.createTextNode(move.family);
  var nodes = [moveNameNode, moveCategoryNode, moveFamilyNode];
  // table= document.getElementById("table");
  var tbody = document.getElementById("tbody");
  //	var tr = table.insertRow(1);
  //	var tr = tbody.insertRow(0);
  //	tbody.setAttribute("height", "200px");

  var tr = document.createElement("tr");

  if (rows.length > 0) tbody.insertBefore(tr, rows[rows.length - 1]);
  else tbody.appendChild(tr);
  rows.push(tr);
  tr.setAttribute("class", "movesTabletr");
  if (rows.length % 2 == 0) tr.setAttribute("class", "evenTabletr");
  else tr.setAttribute("class", "oddTabletr");
  tr.addEventListener("click", function () {
    play(this);
  });
  var i = 0;

  for (i; i < nodes.length; i++) {
    var td = document.createElement("td");
    td.setAttribute("class", "movesTabletd");
    tr.appendChild(td);

    tds.push(td);
    td.appendChild(nodes[i]);
  }

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = false;
  move.checkbox = checkbox;
  var checkboxtd = document.createElement("td");
  checkboxtd.appendChild(checkbox);
  tr.appendChild(checkboxtd);
  tr.style.background = move.colour;
  tabletrs.push(tr);
}

function filterByString(str) {
  var filteredMoves = [];
  var i = 0;
  for (i; i < steps.length; i++) {
    if (steps[i].name.includes(str)) {
      filteredMoves.push(steps[i]);
    }
  }
  displayList(filteredMoves);
}

function closeInfoWindowIfOn() {
  if (infoWindowOn) hideInfoDiv();
}
function toggleInfoWindow() {
  if (infoWindowOn) hideInfoDiv();
  else showInfoDiv();
}
function showInfoDiv() {
  popupInfoWindow = document.getElementById("infodiv").id = "infocenter";

  infoWindowOn = true;
}
function hideInfoDiv() {
  popupInfoWindow = document.getElementById("infocenter").id = "infodiv";
  infoWindowOn = false;
}
