const listaCarros = ["Opala", "Cadillac", "Fusca"];
const listaUsuarios = [];

class HomeController {
  homeView(req, res) {
    res.render("home.ejs");
  }
}

module.exports = HomeController;
