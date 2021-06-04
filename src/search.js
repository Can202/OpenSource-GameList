
function nothing(){
	console.log("nothing here");
}
function searchvar(){
	var searchVar = document.getElementById("search").value;
	window.find(searchVar);
}
function clickPress(event) {
	if (event.keyCode == 13) {
	    searchvar();
		event.preventDefault() = nothing();
	}
}
document.write('<article class="searchbutc">');
document.write('<form>');
document.write('<input id="search" onkeypress="clickPress(event)" >');
document.write('<button type="button" id = "butclick" onClick="searchvar()">Search</button>');
document.write('</form>');
document.write('</article>');