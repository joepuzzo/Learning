
<div id="tour" data-location="london">
  <button>Get Photos</button>
  <ul class="photos">

  </ul>
</div>

$(document).ready(function() {
  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
      error: function(request, errorType, errorMessage) {
            el.find('.photos').html('<li> Error: ' + errorType + ' with message: ' + errorMessage + '</li>');
            }
    });
  });
});

// Add a time out and a before and after style that will uccor while loading!
$(document).ready(function() {
  function showPhotos() {
    $(this).find('span').slideToggle();
  }
  $('.photos li').on('mouseenter', showPhotos)
                 .on('mouseleave', showPhotos);


  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
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
  });
});


// Fix issue with element not existing until ajax request occurs
$(document).ready(function() {
  function showPhotos() {
    $(this).find('span').slideToggle();
  }

  // Old method
  /*$('.photos li').on('mouseenter', showPhotos)
                 .on('mouseleave', showPhotos);*/
    $('.photos').on('mouseenter','li', showPhotos)
                 .on('mouseleave','li', showPhotos);*/


  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
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
  });
});


