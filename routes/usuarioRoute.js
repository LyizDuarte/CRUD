const express = require("express");
const UsuarioController = require("../controllers/usuarioController");
const router = express.Router();

let ctrl = new UsuarioController();
router.get("/", ctrl.listagemView);
router.get("/cadastrar", ctrl.cadastroView);
router.post("/cadastrar", ctrl.cadastrar);
module.exports = router;
