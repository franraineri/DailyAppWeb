const mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({ //FALTA ACOMODAR
    name: String,
    start_descrip:  { type: String, default: "insert a description" },
    status: {type: String, default: "to-do" }, //[ to-do , in-progress , blocked , done]    
    startDate:  { type: Date, default: Date.now }, //null in case of status is to-do

    inproc_descrip: [{type: String, dafault: this.start_descrip}, {type: Date, default: Date.now}],
    history: {type: String, default: this.status}
});  

var Task = mongoose.model('Task', TaskSchema);

const options = {
    // Return the document after updates are applied
    new: true,
    // Create a document if one isn't found. Required for `setDefaultsOnInsert`
    upsert: true,
    setDefaultsOnInsert: true
  };

module.exports = Task;