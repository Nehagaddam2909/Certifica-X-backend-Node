const router = require('express').Router();

router.get("/getKey", (req, res) => {

    // fetch key from database
    const key = "1234567890";
    res.json({ key });
});


router.get("/getOrgName",(req,res)=>{

    // fetch orgName from database
    const orgName = "XYZ";
    res.json({orgName});
})
module.exports = router;