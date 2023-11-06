import Sequelize, { Model } from 'sequelize'

class Procedimento extends Model {
  static init(sequelize) {
    super.init(
      {
        procedimentosIdNumRegistro: Sequelize.STRING,
        procedimentosNivelControleInterno: Sequelize.STRING,
        procedimentosCodigoUnidadeGestora: Sequelize.STRING,
        procedimentosCodigoProcedimento: Sequelize.STRING,
        procedimentosTipoPontoControle: Sequelize.STRING,
        procedimentosUniversoAnalisado: Sequelize.STRING,
        procedimentosAmostraSelecionada: Sequelize.STRING,
        procedimentosUnidadeAmostraSelecionada: Sequelize.STRING,
        procedimentosDescricaoAmostraSelecionada: Sequelize.STRING,
        procedimentosDescricaoAnalise: Sequelize.STRING,
        procedimentosTipoProcedimentoAnalisado: Sequelize.STRING,
        procedimentosSituacaoAnalise: Sequelize.STRING,
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

export default Procedimento;
