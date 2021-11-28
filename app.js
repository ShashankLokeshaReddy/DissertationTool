let prot_arr =[];
let suggested_array = [];
var yes = '&#9989;';
var no = '&#10060;';

prot_arr[0] = {name:"Use Case simulation AR", problem:yes, added_value:yes, total_solution:yes, product_characteristics:yes, product_properties:yes, price:yes, usability:no, Revenuemechanics:no, techFeasibility:no, performance:no, hardware:yes, software:yes, human:yes, input_behavior:no, output_behavior:no, design:no, ux:no, service:no, pss:no, pay_in_kind:no, it:no, et:no, mb:no, marketing:no, basic_no:no, int_sol:no, own_mark_perf:no, ext_sol:no, budget:4, time:4, vis_fid:4, aud_fid:3, hap_fid:1, fun_ran:1, fun_lev:5, input_behaviour:"", output_behaviour:"", score:""};
prot_arr[1] = {name:"Use Case simulation VR", problem:yes, added_value:yes, total_solution:yes, product_characteristics:yes, product_properties:yes, price:yes, usability:no, Revenuemechanics:no, techFeasibility:no, performance:no, hardware:yes, software:yes, human:yes, input_behavior:no, output_behavior:no, design:no, ux:no, service:no, pss:no, pay_in_kind:no, it:no, et:no, mb:no, marketing:no, basic_no:no, int_sol:no, own_mark_perf:no, ext_sol:no, budget:4, time:3, vis_fid:4, aud_fid:3, hap_fid:1, fun_ran:1, fun_lev:5, input_behaviour:"", output_behaviour:"", score:""};
prot_arr[2] = {name:"Finite State Machine", problem:no, added_value:no, total_solution:no, product_characteristics:yes, product_properties:yes, price:no, usability:no, Revenuemechanics:no, techFeasibility:yes, performance:yes, hardware:yes, software:yes, human:no, input_behavior:no, output_behavior:no, design:no, ux:no, service:no, pss:no, pay_in_kind:no, it:no, et:no, mb:no, marketing:no, basic_no:no, int_sol:no, own_mark_perf:no, ext_sol:no, budget:3, time:3, vis_fid:1, aud_fid:1, hap_fid:1, fun_ran:5, fun_lev:2, input_behaviour:"", output_behaviour:"", score:""};
prot_arr[3] = {name:"Mechanical Simulation AR", problem:no, added_value:no, total_solution:no, product_characteristics:no, product_properties:no, price:no, usability:no, Revenuemechanics:no, techFeasibility:no, performance:no, hardware:no, software:no, human:no, input_behavior:no, output_behavior:no, design:no, ux:no, service:no, pss:no, pay_in_kind:no, it:no, et:no, mb:no, marketing:no, basic_no:no, int_sol:no, own_mark_perf:no, ext_sol:no, budget:4, time:3, vis_fid:"", aud_fid:"", hap_fid:"", fun_ran:"", fun_lev:"", input_behaviour:"", output_behaviour:"", score:""};
prot_arr[4] = {name:"Computational fluid dynamics", problem:no, added_value:no, total_solution:no, product_characteristics:no, product_properties:no, price:no, usability:no, Revenuemechanics:no, techFeasibility:yes, performance:yes, hardware:no, software:no, human:no, input_behavior:no, output_behavior:no, design:no, ux:no, service:no, pss:no, pay_in_kind:no, it:no, et:no, mb:no, marketing:no, basic_no:no, int_sol:no, own_mark_perf:no, ext_sol:no, budget:3, time:2, vis_fid:"", aud_fid:"", hap_fid:"", fun_ran:"", fun_lev:"", input_behaviour:"", output_behaviour:"", score:""};
prot_arr[5] = {name:"Mixed mock up (half AR half physical)", problem:yes, added_value:yes, total_solution:yes, product_characteristics:yes, product_properties:yes, price:yes, usability:no, Revenuemechanics:no, techFeasibility:no, performance:no, hardware:no, software:no, human:no, input_behavior:no, output_behavior:no, design:no, ux:no, service:no, pss:no, pay_in_kind:no, it:no, et:no, mb:no, marketing:no, basic_no:no, int_sol:no, own_mark_perf:no, ext_sol:no, budget:3, time:3, vis_fid:"", aud_fid:"", hap_fid:"", fun_ran:"", fun_lev:"", input_behaviour:"", output_behaviour:"", score:""};
prot_arr[6] = {name:"Fake landing page", problem:no, added_value:yes, total_solution:yes, product_characteristics:yes, product_properties:yes, price:no, usability:no, Revenuemechanics:no, techFeasibility:no, performance:no, hardware:yes, software:yes, human:yes, input_behavior:no, output_behavior:no, design:yes, ux:yes, service:yes, pss:yes, pay_in_kind:yes, it:yes, et:no, mb:no, marketing:yes, basic_no:yes, int_sol:no, own_mark_perf:no, ext_sol:no, budget:1, time:2, vis_fid:4, aud_fid:1, hap_fid:1, fun_ran:1, fun_lev:5, input_behaviour:1, output_behaviour:1, score:""};

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
  var filters = ["problem", "added_value", "total_solution", "product_characteristics", "product_properties", "price", "usability", "Revenuemechanics",  "techFeasibility", "performance", "hardware", "software", "human", "input_behavior", "output_behavior", "design", "ux", "service", "pss", "pay_in_kind", "it", "et", "mb", "marketing", "basic_no", "int_sol", "own_mark_perf", "ext_sol"];
  var non_filters = ["budget", "time", "vis_fid", "aud_fid", "hap_fid", "fun_ran", "fun_lev", "input_behaviour", "output_behaviour"];

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
      if(document.querySelector(`input[name = ${non_filters[k]}]:checked`)){
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
      else{
        score = score + reward;
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

var textMess = "The suggested prototypes are:";
var node= document.getElementById("container_id");
node.querySelectorAll('*').forEach(n => n.remove());
if (suggested_array.length == 0){
  textMess = "No results found for the selected options!, Please select limited options and try again.";
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
          <tr>
          <td>Acceptance Type</td>
          <td>Problem: ${prot_arr[i].problem}, Added Value: ${prot_arr[i].added_value}, Total Solution: ${prot_arr[i].total_solution}, Characteristic: ${prot_arr[i].product_characteristics}, Property: ${prot_arr[i].product_properties}, Usability: ${prot_arr[i].usability}</td>
          </tr>
          <tr>
          <td>Added Value </td>
          <td>Hardware: ${prot_arr[i].hardware}, Software: ${prot_arr[i].software}, Human: ${prot_arr[i].human}</td>
          </tr>
          <tr>
          <td>Market Service Type</td>
          <td>Payment in kind: ${prot_arr[i].pay_in_kind}, PSS: ${prot_arr[i].pss}, Service: ${prot_arr[i].service}</td>
          </tr>
          <tr>
          <td>Skills available</td>
          <td>Design: ${prot_arr[i].design}, UX: ${prot_arr[i].ux}, IT: ${prot_arr[i].it}, ET: ${prot_arr[i].et}, MB: ${prot_arr[i].mb}, Marketing: ${prot_arr[i].marketing}</td>
          </tr>
          <tr>
          <td>Basics for creation exists</td>
          <td>Not needed: ${prot_arr[i].basic_no}, Internal Solution: ${prot_arr[i].int_sol}, Own Marker performance: ${prot_arr[i].own_mark_perf}, External Solution: ${prot_arr[i].ext_sol}</td>
          </tr>
          <td>Specifications</td>
          <td>Budget: ${prot_arr[i].budget}, Time: ${prot_arr[i].time}, Visual Fidelity: ${prot_arr[i].vis_fid}, Auditory Fidelity: ${prot_arr[i].aud_fid}, Haptic Fidelity: ${prot_arr[i].hap_fid}, Functionality Level:  ${prot_arr[i].fun_lev}, Functionality Range:  ${prot_arr[i].fun_ran}, Input Behaviour: ${prot_arr[i].input_behaviour}, Output Behaviour:  ${prot_arr[i].output_behaviour}</td>
          </tr>
          </table>`;
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
