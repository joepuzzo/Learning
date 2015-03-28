//This is old and shitty code. 
//TODO Rather than this global I should manipulate using jquery
var work = "<table style='margin:auto'>";    

var hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

/**
 * This function was originally wrietten by Peter Franchina.
 * I took his initial iterative solution to the dec2bin and created a generic recursive
 * solution and a solution that will work with any base ( currently only Hex and Dec )
 */
function calculate() {
	
	//Recreate work each time 
	work = "<table style='margin:auto'>";
	
	// Error checking for input
	//TODO var data = $(#decTextField).val()
	var data = document.getElementById('decTextField').value;
	
    if (data.length == 0) {
        alert('Please Enter Data ');
        return;
    } 
    
    //Split the value to its Integer and Fractional components
    var integer  = Math.floor( data );
    var fraction = data - integer;      
    
    /*else if (Math.round(data) != data) {
        alert("Variable is not an integer!");
        return;
    }*/
    
	var prefix = convert_int( integer, 0, 2 ); 
    var suffix = convert_fract( fraction, 0, 2, 6 ); 
	
	answer = prefix + "." + suffix; 
		
	work = work +  "</table>" + "Answer:" + answer; 
	var title = document.getElementById('work') ;
	    title.innerHTML = work;

}


/**
*Recursivly Build Bianary numer
*
* Remember: we need to take remainder of each division and 
* build it back up in reverse
*/
function buildBin( data, index ) {
	
	var cur = 0; 
		
	//Base Case: The variable is zero we are at the end
	if( data === 0 )
	{
		work += '<tr><td>' + '0' + ' x 2^' + index + '</td></tr>'; 
		return '0'; 
	}
	
	//Base Case: The variable is zero we are at the end
	if( data === 1 )
	{
		work += '<tr><td>' + '1' + ' x 2^' + index + '</td></tr>'; 
		return '1'; 
	}
	
	//Divide the current value by two and store remainder
	cur = data % 2;
	
	//BuildUpWork
	work += '<tr><td>' + cur + ' x 2^' + index + '</td></tr>'; 
	
	//Recurce with data/2
	return buildBin( Math.floor( data/2 ), ++index ) + cur;  
	
}


/**
* Recursivly Any Base numer
*
* Remember: we need to take remainder of each division and 
* build it back up in reverse
*
* TODO.. Rather than building up the table using the method below
* it will be more apropriate to build the varying data fields
* using a data structure and then appending the new tablrows to
* an existing element using jquery's $(elem).append(items...) 
* or rather the .after() elem to insert the whole table dynamically
*/
function convert_int( data, index, base ) {
    
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
	//console.log("The cur# is: " + Math.floor( data/base ) ); 
	
	return convert_int( Math.floor( data/base ), ++index, base ) + hex[cur] ;  
	
}

function convert_fract( data, index, base, accuracy ) {
    
	var cur = 0; 

	//Base Case: The variable is zero we are at the end
	if( data === 0.0 || index === accuracy )
	{
		work += '<tr><td>' + '0' + ' x'+ base + '^-' + index + '</td></tr>'; 
		return '0'; 
	}
	
	//Divide the current value by the base and store integer part
	cur = data * base; 
	
	//BuildUpWork
	work += '<tr><td>' + Math.floor(cur) + ' x'+ base + '^-' + index +  '</td></tr>'; 
	
	//Recurce
	var newData = Math.floor( cur );
	var fract = cur - newData; 
	//console.log("The cur# is: " +  data * base + " Passing down: " + fract ); 

	return hex[newData] + convert_fract( fract , ++index, base, accuracy );  
	
}







