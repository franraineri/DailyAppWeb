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
var sometask = new Task ( { name: "Default Task", start_descrip: "this is a default task" } );
var someone = new Developer ( { name: "Default", email: "gmail",tasks:[sometask] } );

Developer.insertMany(someone)
Task.insertMany(sometask)

module.exports = Developer;
