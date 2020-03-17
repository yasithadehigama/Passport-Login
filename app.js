const express = require("express");

const app = express();

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

app.listen("3000", console.log("app started in port 3000"));
