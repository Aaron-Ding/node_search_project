
var mongoose = require('mongoose')
var data = [{item: "go shopping"},{item:"walk dog"},{item:"kick some coding ass"}]
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoose.connect('mongodb://root:sino3388@ds231242.mlab.com:31242/aarongding')
//make a schema for the table
var todoSchema = new mongoose.Schema({
    item:String,
    option:Boolean
})
var Todo = mongoose.model('Aaron',todoSchema); //create a  collection
//add a item into Aaron collection
var itemOne = Todo({item: 'nihao-xiexie'},{option:false}).save(function(err){
    if (err) throw err;
});


module.exports= function(app){
    app.get('/todo',function(req,res){
        res.render('todo',{todos:data})
    });
    app.post('/todo',urlencodedParser,function(req,res){
        data.push(req.body);
        res.json(data);
    });
    app.delete('/todo/:item',function(req,res){
       function checkdata(todo){
            if (todo.item.replace(/ /g,'-') !== req.params.item){
                console.log('1111');
                return true ;}
            else
            {   console.log('2222');
                return false;}
        }
        data = data.filter(checkdata);

        res.json(data);
    });

}