const mongoose = require('mongoose');
const Task = require('./Tasks');

var DeveloperSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    birthday: { type: Date, default: Date.now },
    nationality: String,
    tasks: [Task.schema],
    proyects: [String], }
);


//INDEX
DeveloperSchema.index({ name: 1});


var Developer = mongoose.model('Developer', DeveloperSchema);

//DEFINING INSTANCES
var someone = new Developer ( { name: "Default", email: "gmail" } );

Developer.insertMany(someone)
module.exports = Developer;
