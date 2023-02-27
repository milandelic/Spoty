const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '31c01fe756f941fcb8117c46079bd23e',
        clientSecret: 'b00b94a3c9e84c53b96b2c70dd1b488a'
    });

    spotifyApi.clientCredentialsGrant()
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in
            });
        }).catch((err) => {
            res.sendStatus(400);
        });
});

app.post('/refresh', (req, res) => {
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '31c01fe756f941fcb8117c46079bd23e',
        clientSecret: 'b00b94a3c9e84c53b96b2c70dd1b488a'
    });

    spotifyApi.clientCredentialsGrant()
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in
            });
        }).catch((err) => {
            res.sendStatus(400);
        });
});

app.listen(3001);