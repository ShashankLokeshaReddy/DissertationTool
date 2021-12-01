let prot_arr =[];
let suggested_array = [];
var yes = '&#9989;';
var no = '&#10060;';

prot_arr[0] = {Cluster:"Virtuelle_nicht_funktionale_Gestalt", name:"Mixed mock up (halb AR halb physisch)", Beschreibung:"<p>Beschreibung:</p> Ein mixed Mockup ist ein realistisches visuelles Design, das dem Aussehen des Endproduktes sehr nah kommt. Es enthält im Gegensatz zum Wireframe visuelle Elemente, einschließlich Grafiken, Layout, Farben und andere detailliertere visuelle Darstellungen. Bis zu einem gewissen Grad soll es optisch schon dem Endprodukt entsprechen. Bei dem mixed Mockup werden via AR Technologie notwendige Bauteile oder Werkzeuge, die noch in der Entwicklung und daher im ständigen Wandel sind, auf ein physisches Mockup, bspw aus Pappe, projeziert. Dies hat den Vorteil, dass das AR Bauteil immer wieder schnell angepasst werden kann, ohne große Kosten zu verursachen. Durch entsprechende Technik, wie AR Handschuhe, kann der Nutzer auch mit dem Bauteil interagieren.", VorgehenzurErstellung:"<p>VorgehenzurErstellung:</p> Die festen, vorhandenen Gegebenheiten werden in Form eines physischen Mockups gebaut. Hierfür kann zm Beispiel Pappe, Holz, Plastik oder andere Stoffe genutzt werden. Im Anschluss wird mithilfe von AR Technologie das noch in der Entwicklung steckende Teil auf das physische Mockup projeziert", BestPractice:"", Bilder:"images/prototypes/Mixedmockup.JPG", Tools:"images/prototypes/MixedmockupTools.JPG", Rel_Kosten:3, time:3, Problem:yes, Mehrwehrt:yes, Gesamtlösung:yes, Produktmerkmale:yes, Produkteigenschaften:yes, Preis:yes, Usability:yes, Erlösmechanik:no, technMachbarkeit:no, Leistungserbringung:no, vis_fid:5, aud_fid:4, hap_fid:[3,4,5], hardware:yes, software:yes, human:no, Funktionstiefe:4, Funktionsumfang:4, Eingabeverhalten:4, Ausgabeverhalten:3, design:yes, ux:yes, it:yes, et:yes, mb:yes, BusinessAnalysis:no, marketing:no, sachleistung:yes, pss:no, Dienstleistung:no, basic_no:yes, int_sol:no, own_mark_perf:no, ext_sol:no, PrototypeKombionations_Empfehlenswert:"", PrototypeKombionations_Möglich:"", MethodKombionations_Empfehlenswert:"", MethodKombionations_Möglich:"", Quellen:"", score:""};

window.onscroll = function() {myFunction()};

var header = document.getElementById("table1");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function myProt() {
    var prot = document.getElementById("protDIV");
    prot.style.display = "block";
  }
  
function myMeth() {
    var prot = document.getElementById("protDIV");
    prot.style.display = "none";
  }

