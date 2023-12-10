const router =  require('express').Router();
const path = require('path');

router.get("/qrcode", (req, res) => {
    const encrypted_string = req.query.key;
    const hash = req.query.hash;
    console.log(encrypted_string, hash);
    
    // get data present in the block whose hash is hash
    const transactionResult = {
        "encrypted_string": "gAAAAABldD1UvtfpRh9H5JAII1rL230utAQfugvVQXOYjEVCb9EyhHYauKzpTZffLsXQykdCeti0vCbdDhDIguD4DMllucL02_aSuTaA57ZrrPCA83IHi87cMY7sEitU42o6ju2KPCo3",
        "certificate": "[file]Image or pdf"
    };
    const certificate =  path.join(__dirname, '..', 'media', 'test.png');
    if(encrypted_string === transactionResult.encrypted_string){
       return res.status(200).sendFile(certificate);
    }
    return res.status(401).json({verified: false});
});



module.exports = router;