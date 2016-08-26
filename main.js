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

//function to hide recomendation on load
