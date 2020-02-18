let express = require('express');
let request = require('request');
let querystring = require('querystring');

let app = express();

let redirect_uri =
    process.env.REDIRECT_URL ||
    'http://localhost:8888/callback'

app.get('/login', function (req, res, next) {
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: process.env.SPOTIFY_CLIENT_ID,
            scope:'user-read-private user-read-email',
            redirect_uri
        }))
})
