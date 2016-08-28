//function to set <span> to equal the flavor clicked.
//and to show the corresponding instructions.
var flavor = document.getElementsByClassName('flavor');
var brew = document.getElementById('brew');
var changes = document.getElementById('changes');
for(i = 0; i<flavor.length; i++) {
  flavor[i].addEventListener('click', function() {

    brew.textContent = this.id;
    switch(this.id) {
      case "strong":
        changes.textContent = "You need less coffee in your next brew. Either increase your water weight, or reduce your coffee dose"
        break;
      case "overwhelming":
      case "dry":
        changes.textContent = "You need to extract less coffee during your next brew. Use a coarser grind and/or a shorter brew time."
        break;
      case "bitter":
      case "over-extracted":
      case "astringent":
      case "muted":
        changes.textContent = "You need to use more coffee and extract less of it for your next brew. Either reduce your water weight, or increase your coffee dose, and simultaneously, use a coarser grind and/or a shorter brew time."
        break;
      case "weak":
        changes.textContent = "You need to use more coffee for your next brew. Either reduce your water weight, or increase your coffee dose."
        break;
      case "tea-like":
      case "vegetal":
      case "sour":
        changes.textContent = "You need to extract more coffee during your next brew. Use a finer grind and/or a shorter brew time."
        break;
      case "under-extracted":
      case "dull":
      case "beefy":
      case "soupy":
        changes.textContent = "You need to use less coffee and extract more of it for your next brew. Either increase your water weight, or reduce your coffee dose, and simultaneously, use a coarser grind and/or a shorter brew time."
        break;

    }



  });
}

//functions to hide recommendation on load and show on click
//function hide() {
  //document.getElementById('show').id = 'hide';
//}
function show() {
  if (document.getElementById('hide')) {
    document.getElementById('hide').id = 'show';
  }

}
//window.onload = hide;
for(i = 0; i<flavor.length; i++) {
  flavor[i].addEventListener('click', show);
}

//functions for saving to localStorage and drop down menu
window.onload = function() {
  function hide() {
    document.getElementById('show').id = 'hide';
  }

  submit.onclick = save;
  function save() {
    var submit = document.getElementById('submit');
    var origin = document.getElementById("origin").value;
    var dose = document.getElementById("dose").value;
    var waterWeight = document.getElementById("waterWeight").value;
    var time = document.getElementById("time").value;
    var values = [dose, waterWeight, time];
    localStorage.setItem(origin, JSON.stringify(values));

  }
  function createDrop() {

    var select = document.getElementById('select');
    var keys = [];

    for (var i = 0; i < localStorage.length; i++) {
      keys.push(localStorage.key(i));
      }
      for (var val in keys) {
        var newDrop = document.createElement('option');
        newDrop.innerText = keys[val];
        newDrop.setAttribute('value', localStorage.key(val));
        select.appendChild(newDrop);
        }
      }
      createDrop();
      hide();
      //functions for dispalying saved recipes
      var select = document.getElementById('select');
      var originH3 = document.getElementById('originSave');
      var doseH3 = document.getElementById('doseSave');
      var waterWeightH3 = document.getElementById('waterWeightSave');
      var timeH3 = document.getElementById('timeSave');


      select.onchange = function() {
        var choice = document.getElementById('select').value;
        originH3.textContent = "Origin: " + choice;
        var values = JSON.parse(localStorage.getItem(choice));
        doseH3.textContent = "Dose: " + values[0];
        waterWeightH3.textContent = "Water weight: " + values[1];
        timeH3.textContent = "Time: " + values[2];
      }

    }
