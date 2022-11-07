let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParse = require('body-parser'),
    mongodb = require('./database/db')

mongoose.Promise = global.Promise;
mongoose.connect(mongodb.db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database successfully connected');
}, error => {
    console.log('Database error: ' + error)
})

const studensRoute = require('./routes/student.routes')

const app = express();
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({
    extended: false
}))
app.use(cors());

// Static directoty path
app.use(express.static(path.join(__dirname, 'dist/')))
// Base roue
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
})

// API Root
app.use('/api', studensRoute);

// PORT
const port = process.env || 8000;

app.listen(port, () => {
    console.log('Listening on port ' + port)
})

// 404 Handler
app.use((req, res, next) => {
    next(createError(404));
})

// error handler
app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})