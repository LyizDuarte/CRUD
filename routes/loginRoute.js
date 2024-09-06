const express = require('express')
const LoginController = require("../controllers/loginController")

const router = express.Router();
let ctrl = new LoginController();
router.get("/login", ctrl.loginView);
router.post("/login", ctrl.login);

module.exports = router;