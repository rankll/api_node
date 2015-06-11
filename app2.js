var mongoose = require('mongoose');
require('mongoose-multitenant')('_');
 
mongoose.connect('mongodb://localhost:27017/multitenant', {});		

var barSchema = new mongoose.Schema({
    title:String,
    _foos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Foo',
        $tenant:true
    }]
});
 
var fooSchema = new mongoose.Schema({
    title:String,
    date:Date
});

mongoose.mtModel('Bar', barSchema);
mongoose.mtModel('Foo', fooSchema);

var fooConstructor = mongoose.mtModel('tenant1.Foo');
var myFoo = new fooConstructor({
    title:'My Foo',
    date:new Date()
});
 
myFoo.save(function(err, result) {
    // This saved it to the collection named "tenant1__foos" 
});

var barConstructor = mongoose.mtModel('tenant1.Bar');
var myBar = new barConstructor({
    title:'My Bar',
    _foos:[myFoo._id]
});
 
myBar.save(function(err, result) {
    // Saved to the collection named "tenant1__bars" 
 
    barConstructor.find().populate('foos').exec(function(err, results) {
        console.log(results[0]._foos[0].title); // "My Foo" 
    });
});

var tenant2Bar = mongoose.mtModel('tenant2.Bar');
var newBar = new tenant2Bar({
    title:'New Bar',
    _foos:[myFoo._id]
});
 
newBar.save(function(err, result) {
    tenant2Bar.find().populate('foos').exec(function(err, results) {
        console.log(results[0]._foos[0]); // "undefined" 
    });
});

barSchema.pre('save', function(next) {
    
    // This gets Foos in the same tenancy as this Bar 
    this.getModel('Foo').find({_id:{$in:this._foos}}, function(err, foos) {
        // Do something to the related Foos. 
        next()
    });
});