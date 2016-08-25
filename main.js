//function to set <span> to equal the flavor clicked.
//and to show the corresponding instructions.
var flavor = document.getElementsByClassName('flavor');
var brew = document.getElementById('brew');
//console.log(flavor);
for(i = 0; i<flavor.length; i++) {
  flavor[i].addEventListener('click', function() {
    //alert(this.id);
    brew.textContent = this.id;
    


  });
}
