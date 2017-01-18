import { express } from 'express';
import { cors } from 'cors';
import { bodyParser } from 'body-parser';

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.text());

app.listen('8083', function() {
  console.log('Listening on port 8083');
})
