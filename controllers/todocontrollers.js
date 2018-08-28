var mongoose = require('mongoose')
//var data = [{item: "go shopping"},{item:"walk dog"},{item:"kick some coding ass"}]
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoose.connect('mongodb://root:sino3388@ds231242.mlab.com:31242/aarongding',{ useNewUrlParser: true })
//make a schema for the table
var feiSchema = new mongoose.Schema(
    {item: { type: String, trim: true, required: true },
        name: { type: String, trim: true, required: true },
    }
);
var ding = mongoose.model('fei',feiSchema); //create a  collection
//add a item into Aaron collection
/*var itemOne = ding({_id:3},{item: 'MEAN test'},{name: 'mlab test'}).save(function(err){
    if (err) throw err;
});*/
/*var testitem = ding({item: 'walk dog',name:'ding'}).save(function(err){
    if (err)throw err;
})*/

module.exports= function(app){
    app.get('/todo',function(req,res){
        //get data from mongoDB
        ding.find({},function(err,data){
            if (err)throw err;

        res.render('todo',{todos:data})
    });
    });
    app.post('/todo',urlencodedParser,function(req,res){
        console.log(req.body);
        var dingupdate = ding(req.body).save(function(err,data){
            if (err) throw err;
            res.json(data);
        })
    });
    app.delete('/todo/:item',function(req,res){
        ding.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
            if (err) throw err;
            res.json(data);
        })

/*       function checkdata(todo){
            if (todo.item.replace(/ /g,'-') !== req.params.item){
                console.log('1111');
                return true ;}
            else
            {   console.log('2222');
                return false;}
        }
        data = data.filter(checkdata);

        res.json(data);*/
    });

}