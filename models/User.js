var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var userSchema = new Schema({
    username:String,
    phone: String,
    email: String,
    city: String,
},{
	timestamps: true
})

module.exports = mongoose.model('user', userSchema);