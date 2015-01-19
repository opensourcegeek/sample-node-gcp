var appengine = require('appengine'),
    express = require('express'),
    gcloud  = require('gcloud');

var app = express();

app.use(appengine.middleware.base);

// hooks for google app engine to our application
app.get('/_ah/health', function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.send(200, 'ok');
});

app.get('/_ah/start', function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.send(200, 'ok');
});

app.get('/_ah/stop', function(req, res) {
    res.set('Content-Type', 'text/plain');
    res.send(200, 'ok');
    // should there be any cleanups???
    process.exit();
});

app.get('/greet', function(req, res) {
    res.send('Google says hooo-hah!');
});

app.listen(8080, '0.0.0.0');
console.log('Listening on port 8080');
