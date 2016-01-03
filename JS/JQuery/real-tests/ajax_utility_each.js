$('button').on('click', function() {
  $.ajax('/resources/deals', {
    success: function(result) {
      // Itterate through each deal class
      var data;
      $.each($('.deal'), function(index, deal) {
        // Set the current deal data 
        data = result[index];
        deal.find('.name').html( data.name );
        deal.find('.price').html( data.price );
      });
    }
  });
});


