// Código javascript console.log("isOnline?: " + navigator.onLine)
function updateStatus(event) 
{  
	if (navigator.onLine) {
		document.getElementById("connect").style.display = "flex";
		document.getElementById("disconnect").style.display = "none";
	}
	else{
		document.getElementById("connect").style.display = "none";
		document.getElementById("disconnect").style.display = "flex";
	}
	
	console.log("isOnline?: " + navigator.onLine) 
}

window.addEventListener('online',  updateStatus, false); 
window.addEventListener('offline', updateStatus, false);

window.addEventListener('load', updateStatus, false)