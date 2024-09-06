class loginController {
  loginView(req, res) {
    res.render("login.ejs", { layout: false });
  }
  login(req, res) {
    if (req.body.nomeUser == "luiz@fipp.com" && req.body.senha == "abc123") {
      res.render("sucesso.ejs");
    } else {
      res.render("login.ejs", {
        layout: false,
        msg: "PREENCHA OS CAMPOS NOVAMENTE!",
      });
    }
  }
}
module.exports = loginController;
