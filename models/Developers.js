const mongoose = require('mongoose');
const Task = require('./Tasks');

var DeveloperSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    birthday: { type: Date, default: '01/01/1995' },
    nationality: { type: String, default: "Arg"},
    tasks: [Task.schema],
    proyects: [String], }
);


//INDEX
DeveloperSchema.index({ name: 1});

var Developer = mongoose.model('Developer', DeveloperSchema);

// CREATE AND INSERT SOME INSTANCES
//var sometask = new Task ( { name: "Default Task", start_descrip: "this is a default task" } );
//var someone = new Developer ( { name: "Default", email: "gmail",tasks:[sometask] } );
//
//Developer.insertMany(someone)
//Task.insertMany(sometask)

const options = {
    // Return the document after updates are applied
    new: true,
    // Create a document if one isn't found. Required for `setDefaultsOnInsert`
    upsert: true,
    setDefaultsOnInsert: true
  };

module.exports = Developer;
