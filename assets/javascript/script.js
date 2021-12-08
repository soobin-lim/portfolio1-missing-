// Assign clcik function to each portfolios
var portfolio1 = document.getElementById('portfolio1');
portfolio1.addEventListener('click', function(){
  window.open('https://marcotorr.github.io/First_Project/')
})
var portfolio2 = document.getElementById('portfolio2');
portfolio2.addEventListener('click', function(){
  window.open('https://soobin-lim.github.io/homework4/')
})
var portfolio3 = document.getElementById('portfolio3');
portfolio3.addEventListener('click', function(){
  window.open('https://soobin-lim.github.io/homework3/')
})

// Modal code below
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

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
