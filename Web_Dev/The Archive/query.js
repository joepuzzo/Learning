//Connor This is where your javascrit code should go instead of in your header 
//The filename "query" is irrelivent and can be named "horseshit.js if you want"

//I use this function main to start the "program" the line at the bottom gets called after your html file loads
var main = function() {

	//The syntax $('somthing') is how you dereference html elements, classes and id's 
	//You can then call jquery functions on them like mouse enter which gets executed when you hover over the icon
	$('.fade').mouseenter( function(){
		//Its very important to note how I used the "this" keyword
		//This way You can reference all of the icons by one class name i.e fade and only fade one of them
        $(this).fadeTo( 'fade', 0.5 );
    });
    
    $('.fade').mouseleave(function(){
        $(this).fadeTo( 'fade', 1 );
    });
 
};

//This line DEREFERENCES your html file and calls the main function 
$(document).ready(main);

