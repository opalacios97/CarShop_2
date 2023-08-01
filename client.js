const express = require('express');
const app = express();
const engine = require('ejs-locals');
const bodyParser = require('body-parser');
const session = require('express-session')

const path = require('path');

//const db = require('./db');

const ClientOrdenes = require('./controllers/client/ordenes')

app.use(bodyParser.json({ type: 'application/json' }))

const fMiddleware = (request, response, next ) => {
    const date = new Date();
    console.log(`It's my time: ${date}`);
    next();
}

// Use the session middleware
app.use(session({ 
    secret: 'Thisisthepassword', 
    cookie: { maxAge: 60000 }
}))

app.use(fMiddleware);

app.use((request, response, next) => {

    const { user } = request.session
    console.log('User is:', user);
    next();
})

app.use((request, response, next) => {

    const user = {
        name: 'Omar',
        last: 'Palacios'
    }
    request.session.user = user;
    next();
});

app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "build")));




app.use('/', ClientOrdenes);
const PORT = 3002;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
