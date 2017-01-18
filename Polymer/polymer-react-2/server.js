var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.static('.'));

app.listen(process.env.PORT || 3000);
