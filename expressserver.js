const express = require("express");
const path = require("path");
const hbs = require("hbs");
const fs = require('fs');
const dotenv  = require('dotenv');
const app = express();
// const cors = require('cors');
// var bodyParser = require('body-parser')
app.use(express.json());

// const session = require("express-session");
const homeRoute = require("./routes/index");

const templatePath = path.join(__dirname,"./templates/views");
const partialPath = path.join(__dirname,"./templates/partials")
console.log(templatePath);
app.set("view engine","hbs");
// Set the views directory explicitly
app.set('views', path.join(__dirname, 'views'));

// app.set("views",templatePath);

// hbs.registerPartials(partialPath);


//config files
dotenv.config({path : './config.env'});
const PORT = process.env.PORT;







app.use("/",homeRoute);

app.listen(PORT, (req,res) => {
    console.log(`server is running on ${PORT}`);
});