
module.exports = function(app){
    app.get('/index', function(req,res){
            res.render("html/produtos",{produtos:result});
        });
}