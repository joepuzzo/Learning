
<button>Show Deals</button>
<h2>Current Deals</h2>
<div class="deal-0">
  <h3 class="name"></h3>
  <p class="price"></p>
</div>

<div class="deal-1">
  <h3 class="name"></h3>
  <p class="price"></p>
</div>

<div class="deal-2">
  <h3 class="name"></h3>
  <p class="price"></p>
</div>

// Shows off itteration function "$.each" 
$('button').on('click', function() {
  $.ajax('/cities/deals', {
    success: function(result) {
      contentType: 'application/json',
      dataType: 'json', 
      $.each(result, function(index, dealItem) {
        $(".deal-"+index).find('.price').html(dealItem.price);
        $(".deal-"+index).find('.name').html(dealItem.name);
      });
    }
  });
});


// Lets clean up the above code with the getJSON function
$('button').on('click', function() {
  $.getJSON('/cities/deals', function(result) {
      $.each(result, function(index, dealItem) {
        var dealElement = $('.deal-' + index);
        dealElement.find('.name').html(dealItem.name);
        dealElement.find('.price').html(dealItem.price);
      });
  });
});

<button class="update-available-flights">Get Times</button>
<div class="flights">
  <ul class="flight-times">

  </ul>
</div>

$('.update-available-flights').on('click', function() {
  $.getJSON('/flights/late', function(result) {
    // Generate an array of list items with the data from the json
    var flightElements = $.map(result, function(flightItem, index){
      var flightEl = $('<li>'+flightItem.flightNumber+'-'+flightItem.time+'</li>');
      return flightEl;
    });
    // Remove the .flight-times element, set its html, then append it to the .flights div 
    $('.flight-times').detach()
                      .html(flightElements)
                      .appendTo($('.flights'))
  });
}); 

