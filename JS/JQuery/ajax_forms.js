

$(document).ready(function() {
  // Call submit on form
  $('form').on('submit', function(event) {
    // Prevent page from reloading 
    event.preventDefault();
    //Create an ajax post request
    $.ajax('/book', {
      type: 'POST',
      // Set the data by serializing the form 
      data: $('form').serialize(),
      // Set the callback function to set the html to the response
      success: function(response) { 
        $('.tour').html(response);
        } 
    });
  });
});


$(document).ready(function() {

  // Call submit on form
  $('form').on('submit', function(event) {
    //Prevent page from loading
    event.preventDefault();
    // For code reuse
    var form = $(this);
    // Create an ajax request
    $.ajax(form.attr('action') , {
      // Get the type of request from the method attrubute of the form
      type: form.attr('method'),
      // Serialize the data from the form
      data: form.serialize(),
      // The data type will be json
      // By doing this, jquery will parse out the js object for us!
      dataType: 'json',
      // The content tipe of the message
      contentType: 'application/json'
      // Set the callback function to populate the data using the returned json string
      success: function(response) {
        $('.tour').html('<p></p>')
                  .find('p')
                  .append('Trip to ' + response.description)
                  .append(' at $' + response.price)
                  .append(' for ' + response.nights + ' nights')
                  .append('. Confirmation: ' + response.confirmation);
      }
    });
  });
});

