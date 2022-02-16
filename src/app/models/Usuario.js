import Sequelize, { Model } from 'sequelize';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        cpf: Sequelize.STRING,
        matricula:Sequelize.STRING,
        cargo:Sequelize.STRING,
        email:Sequelize.STRING,
        telefone:Sequelize.STRING,
        senha:Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
  checkPassword(senha) {
     return senha === this.senha;
  }
}

export default Usuario;