const express = require("express");
const router = express.Router();
const contactschema = require("./../models/contact"); 


router.get('/' , function(req, res) {
    res.render("contact.ejs");
});

router.post("/" ,   async (req,res) => {
    const contact = new contactschema({
        email : req.body.email,
        text : req.body.text,
        birth : req.body.birth,
        comment : req.body.comment
    });
    try{
         await contact.save();
         res.redirect("/");
    }
    catch (e){
        console.log(e);
    }
});

module.exports = router;