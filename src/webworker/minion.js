onmessage = function(e) {
 	console.log('Message received from main script');
  
    var total = 0;
	var num = e.data[0];

	for (var i = 0; i < num; i++) {
	  total = total + i;            
	}

	console.log('Resultado: ' + total);
  	postMessage(total);
}