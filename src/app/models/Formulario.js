import Sequelize, { Model } from 'sequelize'

class Formulario extends Model {
  static init(sequelize) {
    super.init(
      {
        codigoUnidadeGestoraSigefes: Sequelize.STRING,
        codigoUnidadeGestoraCidades: Sequelize.STRING,
        nomeUnidadeGestora: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'user_id', as: 'user'});
    this.hasMany(models.Estrutura, { foreignKey: 'form_id', as: 'estruturas'});
    this.hasMany(models.Unidade, { foreignKey: 'form_id', as: 'unidades'});
    this.hasMany(models.Procedimento, { foreignKey: 'form_id', as: 'procedimentos'});
    this.hasMany(models.TomadaContas, { foreignKey: 'form_id', as: 'tomada_contas'});
  }
}

export default Formulario;
