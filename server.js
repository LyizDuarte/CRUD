const express = require("express");
const routerHome = require("./routes/homeRoute");
const routerLogin = require("./routes/loginRoute");
const routerUsuario = require("./routes/usuarioRoute");
const expressEjsLayout = require("express-ejs-layouts");

const port = 5000;
const app = express();

app.use(express.urlencoded({ extended: true })); //biblioteca para processar os parametros da req
app.use(express.json());
app.set("view engine", "ejs");
app.set("layout", "./layout");

app.use(express.static("public"));
app.use(expressEjsLayout);
app.use("/", routerHome);
app.use("/", routerLogin);
app.use("/usuarios", routerUsuario);

app.listen(port, () => {
  console.log(`O app iniciou na porta ${port}`);
});