// Prototypes.js
function filterSelection(c) {

if (c == "submit") {
  var a_t_options = document.getElementById('acceptance_type').selectedOptions;
  var a_t = Array.from(a_t_options).map(({ value }) => value);
  var a_v_options = document.getElementById('added_value').selectedOptions;
  var a_v = Array.from(a_v_options).map(({ value }) => value);
  var mst_options = document.getElementById('market_service_type').selectedOptions;
  var mst = Array.from(mst_options).map(({ value }) => value);
  var ts_options = document.getElementById('team_skills').selectedOptions;
  var ts = Array.from(ts_options).map(({ value }) => value);
  var bas_options = document.getElementById('basics').selectedOptions;
  var bas = Array.from(bas_options).map(({ value }) => value);
  var arr_values = [].concat(a_t , a_v , mst , ts , bas); 
  var filters = ["Problem", "Mehrwehrt", "Gesamtlösung", "Produktmerkmale", "Produkteigenschaften", "Preis", "Usability", "Erlösmechanik",  "technMachbarkeit", "Leistungserbringung", "hardware", "software", "human", "sachleistung", "pss", "Dienstleistung", "design", "ux", "it", "et", "mb", "BusinessAnalysis", "marketing", "basic_no", "int_sol", "own_mark_perf", "ext_sol"];
  var non_filters = ["Rel_Kosten", "time", "vis_fid", "aud_fid", "hap_fid", "Funktionstiefe", "Funktionsumfang", "Eingabeverhalten", "Ausgabeverhalten"];

  for (i = 0; i < prot_arr.length; i++) {
    score = 0;
    reward = 10;
    penalty = -10000;
    for (k = 0; k < filters.length; k++) {
      if(prot_arr[i][filters[k]] == no && arr_values.includes(filters[k])){
        score = score + penalty;
      }
      else{
        score = score + reward;
      }
    }

    for (k = 0; k < non_filters.length; k++) {
      if(document.querySelector(`input[name = ${non_filters[k]}]:checked`) && Array.isArray(prot_arr[i][non_filters[k]]) == false){
        if(prot_arr[i][non_filters[k]] == document.querySelector(`input[name = ${non_filters[k]}]:checked`).value){
          score = score + reward; // full reward
        }
        else if((prot_arr[i][non_filters[k]] - 1 == document.querySelector(`input[name = ${non_filters[k]}]:checked`).value) || (prot_arr[i][non_filters[k]] + 1 == document.querySelector(`input[name = ${non_filters[k]}]:checked`).value)){
          score = score + (reward / 2); // half reward
        }
        else{
          score = score + penalty; // penalty
        }
      }
      else if(! document.querySelector(`input[name = ${non_filters[k]}]:checked`)){
        score = score + reward;
      }
      else{
        for (l = 0; l < document.querySelector(`input[name = ${non_filters[k]}]`).length; l++) {
          if(prot_arr[i][non_filters[k]][l] == document.querySelector(`input[name = ${non_filters[k]}]:checked`).value){
            score = score + reward;
          }
        }
      }

    }

    prot_arr[i].score = score;
  }
}

sorted_array = prot_arr.sort(function (a, b) {
  return b.score - a.score;
});

suggested_array = [];
for (i = 0; i < sorted_array.length; i++) {
  if (sorted_array[i].score > 0){
    suggested_array.push(sorted_array[i]);
  }
}
console.log("suggested_array",sorted_array);
console.log("Filters selected",arr_values);

var textMess = "Die vorgeschlagenen Prototypen sind:";
var node= document.getElementById("container_id");
node.querySelectorAll('*').forEach(n => n.remove());
if (suggested_array.length == 0){
  textMess = "Für die von Ihnen ausgewählten Optionen wurden keine Ergebnisse gefunden! Bitte wählen Sie eingeschränkte Optionen aus und versuchen Sie es erneut.";
}
else{
  for (i = 0; i < suggested_array.length; i++) {
    let div = document.createElement("div");
    div.style.float= "left";
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "black";
    div.style.color = "white";
    div.style.margin= "2px";
    // create the button object and add the text to it
    let button = document.createElement("BUTTON");
    button.innerHTML = `${suggested_array[i].name}`;
    button.id = "protpopupBtn";
    button.style.background = "transparent";
    button.style.color = "white";
    button.style.background.repeat = "no-repeat";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.overflow = "hidden";
    button.style.outline = "none";
    button.onclick = function() {
      modal.style.display = "block";
      for(var i = 0; i < prot_arr.length; i++){
      if (button.innerHTML == prot_arr[i].name){
      modal_text.innerHTML = `<h1 style="text-align:center">${prot_arr[i].name}</h1>
          <table>
          <tr style="font-size:10px;">
          <td>${prot_arr[i].Beschreibung}</td>
          <td>${prot_arr[i].VorgehenzurErstellung}</td>
          <td>${prot_arr[i].BestPractice}</td>
          <td><img src=${prot_arr[i].Bilder} width="200" height="200"></td>
          <td><img src=${prot_arr[i].Tools} width="200" height="200"></td>
          </tr>

          <table>
          <tr>
          <td>Annahmetyp</td>
          <td>Problem:${prot_arr[i].Problem}, Mehrwehrt:${prot_arr[i].Mehrwehrt}, Gesamtlösung:${prot_arr[i].Gesamtlösung}, Produktmerkmale:${prot_arr[i].Produktmerkmale}, Produkteigenschaften:${prot_arr[i].Produkteigenschaften}, Preis:${prot_arr[i].Preis}, Usability:${prot_arr[i].Usability},  Erlösmechanik:${prot_arr[i].Erlösmechanik}, Techn. Machbarkeit:${prot_arr[i].technMachbarkeit}, Leistungserbringung:${prot_arr[i].Leistungserbringung} </td>
          </tr>
          <tr>
          <td>Wertschöpfung</td>
          <td>Hardware:${prot_arr[i].hardware}, Software:${prot_arr[i].software}, Mensch:${prot_arr[i].human}</td>
          </tr>
          <tr>
          <td>Marktleistungstyp</td>
          <td>Sachleistung:${prot_arr[i].sachleistung}, PSS:${prot_arr[i].pss}, Dienstleistung:${prot_arr[i].Dienstleistung}</td>
          </tr>
          <tr>
          <td>Kompetenzen</td>
          <td>Design:${prot_arr[i].design}, UX:${prot_arr[i].ux}, IT:${prot_arr[i].it}, ET:${prot_arr[i].et}, MB:${prot_arr[i].mb}, BusinessAnalysis:${prot_arr[i].BusinessAnalysis}, Marketing:${prot_arr[i].marketing}</td>
          </tr>
          <tr>
          <td>Grundlage</td>
          <td>Keine:${prot_arr[i].basic_no}, Bestehende interne Lösung:${prot_arr[i].int_sol}, Bestehendes eigenes Produkt:${prot_arr[i].own_mark_perf}, Bestehende externe Lösung:${prot_arr[i].ext_sol}</td>
          </tr>
          <td>Spezifikationen</td>
          <td>Relativ Kosten:${prot_arr[i].Rel_Kosten}, Set Up Time:${prot_arr[i].time}, Visuelle Wiedergabetreue:${prot_arr[i].vis_fid}, Auditive Wiedergabetreue:${prot_arr[i].aud_fid}, Haptische Wiedergabetreue:${prot_arr[i].hap_fid}, Funktionstiefe:${prot_arr[i].Funktionstiefe}, Funktionsumfang:${prot_arr[i].Funktionsumfang}, Eingabeverhalten:${prot_arr[i].Eingabeverhalten}, Ausgabeverhalten:${prot_arr[i].Ausgabeverhalten}</td>
          </tr>
          </table>
          
          <table>
          <tr>
          <td>Prototyp-Kombinationen</td>
          <td>Empfehlenswert:${prot_arr[i].PrototypeKombionations_Empfehlenswert}, Kombination möglich: ${prot_arr[i].PrototypeKombionations_Möglich}</td>
          </tr>
          <tr>
          <td>Methoden-Kombinationen</td>
          <td>Empfehlenswert:${prot_arr[i].MethodKombionations_Empfehlenswert}, Kombination möglich: ${prot_arr[i].MethodKombionations_Möglich}</td>
          </tr>
          <tr>
          <td>Quellen:${prot_arr[i].Quellen}</td>
          </tr>
          </table>
          `;
      }
      }
    }

    // add the button to the div
    div.appendChild(button);
    //div.innerHTML = `<button style="text-align:center">${suggested_array[i].name}</button>`;
    document.getElementById("container_id").appendChild(div);
  }
}
document.getElementById('Proto_message').innerHTML  = textMess;
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
});
}

//clear all prototype filters
function clearallprotypes(){
  document.getElementById('Proto_message').innerHTML  = "";
  var node= document.getElementById("container_id");
  node.querySelectorAll('*').forEach(n => n.remove());
  proto_selections = ["acceptance_type", "added_value", "market_service_type", "team_skills", "basics"];
  proto_checked = ["budget", "time", "vis_fid", "aud_fid", "hap_fid", "fun_ran", "fun_lev", "input_behaviour", "output_behaviour"];
  for (var a = 0; a < proto_selections.length; a++) 
  {
  var elements = document.getElementById(proto_selections[a]).options;
    for(var i = 0; i < elements.length; i++){
      if(elements[i].selected)
	    elements[i].selected = false;
    }
  }

  for (var a = 0; a < proto_checked.length; a++) 
  {
    if(document.querySelector(`input[name = ${proto_checked[a]}]:checked`)){
      var radio = document.querySelector(`input[name = ${proto_checked[a]}]:checked`);
      radio.checked = false;
    }
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

let modal_text = document.getElementById("modal-text");
let protpopupBtn = document.getElementById("protpopupBtn");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
