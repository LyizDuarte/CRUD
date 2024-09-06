const Database = require("../utils/database");

class UsuarioModel {
  #id;
  #nome;
  #email;
  #senha;
  #ativo;
  #perfil_id;

  constructor(id, nome, email, senha, ativo, perfil_id) {
    this.#id = id;
    this.#nome = nome;
    this.#email = email;
    this.#senha = senha;
    this.#ativo = ativo;
    this.#perfil_id = perfil_id;
  }
  get id() {
    return this.#id;
  }
  set id(novo_id) {
    this.#id = novo_id;
  }
  get nome() {
    return this.#nome;
  }
  set nome(novo_nome) {
    this.#nome = novo_nome;
  }
  get email() {
    return this.#email;
  }
  set email(novo_email) {
    this.#email = novo_email;
  }
  get senha() {
    return this.#senha;
  }
  set senha(nova_senha) {
    this.#senha = nova_senha;
  }
  get ativo() {
    return this.#ativo;
  }
  set ativo(novo_ativo) {
    this.#ativo = novo_ativo;
  }
  get perfil_id() {
    return this.#perfil_id;
  }
  set perfil_id(novo_perfil_id) {
    this.#perfil_id = novo_perfil_id;
  }

  async listar() {
    const db = new Database();
    const sql = `select * from tb_usuario u inner join tb_perfil p on u.per_id = p.per_id`;
    const resultados = await db.ExecutaComando(sql);
    const listaUsuarios = [];
    for (const registro of resultados) {
      // Cria uma nova instância de UsuarioModel para cada registro, passando os valores das colunas como parâmetros
      listaUsuarios.push(
        new UsuarioModel(
          registro["usu_id"], //aqui o nome dos campos deve ser o mesmo que o do mysql
          registro["usu_nome"],
          registro["usu_email"],
          registro["usu_senha"],
          registro["usu_ativo"],
          registro["per_id"]
        )
      );
    }
    return listaUsuarios;
  }
  async gravar() {}
  async excluir() {}
  async atualizar() {}
}

module.exports = UsuarioModel;
