
function worker(){	
	var first = document.querySelector('#number1');

	//var result = document.querySelector('.result');

	if (window.Worker) { // Check if Browser supports the Worker api.
		// Requires script name as input
		var myWorker = new Worker("minion.js");

		myWorker.postMessage([first.value]);

	// onkeyup could be used instead of onchange if you wanted to update the answer every time
	// an entered value is changed, and you don't want to have to unfocus the field to update its .value
		
		first.onchange = function() {
		   // Sending message as an array to the worker
		   myWorker.postMessage([first.value]);
		  console.log('Message posted to worker');
		};		


		myWorker.onmessage = function(e) {
			document.getElementById("result").value = e.data;
			console.log('Message received from worker');
		};
	}
}
