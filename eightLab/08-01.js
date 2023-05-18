const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const users = require('./users.json');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret-key',      
    resave: false,             // данные сессии не нужно сохранять каждый раз при обновлении страницы
    saveUninitialized: false   // данные сессии не должны быть сохранены, если они не были изменены
}));
app.use(passport.initialize());
app.use(passport.session());   // сохранения данных сессии пользователя в объекте запроса (req.user), который содержит информацию о текущем аутентифицированном пользователе

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    const user = users.find(u => u.id === id);
    done(null, user);
});

passport.use(new LocalStrategy((username, password, done) => {
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return done(null, false, { message: 'Incorrect username or password' });
    }
    return done(null, user);
}));

app.get('/login', (req, res) => {
    res.sendFile(__dirname+'/login.html');
});

app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    (req, res) => {
        res.redirect('/profile');
    }
);

app.get('/logout', function(req, res) {
    req.logout(function(err) {
        if (err) {
            console.error(err);
            return next(err);
        }
        res.redirect('/login');
    });
});

app.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
        res.send(`Logged in as ${req.user.username}`);
    } else {
        res.redirect('/login');
    }
});

app.use((req, res) => {
    res.status(404).send('404: Not found');
});

app.listen(3000, () => console.log('Server listening on port 3000'));
