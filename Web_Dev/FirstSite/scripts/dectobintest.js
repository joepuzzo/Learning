var work = "<table style='margin:auto'>";    

var hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

//Petarr Note: only thing diff is decTextField name! 

function calculate() {
	
	//Recreate work each time 
	work = "<table style='margin:auto'>";
	
	// Error checking for input
	var data = document.getElementById('decTextField').value;
	    if (data.length == 0) {
	        alert('Please Enter Data ');
	        return;
	    } else if (Math.round(data) != data) {
	        alert("Variable is not an integer!");
	        return;
	    }
	    
	
	//var answer = buildBin( data, 0 ); 
	
	var answer = convert( 12345, 0, 16 ); 
		
	work = work +  "</table>" + "Ansewr:" + answer; 
	var title = document.getElementById('work') ;
	    title.innerHTML = work;
    
    console.log("The answer is: " + answer );
}


/**
*Recursivly Any Base numer
*
* Remember: we need to take remainder of each division and 
* build it back up in reverse
*/
function convert( data, index, base ) {
    
	var cur = 0; 
		
	//Base Case: The variable is zero we are at the end
	if( data === 0  )
	{
		work += '<tr><td>' + '0' + ' x'+ base + '^' + index + '</td></tr>'; 
		return '0'; 
	}
	
	//Base Case: The variable is zero we are at the end
	if( data === 1 )
	{
		work += '<tr><td>' + '1' + ' x'+ base + '^' + index + '</td></tr>'; 
		return '1'; 
	}
	
	//Divide the current value by the base and store remainder
	cur = data % base; 
	
	//BuildUpWork
	work += '<tr><td>' + cur + ' x'+ base + '^' + index +  '</td></tr>'; 
	
	//Recurce with data/2
	console.log("The cur# is: " + Math.floor( data/base ) ); 
	
	return convert( Math.floor( data/base ), ++index, base ) + hex[cur];  
	
}








