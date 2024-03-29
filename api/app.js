var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var recordsRouter = require('./routes/records');
var patientRouter = require('./routes/patient');
var doctorRouter = require('./routes/doctor');

var app = express();
mongoose.set('strictQuery', false);

mongoose
	.connect(process.env.DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('MongoDB connection successful'))
	.catch((err) => console.error('MongoDB connection error:', err));

app.listen(3001)
console.log('Server is running on port 3001')

app.use(logger('dev'));
app.use(
	cors({
		allowedHeaders: ['x-api-auth', 'Content-Type'],
		origin: '*',
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/records', recordsRouter);
app.use('/doctor', doctorRouter);
app.use('/patient', patientRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// Set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// Return an error in JSON format instead of rendering a page
	res.status(err.status).json({
		error: {
			message: err.message,
			status: err.status,
			stack: process.env.NODE_ENV === 'development' ? err.stack : {},
		},
	});
});

module.exports = app;
