import Sequelize, { Model } from 'sequelize'

class Unidade extends Model {
  static init(sequelize) {
    super.init(
      {
        unidadeGestoraIdNumRegistro: Sequelize.STRING,
        unidadeGestoraNivelControleInterno: Sequelize.STRING,
        unidadeGestoraCodigoUnidadeGestora: Sequelize.STRING,
        unidadeGestoraOpiniaoPrestacaoContasControleInterno: Sequelize.STRING,
        unidadeGestoraFatoRelevanteRelaci: Sequelize.NUMBER,
        unidadeGestoraAssuntoPrincipalFatoRelevanteRelaci: Sequelize.NUMBER,
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Formulario, { foreignKey: 'form_id', as: 'form'});
  }
}

export default Unidade;
