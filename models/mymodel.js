var mongoose = require("mongoose")
var myschema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    }

}, { strict: false })

var mymodel = mongoose.model("mymodel", myschema);

module.exports = mymodel;