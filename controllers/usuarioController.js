const usuarioModel = require("../models/usuarioModel");

class UsuarioController {
  async listagemView(req, res) {
    let UsuarioModel = new usuarioModel();
    let listaUsuarios = await UsuarioModel.listar();
    res.render("usuarios/listar.ejs", { usuarios: listaUsuarios });
  }
  cadastroView(req, res) {
    res.render("usuarios/cadastrar.ejs");
  }
  cadastrar(req, res) {
    console.log(req.body);
    let ok;
    if (
      req.body.nome &&
      req.body.email &&
      req.body.senha &&
      req.body.perfil &&
      req.body.perfil > 0
    ) {
      ok = true;
    } else {
      ok = false;
    }
    res.send({ ok: ok });
  }
}

module.exports = UsuarioController;
