const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const session = require('express-session');

mysql.createConnection({
    host :"localhost",
    user :"root",
    password :"",
    database : "node_project"
})
const app = express();
app.get('/',(req,res) =>{
    const con = mysql.createConnection({
        host :"localhost",
        user :"root",
        password :"",
        database : "node_project"
    })
    con.query("SELECT * FROM products",(err,result) => {
    res.render('pages/index',{result:result});
    });

});


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret:"secret"}))
app.get('/about.ejs',(req,res) =>{
    res.render('pages/about');
});
app.get('/contact.ejs',(req,res) =>{
    res.render('pages/contact');
});
app.get('/index.ejs',(req,res) =>{
    const con = mysql.createConnection({
        host :"localhost",
        user :"root",
        password :"",
        database : "node_project"
    })
    con.query("SELECT * FROM products",(err,result) => {
    res.render('pages/index',{result:result});
    });

});
app.get('/special.ejs',(req,res) =>{
    res.render('pages/special');
});

app.set('view engine','ejs');
app.listen(8080,() =>{
    console.log('http://localhost:8080');
});