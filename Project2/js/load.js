var load;
function loadpage() {
  load = setTimeout(showPage, 1500);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
