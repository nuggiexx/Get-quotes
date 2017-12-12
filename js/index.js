$('#tweet').hide();

var quoteURL = 'https://talaikis.com/api/quotes/random/';

var quoteClick = function quoteClick() {
  $.getJSON(quoteURL, function (data) {
    $('#box').html('<p><img src=\'https://www.northernhonda.com/wp-content/uploads/sites/109/2016/09/quotation-marks-left-300x241.png\' class=\'quote-img\'>  ' + data.quote + '  <img src=\'http://averising.com/wp-content/uploads/2015/06/quotation-marks-right-300x241.png\' class=\'quote-img\'></p><p>- ' + data.author + '</p>');
    $('#tweet-link').attr('href', 'https://twitter.com/intent/tweet?text=' + data.quote + ' -' + data.author);
  }).fail(function (error) {
    $('#box').text("Quote cannot be retrieved");
  });

  // Show tweet after getting quote
  $('#tweet').show();
};