// Need to have a Folder called views with a file called list ejs.
// First the app.get get trigger which will render the page and pass the values.
// If you use the Work page the Post request will trigger app.post which will look at the value of the todolist name 
// and will redirect you to the app.get which will render the page right page.
 
const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js") //Link to the module 
// This array will store the values from the button's input.
let  items = [];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public")); // get hold of the CSS inside public

// App.get happen, when i try to access the server, when i access the Url it is going to fetch the index.html and display the content on my Screen.
app.get("/", function(req, res){

    const day = date.getDay(); // Module from date.js
    
    res.render("list", { // Render a file called list.ejs and pass a variable called kindOfDay (KindOfDay = day).
        listTitle: day, // will change the H1 to the date 
        newListItem: items // will send array to list ejs and trigger loop.
    });
});
// grab the value of the button input.
app.post('/',function(req, res){
    list = req.body.list
    item = req.body.newItem
    if(list === "Work List"){
        workItems.push(item)
        res.redirect("/work");
    } else {
        items.push(item)
        res.redirect("/");
    }

    //redirect to home route to trigger app.get and populate items.
});

// App.get happen, when i try to access the server, when i access the Url it is going to fetch the index.html and display the content on my Screen.
app.get("/work", function(req, res){
    res.render("list", { // will render the work extension page and pass the values 
        listTitle: "Work List",// Will change the H1 to work list
        newListItem: workItems // will send array to list ejs and trigger loop.
    });
})

// grab the value of the button input.
app.post("/work", function(req, res){
    workItems.push()
    res.redirect("/work");
});

 // Listen to that port.
 app.listen(3000, function (){
    console.log("Server started on port 3000");
});