// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

///////////////////////////
// DB setup
mongoose.connect(
    'mongodb://adv-react-user:advPass@ds259325.mlab.com:59325/adv-react-auth', 
    {useMongoClient: true}
)


////////////////////
// App setup
// Getting Express working the way we want

// Any request is going to be passed into these middelware
// app.use registers as middleware
app.use(morgan('combined')); // logging framework
app.use(bodyParser.json({ type: '*/*' })) // parses incoming requests into json
router(app);

///////////////////
// Server setup
// Getting our express app to talk to outside world

const port = process.env.PORT || 3090;
// Create HTTP server that knows how to receive requests
// and anything that comes in is forwarded to our express app
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on ${port}`)