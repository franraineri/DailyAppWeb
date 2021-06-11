const mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({ //FALTA ACOMODAR
    name: String,
    start_descrip: String,
    status: String, //[ to-do , in-progress , blocked , done]    
    startDate: Date, //null in case of status is to-do

    inproc_descrip: {String, Date},
    //history: {status + inproc_descrip}
});  

var DeveloperSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    birthday: { type: Date, default: Date.now },
    nationality: String,
    tasks: [TaskSchema],
    proyects: [String], }
);


//INDEX
DeveloperSchema.index({ name: 1});

var Task = mongoose.model('Task', TaskSchema);

var Developer = mongoose.model('Developer', DeveloperSchema);
module.exports = Developer, Task;  //module.exports = Task;

//DEFINE INSTANCES
//var someone = new Developer ( { name: "sergio", email: "gmail" } );

/*
Developer.create(someone, function(someone,err){
    console.log("hi")
    console.log(someone)
    res.json(someone);
});
*/


/*
var ProyectSchema = new mongoose.Schema({
    name: String,
    startDate: Date,
    status: String,
    tasks: {Task},
})  

var Proyect = mongoose.model('Proyect', ProyectSchema);
module.exports = Proyect;


//INSTANCE METHODS//
DeveloperSchema.methods.findAll = function(callback) {   //callback siempre va a tener el resultado de lo que resulta de function, recursivamente
    console.log(" returning every Developer")
    return this.model('Developers').find({} , callback)
}

DeveloperSchema.methods.findByDate = function(callback) {   //callback siempre va a tener el resultado de lo que resulta de function, recursivamente
    console.log(" returning Developers with more of this date of birth")
    return this.model('Developers').find({ birthday: {$gt: this.birthday} } , callback)
}


//STATICS//
DeveloperSchema.statics.findByName = function(name , callback){
    console.log(" returning Developers with the given name")
    return this.find( { name: new RegExp(name, 'i') }, callback)
}

DeveloperSchema.statics.findByAuthor = function(name , callback){
    console.log(" returning Developers with the given author name")
    return this.find( { author: new RegExp(name, 'i') }, callback)
}

DeveloperSchema.statics.findByEditorial = function(name , callback){
    console.log(" returning Developers with the given editorial name")
    return this.find( { editorial: new RegExp(name, 'i') }, callback)
}


TaskSchema.statics.find_ByStatus_Task = function(name , callback){
    console.log(" returning Developers in the given status")
    return this.find( { status: new RegExp(name, 'i') }, callback)
}

ProyectSchema.statics.find_ByStatus_Proyects = function(name , callback){
    console.log(" returning Developers in the given status")
    return this.find( { status: new RegExp(name, 'i') }, callback)
}





TaskSchema.statics.deleteAll = function(name , callback){
    return this.delete({},callback)
}


ProyectSchema.statics.deleteAll = function(name , callback){
    return this.delete({},callback)
}

DeveloperSchema.static.updateToMantenance_withCondition = function(condition, callback){
    return this.updateMany( condition,                  //Que estoy retornando ??
        {   $set: { status: "mantenimiento" },
            $currentDate: { lastModified: true } });
}

DeveloperSchema.static.updatePrice_withCondition = function(condition, callback){
    return this.updateMany( condition,                  //Que estoy retornando ??
        {   $mul: {price: 1.20},
        $currentDate: { lastModified: true } });
}

//VIRTUAL//
DeveloperSchema.virtual('age').get(function(percent_discount){
    return date.now() - this.birthday ;
})

//INDEXS//
*/

