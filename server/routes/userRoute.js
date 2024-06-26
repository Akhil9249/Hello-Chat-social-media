const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const { checkAuth } = require("../middleware/checkAuth");
const { upload } = require("../uploads/multer");

router.post("/signup", userController.signup);
router.post("/login",userController.login);

function abc(req,res,next){
    console.log("middle");
    next()
}

// router.post("/changepassword", userController.changepassword);
router.post("/otp", userController.otp);
router.post("/resetpassword", userController.resetpassword);
router.post("/findaccount", userController.findAccount);

router.get("/home",checkAuth, userController.home);
router.post("/posts/upload",checkAuth,upload.single("upload_file"), userController.postsupload);
router.get("/profile",checkAuth, userController.profile);
router.get("/refresh-token",checkAuth, userController.refreshToken);


router.put("/follow",abc,checkAuth, userController.follow);
router.put("/unfollow", userController.unfollow);


module.exports = router;