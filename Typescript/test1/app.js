"use strict";
var express_1 = require("express");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var app = express_1.express();
app.use(cors_1.cors());
app.use(body_parser_1.bodyParser.json());
app.use(body_parser_1.bodyParser.text());
app.listen('8083', function () {
    console.log('Listening on port 8083');
});
