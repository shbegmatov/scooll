function youFunction(x) {
  x.classList.toggle("change");
}
messeg.style.display="none";
setInterval(function(){

messeg.style.display="inline-block";
 
 }, 

 10000);



var myVar;

function MyFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}