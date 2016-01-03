<div id="tour" data-location="london">
  <button>Get Photos</button>
  <ul class="photos">

  </ul>
</div>

div
var tour = {
  init: function() {
    $("#tour").on("click", "button", this.fetchPhotos );
  },
  fetchPhotos: function() { $.ajax('/photos.html', {
        data: {location: $("#tour").data('location')},
        success: function(response) {
          $('.photos').html(response).fadeIn();
        },
        error: function() {
          $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
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
  
}
$(document).ready(function() { 
  tour.init();
});


