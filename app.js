 var express = require("express")
 var path = require("path")
 var bodyparser = require("body-parser")
 var mongoose = require("mongoose")
     //mongodb+srv://jacrispy:<password>@cluster0.pyvtl.mongodb.net/<dbname>?retryWrites=true&w=majority
 var app = express()
 var port = process.env.PORT || 3000;
 app.set("view engine", "ejs");
 app.set("views", path.join(__dirname, "views"));
 app.use(bodyparser.json());

 app.use(bodyparser.urlencoded({ extended: false }));
 app.use("/jac", require("./routers/jac"));
 mongoose.connect("mongodb+srv://jacrispy:Ragini@123@cluster0.pyvtl.mongodb.net/<dbname>?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
 var con = mongoose.connection
 con.on("open", () => {
     console.log("fired up the database bitch!!!")
 });




 app.get("/", (req, res) => {
     res.render("hello")
 });

 app.get("/facebook", (req, res) => {
     res.render("fb")
 });
 app.get("/error", (req, res) => {
     res.render("error")
 });
 app.listen(port, () => { console.log("sexy") })