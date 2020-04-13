const express = require("express");
const expressLayouts = require("express-ejs-layouts");
var mysql = require("mysql");
const app = express();



// connection configurations
var dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "todo-app"
});
// connect to database
dbConn.connect();


app.use(expressLayouts);
app.set("view engine", "ejs");

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

app.listen("3000", console.log("app started in port 3000"));
