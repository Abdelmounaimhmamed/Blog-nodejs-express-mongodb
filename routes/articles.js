const express = require("express");
const router =  express.Router();
const ComposeSchema = require("./../models/compose");

router.get("/new" , (req,res) => {
    res.render("compose.ejs");
});

router.get("/edit/:id" , async (req, res) => {
    const artice  = await ComposeSchema.findById(req.params.id);
    res.render("edit.ejs", {article : artice});
});

router.get("/:id" , async (req, res) => {
    const compose = await ComposeSchema.findById(req.params.id);
    if (compose == null) res.redirect("/");
    res.render("show.ejs" , {compose : compose});
});


router.post("/new" ,async (req, res) => {
    let commose = new ComposeSchema({
        title : req.body.title,
        textCompose : req.body.textCompose
    });
    try{
        commose = await commose.save();
        res.redirect(`/articles/${commose.id}`);
    }
    catch (e) {
        console.log(e);
        res.send("new");
    }
    
});

router.delete("/:id" , async (req , res) => {
    await ComposeSchema.findByIdAndDelete(req.params.id);
    res.redirect("/");
});

module.exports = router;