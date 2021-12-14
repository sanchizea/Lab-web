alert("Hello JavaScript");

window.onload = function() {
	var timeNode = document.getElementById('time');
    function getCurrentTimeString() {
    return new Date().toTimeString().replace(/ .*/, '');
   }
 
   setInterval(
   	() => timeNode.innerHTML = getCurrentTimeString(),
    1000
   );
 }