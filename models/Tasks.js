const mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({ //FALTA ACOMODAR
    name: String,
    start_descrip: String,
    status: String, //[ to-do , in-progress , blocked , done]    
    startDate: Date, //null in case of status is to-do

    inproc_descrip: {String, Date},
    //history: {status + inproc_descrip}
});  

var Task = mongoose.model('Task', TaskSchema);

module.exports = TaskSchema;