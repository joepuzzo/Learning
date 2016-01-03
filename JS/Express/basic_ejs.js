<h2>Quote by <%=name%></h2>

<blockquote>
  <%=quote%>
</blockquote>

var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(req, res) {
  // Get the name from the get request
  var name = req.params.name;
  // Get the quote from the quotes object
  var quote = quotes[name];
  // Literally adding local variables to the response
  res.locals = {name: name, quote: quote};
  // Telling the response what to render.. still a little to majical for me ..
  res.render('quote.ejs');
});

app.listen(8080);

