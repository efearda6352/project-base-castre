var express = require('express');
var router = express.Router();
const isAuthenticated = () => {
    // Gerçek bir kimlik doğrulama işlemi gerçekleştirin
    return true;  // Örnek olarak false döndürüyoruz
};

router.all("*", (req, res, next) => {
    if (isAuthenticated()) {
        next();
    } else {
        res.json({success: false, error: "Not authenticated"});
    }
}) 

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({success: true});
});

module.exports = router;
