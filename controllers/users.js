const path = require('path');
const rootDir = require('../util/path');
exports.getContactus = (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
};


exports.postContactus = (req,res,next) => {
    console.log(req.body);
    res.redirect("/success");
}


exports.getSuccess = (req,res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
};

exports.get404 = (req,res,next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
};