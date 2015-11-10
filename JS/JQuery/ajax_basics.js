<div id="tour" data-location="london">
  <button>Get Photos</button>
  <ul class="photos">

  </ul>
</div>


// A basic ajax request that will add the response to the  attribute with 
// the photos class
$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $.ajax('/photos.html', {
      success: function(response) {
        $('.photos').html(response).fadeIn();
      }
    });
  });
});

$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $.get('/photos.html', function(response) {
        $('.photos').html(response).fadeIn();
      });
  });
});

// Lets work with some data
$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $.ajax('/photos.html', {
      success: function(response) {
        //TODO can we use this keyword in here? who does he reference
        $('.photos').html(response).fadeIn();
      },
      data: {'location': $('#tour').data('location') }
    });
  });
});

