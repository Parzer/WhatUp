const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const { Schema } = mongoose;

//Use the Schema object to describe each record
const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema); // Model Class for users Collection, does not overwrite