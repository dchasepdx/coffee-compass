//function to set <span> to equal the flavor clicked. And to show the corresponding instructions.
var flavor = document.getElementsByClassName('flavor');
var brew = document.getElementById('brew');
var changes = document.getElementById('changes');
for(i = 0; i<flavor.length; i++) {
  flavor[i].addEventListener('click', function() {
    //sets brew and changes <span> to the correct flavor and recommendation
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

//function to show recommendation on click

for(i = 0; i<flavor.length; i++) {
  flavor[i].addEventListener('click', show);
}

function show() {
  if (document.getElementById('hide')) {
    document.getElementById('hide').id = 'show';
  }

}



/*functions for saving to localStorage and drop down menu.
Needed to be in windows.onload becuase many dynamically created elements weren't
loaded before functions ran resulting in null and undefined variables*/
window.onload = function() {

  //localStorage
  submit.onclick = save;
  function save() {
    var submit = document.getElementById('submit');
    var origin = document.getElementById("origin").value;
    var dose = document.getElementById("dose").value;
    var waterWeight = document.getElementById("waterWeight").value;
    var time = document.getElementById("time").value;
    var values = [dose, waterWeight, time];//saved value as array to access by index
    if (origin && dose && waterWeight && time) {
      localStorage.setItem(origin, JSON.stringify(values));
    }
    else {
      alert("Please fill in all fields");
    }

  }
  //creating dropdown menu. Had to be in onload function because localStorage was loading after variables were assigned

  function createDrop() {

    var select = document.getElementById('select');
    var keys = [];//set keys to array for looping and attaching <option> tag.

    for (var i = 0; i < localStorage.length; i++) { //loop to push LS keys to array
      keys.push(localStorage.key(i));
      }
      for (var val in keys) {     //loop to create <option> tag for each key
        var newDrop = document.createElement('option');
        newDrop.innerText = keys[val];
        newDrop.setAttribute('value', localStorage.key(val));
        select.appendChild(newDrop);
        }
      }
      if(localStorage.length > 0){
      createDrop();
    }
      //functions for dispalying saved recipes
      var select = document.getElementById('select');
      var originH3 = document.getElementById('originSave');
      var doseH3 = document.getElementById('doseSave');
      var waterWeightH3 = document.getElementById('waterWeightSave');
      var timeH3 = document.getElementById('timeSave');
      var values = JSON.parse(localStorage.getItem(select.value));
      //sets a saved brew on page load. Important if there's only 1 saved brew. Cannot trigger change event if there's only one option in the menu. Try and think of less redundant way to do this. same code exists in the onchange event handler.
      if (localStorage.length > 0) {
        originH3.textContent = "Origin: " + document.getElementById('select').value;
        doseH3.textContent = "Dose: " + values[0];
        waterWeightH3.textContent = "Water weight: " + values[1];
        timeH3.textContent = "Time: " + values[2];

      //function for changing saved brew text content on change of dropdown. needs to be in onload function for proper variable assignment.
        select.onchange = function() {
          var choice = document.getElementById('select').value;
          var values = JSON.parse(localStorage.getItem(choice));
          originH3.textContent = "Origin: " + choice;
          doseH3.textContent = "Dose: " + values[0];
          waterWeightH3.textContent = "Water weight: " + values[1];
          timeH3.textContent = "Time: " + values[2];
        }
      }

    }
