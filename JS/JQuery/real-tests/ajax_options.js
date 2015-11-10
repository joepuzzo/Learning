
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

