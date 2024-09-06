document.addEventListener("DOMContentLoaded", () => {
  let btnCadastrar = document.querySelector("#btnCadastrar");
  btnCadastrar.addEventListener("click", cadastrar);

  function limparValidacao() {
    document.getElementById("msgErro").innerHTML = "";
    document.getElementById("inputNome").style["border-color"] = "#ced4da";
    document.getElementById("inputEmail").style["border-color"] = "#ced4da";
    document.getElementById("selPerfil").style["border-color"] = "#ced4da";
    document.getElementById("inputSenha").style["border-color"] = "#ced4da";
  }

  function validarCampos() {
    limparValidacao();
    let listaCampos = [];
    let inputNome = document.getElementById("inputNome");
    let inputEmail = document.getElementById("inputEmail");
    let selPerfil = document.getElementById("selPerfil");
    let inputSenha = document.getElementById("inputSenha");
    if (inputNome.value == "") listaCampos.push(inputNome);
    if (inputEmail.value == "") listaCampos.push(inputEmail);
    if (selPerfil.value == 0) listaCampos.push(selPerfil);
    if (inputSenha.value == "") listaCampos.push(inputSenha);

    if (listaCampos.length == 0) {
      return true;
    } else {
      for (let i = 0; i < listaCampos.length; i++) {
        listaCampos[i].style["border-color"] = "red";
      }
      alert("O formulario nao foi preenchido corretamente!");
      document.getElementById("msgErro").innerHTML =
        "<b>O formulario nao foi preenchido corretamente!<b>";
    }
    return false;
  }

  function cadastrar() {
    let inputNome = document.getElementById("inputNome");
    let inputEmail = document.getElementById("inputEmail");
    let inputSenha = document.getElementById("inputSenha");
    let selPerfil = document.getElementById("selPerfil");
    let cbAtivo = document.getElementById("cbAtivo");

    if (validarCampos()) {
      let obj = {
        nome: inputNome.value,
        email: inputEmail.value,
        senha: inputSenha.value,
        perfil: selPerfil.value,
        ativo: cbAtivo.checked,
      };
      let stringObj = JSON.stringify(obj);
      fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: stringObj,
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (res) {
          if (res.ok) {
            alert("Usuario cadastrado");
          } else {
            alert(
              "Erro ao cadastrar usuario, verifique o preenchimento dos campos"
            );
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
});
