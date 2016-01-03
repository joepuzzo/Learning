<ul>
  <li class="tour" data-loc="london" data-temp="48°">
    London, UK
    <button>More Info</button>
    <div class="results"></div>
  </li>

  <li class="tour" data-loc="paris1" data-temp="55°">
    Paris, France
    <button>More Info</button>
    <div class="results"></div>
  </li>

  <li class="tour" data-loc="newyork1" data-temp="62°">
    New York, NY, USA
    <button>More Info</button>
    <div class="results"></div>
  </li>
</ul>


// Lets disable the button after it has been clicked once
$(document).ready(function(){
  // Get Weather
  $('button').on('click', function() {
    var results = $(this).closest('li').find('.results');
    results.append('<p>Weather: 74&deg;</p>');
    $(this).off('click');
  });
});

$(document).ready(function(){
  // Get Weather
  $('button').on('click.weather', function() {
    var results = $(this).closest('li').find('.results');
    results.append('<p>Weather: 74&deg;</p>');
    $(this).off('click.weather');
  });
  
   // Show Photos
  $('button').on('click.photos', function() {
    var tour = $(this).closest('li');
    var results = tour.find('.results');
    results.append('<p><img src="/assets/photos/'+tour.data('loc')+'.jpg" /></p>');
    $(this).off('click.photos');
  });
});


// This will cause the show weather event to 'trigger' after the photos button has been pressed
$(document).ready(function(){
  // Get Weather
  $('button').on('show.weather', function() {
    var results = $(this).closest('li').find('.results');
    results.append('<p>Weather: 74&deg;</p>');
    $(this).off('click.weather');
  });
  
  // Show Photos
  $('button').on('click.photos', function() {
    var tour = $(this).closest('li');
    var results = tour.find('.results');
    results.append('<p><img src="/assets/photos/'+tour.data('loc')+'.jpg" /></p>');
    $(this).off('click.photos');
    $('button').trigger('show.weather');
  });
});


