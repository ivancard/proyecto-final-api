const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.listen(process.env.PORT || 3000);

var quotes = [
    {
        'text': 'Cada vez que levantes tu guitarra para tocar, toca como si fuera la ultima vez.',
        'author': 'Eric Clapton',
    },
    {
        'text': 'Realmente no importa con que equipo estas tocando, tu sonido es tu cerebro y tus dedos.',
        'author': 'Eddie Van Halen',
    },
    {
        'text': 'Amo tocar. Si pudiera hacer solo esto, sería una utopía.',
        'author': 'Jimmy Page',
    },
    {
        'text': 'La musica es mi religion',
        'author': 'Jimmy Hendrix',
    }
];

app.get('/random-quote', function(req, res) {
    var randomQuote = getRandomQuote();
	res.send(randomQuote);
});

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}