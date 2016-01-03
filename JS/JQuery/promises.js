<div class="vacation-location">
  <h3 class="location">London, UK</h3>
  <p class="price"></p>
  <button>Update Price</button>
</div>

/*-------------------- Version 1 -----------------------*/

// Define a vacation object this will simply scope the function
// getPrice
var Vacation = {
  getPrice: function(location){
   var promise = $.ajax('/vacation/prices', {
     data: {q: location}
   });

   return promise;
  }
}

// Rather then making the ajax request here
// we use our vaction object!!!
$(document).ready(function() {
  $('button').on('click', function(){
    var location = $('.location').text();
    // Call the getPrice function
    var vaca = Vacation.getPrice(location);
    // Call the promises done function
    vaca.done( function(result) { 
      $('.price').text(result.price);
    });
  });
});


/*-------------------- Version 2 -----------------------*/
// We add success back in to the ajax call and create our 
// own custom promice that forses the done function to 
// return the results price attribute

var Vacation = {
  getPrice: function(location){
   var promise = $.Deferred();
   $.ajax('/vacation/prices', {
     data: {q: location},
     success: function(result) {
       promise.resolve(result.price);
     }
   });

   return promise;
  }
}

$(document).ready(function() {
  $('button').on('click', function(){
    var location = $('.location').text();
    Vacation.getPrice(location).done(function(result){
      $('.price').text(result);
    });
  });
});


/*-------------------- Version 3 -----------------------*/
// Now we handle errors!!!

var Vacation = {
  getPrice: function(location){
    var promise = $.Deferred();
    $.ajax({
      url: '/vacation/prices',
      data: {q: location},
      success: function(result){
        promise.resolve(result.price);
      },
      error: function() { 
        promise.reject("Unable to resolve price"); 
        } 
    });
    return promise;
  }
}

$(document).ready(function() {
  $('button').on('click', function(){
    var location = $('.location').text();
    Vacation.getPrice(location).done(function(result){
      $('.price').text(result);
    }).fail( function(error) {
      console.log(error);
    });
  });
});


/*-------------------- When and Then -----------------------*/
<ul>

<li data-location="london, uk">
  London, UK
  <button>More Info</button>
  <div class="results"></div>
</li>

<li data-location="paris, france">
  Paris, France
  <button>More Info</button>
  <div class="results"></div>
</li>

<li data-location="new york, ny">
  New York, NY
  <button>More Info</button>
  <div class="results"></div>
</li>

</ul>

var Vacation = {
  getPrice: function(location){
    var promise = $.Deferred();
    $.ajax('/vacation/prices', {
      data: {q: location},
      success: function(result){
        promise.resolve(result.price);
      }
    });
    return promise;
  }
}

var Photo = {
  getPhoto: function(location){
    var promise = $.Deferred();
    $.ajax('/vacation/photos', {
      data: {q: location},
      success: function(result){
        promise.resolve(result.url);
      }
    });
    return promise;
  }
}

$(document).ready(function() {
  $('button').on('click', function(){
    var tour = $(this).parent();
    var location = tour.data('location');
    var resultDiv = tour.find('.results').empty();
    $.when( Vacation.getPrice(location), Photo.getPhoto(location) 
    ).then( function( priceResult,photoResult ){       
      $('<p>$'+priceResult+'</p>').appendTo(resultDiv);
      $('<img />').attr('src', photoResult).appendTo(resultDiv);
    });
  });
});


