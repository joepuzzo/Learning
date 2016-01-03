
// Example shows creating a new tour object
// Note the only difference here from using_objects.js is the use of
// a constructor in the object definition 
function Tour(price) {
  console.log("A new Tour was created");
  this.cost = function(nights) { 
    console.log( nights * price );
  }
}
$(document).ready(function() { 
  var tour = new Tour(100);
  tour.cost(4);
});


// Example shows how to pass jquery objects as parameters
function Tour(el) {
    console.log(el);
}
$(document).ready(function() { 
      var paris = new Tour($('#paris'));
});


// Example with complex ajax call 
function Tour(el) {
  this.el = el;  
  this.fetchPhotos = function() { 
    $.ajax('/photos.html', {
      data: {location: $("#tour").data('location')},
      success: function(response) {
        $('.photos').html(response);
      },
      error: function() {
        alert('There was a problem fetching the latest photos. Please try again.')
      },
      timeout: 3000,
      beforeSend: function() {
        $('#tour').addClass('is-fetching');
      },
      complete: function() {
        $('#tour').removeClass('is-fetching');
      }
    });
  }
  // Note, this must be called after the fetch photos is declared.
  // it looks like instance vars and methods act like variable declarations
  el.on('click', 'button', this.fetchPhotos ); 
}
$(document).ready(function() { 
  var paris = new Tour($('#paris'));
});




