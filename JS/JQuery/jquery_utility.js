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

$('button').on('click', function() {
  $.ajax('/cities/deals', {
    success: function(result) {
      $.each( result, function( index, value ){
        console.log(value);
      })
    }
  });
});

