require("dotenv").config();
const express = require("express");
const BodyParser = require("body-parser");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const contactRouter = require("./routes/contact");
const contactshema = require("./models/contact");
const ComposeSchema = require("./models/compose");
const methodOverride = require("method-override");
const port = 3000;
const app = express();

mongoose.connect(process.env.DATA_URI ,{useNewUrlParser : true, useUnifiedTopology : true});

app.set("view engine","ejs");
app.use(express.urlencoded({extended : false}));
app.use(express.static("./public"));
app.use(methodOverride('_method'));

app.use('/articles',articleRouter);
app.use('/contact' , contactRouter);

app.get('/' ,  async (req, res) =>{
    articles =  await ComposeSchema.find().sort({createdAt : 'desc'});
    res.render("index" , {articles : articles });
});



app.listen(port , () => {
    console.log(`--Start listining on port ${port}`);
    console.log("--Type localhost:3000 on ur browser");
    console.log("....");
});