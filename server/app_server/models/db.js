const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://dalenmromelien:xPVe7YHTuhTut7zY@cluster0.d3ddqfa.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose Disconnected');
});