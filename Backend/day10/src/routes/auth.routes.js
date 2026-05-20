let express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/auth.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

let router = express.Router();

router.get("/me", authMiddleware, (req, res) => {
  return res.status(200).json({
    message: "Currently loggedin user",
    user: req.user,
  });
});

router.post("/register", registerController);
router.post("/login", loginController);

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    message: "User logged out",
  });
});

module.exports = router;
