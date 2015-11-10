

<div id="tour">
  <h2>Paris, France Tour</h2>
  <p>$2,499 for 7 Nights</p>
  <button>See photos from our last tour</button>
  <ul class="photos">
    <li>
      <img src="/assets/photos/paris1.jpg">
      <span>Arc de Triomphe</span>
    </li>
    <li>
      <img src="/assets/photos/paris2.jpg">
      <span>The Eiffel Tower</span>
    </li>
    <li>
      <img src="/assets/photos/paris3.jpg">
      <span>Notre Dame de Paris</span>
    </li>
  </ul>
</div>

$(document).ready(function() {
  $('#tour').on('click', 'button', function() {
    $('.photos').slideToggle();
  });
  $('.photos').on('mouseenter', 'li', showPhotos);
  $('.photos').on('mouseleave', 'li', showPhotos);
});

function showPhotos(){
      $(this).find('span').slideToggle();
}


<div class="tour" data-daily-price="357">
  <h2>Paris, France Tour</h2>
  <p>$<span id="total">2,499</span> for <span id="nights-count">7</span> Nights</p>
  <p>
    <label for="nights">Number of Nights</label>
  </p>
  <p>
    <input type="number" id="nights" value="7">
  </p>
</div>

$(document).ready(function() {
  $('#nights').on('keyup', function() {
    var count = +$(this).val();
    var daily = +$(this).closest('.tour').data('daily-price');
    var total = count * daily; 
    $('#nights-count').text(count);
    $(this).closest('#total').text(total);
  });
});

